<script>
    import * as d3 from 'd3'
    import { formatDate } from '$lib';
    import { browser } from '$app/environment';
	import ChartTooltip from '$lib/components/containers/labels/ChartTooltip.svelte'
	import { onMount } from 'svelte'

    /**
     *  @param {array} data
     *      data - an array of objects containing the area chart data.
     *      For UNSTACKED area charts each object must have a minimum of three properties – 
     *      one for the domain, one for the range, and one for the series differentiator =>
     *      { x: <domain-value>, y: <range-value>, series: <series-name>, ... }.
     *      Note that there can be more properties within this object, but they are not accessed
     *      by the chart component.
     * 
     *  @param {string} domain
     *      domain - string property that declares the name of the object key used to define the x-axis.
     * 
     *  @param {string} range
     *      range - string property that declares the name of the object key used to define the y-axis.
     * 
     *  @param {string} seriesKey
     *      seriesKey - string property that declares the object key differentiating each series
     */

    export let data = [],
            tooltipId,
            areaColors = [],
            lineColors = [],
            domain, 
            range,
            seriesKey,
            fullDate,
            yearOnly,
            monthOnly,
            monthDay,
            monthYear,
            line,
            stacked,
            chartHeight = null

    let width = 1344
    let height = chartHeight || 400
    let marginLeft = 0 // 20
    let marginRight = 0 // 20
    let marginTop = 24
    let marginBottom = 24

    let mouseDateSnap, xScale, yScale, stroke, stack, area, lines =[]
    let formatFull = d3.utcFormat("%B %d, %Y")
    let formatYear = d3.utcFormat("%Y")
    let formatMonth = d3.utcFormat("%B")
    let formatMonthDay = d3.utcFormat("%B %d")
    let formatMonthYear = d3.utcFormat("%B %Y")

    $: {
        if (stacked) {
            for (let obj of data) {
                obj[domain] = new Date(obj[domain])
            }

            stack = d3.stack()
            .keys(d3.union(data.map((d) => d[seriesKey])))
            .value(([, D], key) => D.get(key)[range])
            (d3.index(data, (d) => d[domain], (d) => d[seriesKey]))

            xScale = d3.scaleTime()
            .domain(d3.extent(data, (d) => d[domain]))
            .range([marginLeft, width - marginRight])
            
            yScale = d3.scaleLinear()
            .domain([0, d3.max(stack, (d) => d3.max(d, (d) => d[1]))])
            .range([height - marginBottom, marginTop])
            
            area = d3.area()
            .x((d) => xScale(d.data[0]))
            .y0((d) => yScale(d[0]))
            .y1((d) => yScale(d[1]))
            
            stroke = d3.line()
            .x((d) => xScale(d.data[0]))
            .y((d) => yScale(d[1]))
            
            //
        } else {
            for (let obj of data) {
                obj[domain] = new Date(obj[domain])
            }
    
            xScale = d3.scaleTime()
                .domain(d3.extent(data, (d) => d[domain]))
                .range([marginLeft, width - marginRight])
            yScale = d3.scaleLinear()
                .domain([0, d3.max(data, (d) => d[range])])
                .range([height - marginBottom, marginTop])

            area = d3.area()
                .x((d) => xScale(d[domain]))
                .y0(yScale(0))
                .y1((d) => yScale(d[range]))
        
            stroke = d3.line()
                .x((d) => d[domain])
                .y((d) => d[range])
    
            // 
        }
    }

    let tooltip, tooltipData = { top: 0, left: 0, series: '', domain: 0, range: 0}
    if (browser) {
        tooltip = d3.select(`#${tooltipId}`)
    }

    function enterTooltip(e) {
        tooltip.style('opacity', 1)
    }

    function movingTooltip(e, d, s) {
        const [x, y] = d3.pointer(e)
        tooltipData.top = e.offsetY - 85
        tooltipData.left = e.offsetX - 60
        tooltipData.series = s
        tooltipData.domain = fullDate ? formatFull(xScale.invert(x)) : yearOnly ? formatYear(xScale.invert(x)) : monthOnly ? formatMonth(xScale.invert(x)) : monthDay ? formatMonthDay(xScale.invert(x)) : monthYear ? formatMonthYear(xScale.invert(x)) : formatFull(xScale.invert(x))
        tooltipData.range = yScale.invert(y)

        mouseDateSnap = d3.timeYear.floor(xScale.invert(x))
    }

    function leaveTooltip(e) {
        tooltip.style('opacity', 0)
    }
</script>

<svg
    class="area-chart-svg"
    viewBox="0 0 {width} {height}"
>
    <!-- Y-Axis lines -->
    {#each yScale.ticks() as tick}
        <line
            stroke="var(--neutral-050)"
            x1={marginLeft}
            x2={width - marginRight}
            y1={yScale(tick)}
            y2={yScale(tick)}
        />
    {/each}

    <!-- Areas -->
    <!-- {#if !line} -->
        {#if stacked}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            {#each stack as series, i}
                <!-- svelte-ignore missing-declaration -->
                <path
                stroke={lineColors[i]}
                stroke-width={2}
                fill='none'
                d={stroke(series)}
                />
                {#if !line}
                    <path 
                        on:mouseenter={enterTooltip}
                        on:mousemove={(e) => movingTooltip(e, data, series.key)}
                        on:mouseleave={leaveTooltip}
                        fill={areaColors[i]}
                        d={area(series)}
                    />
                {/if}
            {/each}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        {:else}
            <!-- <defs>   
                <linearGradient id="area-gradient{i}" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stop-color={areaColors[i]} opacity="0.8" />
                    <stop offset="100%" stop-color="white" opacity="0" />
                </linearGradient>
            </defs> -->
            <path 
            stroke={lineColors[0]}
            stroke-width="2"
            fill="none"
            d={stroke(data)}
            />
            {#if !line}
                <!-- svelte-ignore missing-declaration -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <path
                    on:mouseenter={enterTooltip}
                    on:mousemove={(e) => movingTooltip(e, data, data[0][seriesKey])}
                    on:mouseleave={leaveTooltip}
                    fill={areaColors[0]}
                    d={area(data)}
                />
            {/if}
        {/if}
    <!-- {/if} -->
    <!-- {#each lines as stroke, i}
        <path 
            stroke={lineColors[i]}
            stroke-width="2"
            fill="none"
            d={stroke}
        />
    {/each} -->

    <!-- Base Axis -->
    <g transform="translate(0,{height - marginBottom})">
        {#if stacked}
            {#each stack as series, i}
                {#each series as item}
                    <text
                        class="axis-label"
                        fill="gray"
                        text-anchor="start"
                        x={xScale(item.data[0])}
                        y={22}
                    >
                        {fullDate ? formatFull(item.data[0]) : yearOnly ? formatYear(item.data[0]) : monthOnly ? formatMonth(item.data[0]) : monthDay ? formatMonthDay(item.data[0]) : monthYear ? formatMonthYear(item.data[0]) : formatFull(item.data[0])}
                    </text>
                {/each}
            {/each}
        {:else}
            {#each data as d, i}
                <text
                    class="axis-label"
                    fill="gray"
                    text-anchor="start"
                    x={(width/data.length) * i}
                    y={22}
                >
                    {fullDate ? formatFull(d[domain]) : yearOnly ? formatYear(d[domain]) : monthOnly ? formatMonth(d[domain]) : monthDay ? formatMonthDay(d[domain]) : monthYear ? formatMonthYear(d[domain]) : formatFull(d[domain])}
                </text>
            {/each}
        {/if}
    </g>

    <!-- Tooltip Line -->
    <line 
        stroke='var(--neutral-trans-100)'
        stroke-dasharray='2 3'
        x1={xScale(mouseDateSnap)}
        y1={marginTop}
        y2={height - marginBottom}
    />
</svg>

<ChartTooltip {tooltipId} x={tooltipData.left} y={tooltipData.top} series={tooltipData.series} domainLabel={domain} domain={tooltipData.domain} rangeLabel={range} range={tooltipData.range} />

<style>
    .area-chart-svg {
        width: 100%;
        height: 100%;
    }

    .axis-label {
        font-size: 11px;
    }
</style>
