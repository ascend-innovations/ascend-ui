<script>
    import { Card } from "$lib/index.js"
    import BarChart from "$lib/components/containers/charts/BarChart.svelte";
    import AreaChart from "$lib/components/containers/charts/AreaChart.svelte";
    import PieChart from "$lib/components/containers/charts/PieChart.svelte";
    import { ChartKeyContainer } from "$lib/index.js";
	import { onMount } from "svelte"

    export let data = [],
        type = '',
        title = 'Title',
        domain = '',
        range = '',
        fullDate = false,
        yearOnly = false,
        monthOnly = false,
        monthDay = false,
        monthYear = false,
        tooltipId = '',
        barColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)', 'var(--secondary-050)'],
        areaColors = ['var(--secondary-trans-600)', 'var(--secondary-trans-500)', 'var(--secondary-trans-400)', 'var(--secondary-trans-300)', 'var(--secondary-trans-200)', 'var(--secondary-trans-100)'],
        lineColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)'],
        arcColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)', 'var(--secondary-050)'],
        vertical = false,
        horizontal = false,
        stacked = false,
        sort = '',
        seriesKey = '',
        ring = false,
        line = false,
        width = null,
        chartHeight = 391
    
    let chartWidth, stackedData = []
    $: height = type === 'pie' ? 280 : chartHeight
    // pull out the unique series values for the chart key
    let seenValues = []
    for (let item of data) {
        stackedData.push(item[seriesKey])
    }
    for (let [index, value] of stackedData.entries()) {
        if (!seenValues.includes(value)) {
            const obj = {}
            obj[seriesKey] = value
            stackedData[index] = obj
            seenValues.push(value)
        }
    }
    for (let i = stackedData.length - 1; i >= 0; i--) {
        if (typeof stackedData[i] === 'string') stackedData.splice(i, 1)
    }
</script>

<Card
    {title}
    chart
    classes={['neutral-shadow-l']}
    styles={['position: relative', `width: ${type === 'pie' ? '354px' : '100%' }`, `min-height: 100%`, `height: fit-content`, 'border: 1px solid var(--neutral-100)', 'border-radius: 24px', 'padding: var(--spacing09)', 'font-weight: 700']}
>
    <slot name='chart-header' />
    <div class='chart-wrapper' bind:clientWidth={chartWidth}>
        {#if type === 'bar'}
            <BarChart 
                {tooltipId}
                {data}
                {domain}
                {range}
                {barColors}
                {vertical}
                {horizontal}
                {stacked}
                {sort}
                {seriesKey}
                {chartHeight}
                width={chartWidth}
            />
            {#if stacked}
                <ChartKeyContainer data={stackedData} {seriesKey} colors={barColors} />
            {/if}
        {:else if type === 'area'}
            <AreaChart
                {tooltipId}
                {data}
                {domain}
                {range}
                {seriesKey}
                {areaColors}
                {lineColors}
                {stacked}
                {line}
                {height}
                {fullDate}
                {yearOnly}
                {monthOnly}
                {monthDay}
                {monthYear}
                width={chartWidth}
            />
            {#if stacked}
                <ChartKeyContainer data={stackedData} {seriesKey} colors={barColors} />
            {/if}
        {:else if type === 'pie'}
            <PieChart 
                {tooltipId}
                {data}
                {domain}
                {range}
                {sort}
                {arcColors}
                {ring}
                {height}
            />
            <ChartKeyContainer 
                {data} 
                {seriesKey} 
                colors={barColors} 
                column={ chartWidth < 500 ? true : false }
            />
        {:else if type === '' || data.length === 0}
            <p>This chart has no data or parameters</p>
        {/if}
    </div>
</Card>

<style>
    .chart-wrapper {
        margin-top: var(--spacing09);
        min-height: 100%;
    }
</style>
