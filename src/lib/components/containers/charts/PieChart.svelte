<script>
    import * as d3 from 'd3'
    import { browser } from '$app/environment';
	import ChartTooltip from '$lib/components/containers/labels/ChartTooltip.svelte'

    /**
     *  @param {array} data
     *      data - an array of objects containing the pie chart data.
     *      Each object must have a minimum of two properties – one for the domain and
     *      one for the range value => { x: <domain-value>, y: <range-value>, ... }.
     *      Note that there can be more properties within this object, but they are not accessed
     *      by the chart component.
     * 
     *  @param {string} domain
     *      domain - string property that declares the name of the object key used to define the arc groupings.
     * 
     *  @param {string} range
     *      range - string property that declares the name of the object key used to define
     *      the measured arc value.
     */

    export let data,
            arcColors = [],
            domain,
            range,
            sort = null,
            ring = false,
            tooltipId,
            chartHeight

    let width = 306
    let height = chartHeight || 306
    let total = 0
    let pie

    for (let item of data) {
        total += item.value
    }

    if (sort === 'ascending') {
        pie = d3.pie()
            .sort((a, b) => d3.ascending(a[range], b[range]))
            .value((d) => d[range])
    } else if (sort === 'descending') {
        pie = d3.pie()
            .sort((a, b) => d3.descending(a[range], b[range]))
            .value((d) => d[range])
    } else {
        pie = d3.pie()
            .sort(null)
            .value((d) => d[range])
    }

    const arcPath = d3.arc()
        .innerRadius(ring ? width / 3.80 : 0)
        .outerRadius((Math.min(width, height)) / 2)

    const arcs = pie(data)

    let tooltip, tooltipData = { top: 0, left: 0, domain: 0, range: 0}
    if (browser) {
        tooltip = d3.select(`#${tooltipId}`).style('opacity', 0)
    }

    function enterTooltip(e) {
        tooltip.style('opacity', 1)
    }

    function movingTooltip(e, d) {
        const [x, y] = d3.pointer(e)
        tooltipData.top = e.offsetY - 85
        tooltipData.left = e.offsetX - 10
        tooltipData.domain = d.data[domain]
        tooltipData.range = d[range]
    }

    function leaveTooltip(e) {
        tooltip.style('opacity', 0)
    }
</script>

<div class="svg-container">
    <svg
        class="pie-chart-svg"
        viewBox="{-width / 2} {-height / 2} {width} {height}"
    >
        <g>
            {#each arcs as slice, i}
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <path
                    on:mouseenter={enterTooltip}
                    on:mousemove={(e) => movingTooltip(e, slice)}
                    on:mouseleave={leaveTooltip}
                    fill={arcColors[i]}
                    d={arcPath(slice)}
                />
            {/each}
        </g>
    </svg>
    <ChartTooltip {tooltipId} x={tooltipData.left} y={tooltipData.top} series={tooltipData.domain} rangeLabel={range} range={tooltipData.range} />
</div>

<style>
    .svg-container {
        width: 100%;
        height: 100%;
    }

    .pie-chart-svg {
        width: 100%;
    }
</style>
