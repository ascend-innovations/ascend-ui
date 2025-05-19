<script>
	import * as d3 from 'd3'
	import { ChartTooltip } from '$lib/index.js'
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

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
		currency,
		valueOneLabel,
		valueTwoLabel,
		sort = null,
		ring = false,
		tooltipId
		
	let pie,
		arcPath,
		opacity = [],
		chartData

	let tooltip,
		tooltipData = { y: 0, x: 0, title: '', tooltipId, valueOneLabel, valueOne: 0, currency }
	if (valueTwoLabel) {
		tooltipData.valueTwoLabel = valueTwoLabel
		tooltipData.valueTwo = 0
	}

	function renderChart(chartContainer, width, height) {
		let svg = d3.create('svg')
			.classed('width-100', true)
			.attr('width', height)
			.attr('viewBox', `-${height / 2} -${height / 2} ${height} ${height}`)
			.style('overflow', 'visible')

		if (sort === 'ascending') {
			pie = d3
				.pie()
				.sort((a, b) => d3.ascending(a[range], b[range]))
				.value((d) => d[range])
		} else if (sort === 'descending') {
			pie = d3
				.pie()
				.sort((a, b) => d3.descending(a[range], b[range]))
				.value((d) => d[range])
		} else {
			pie = d3
				.pie()
				.sort(null)
				.value((d) => d[range])
		}

		arcPath = d3
			.arc()
			.innerRadius(ring ? width / 3.8 : 0)
			.outerRadius(Math.min(width, height) / 2)

		opacity = Array(chartData.length).fill(1)

		svg.append('g')
			// .attr('transform', `translate(${height / 2}, ${height / 2})`)
			.selectAll('path')
			.data(pie(chartData))
			.join('path')
			.classed('arc-path', true)
			.attr('fill', (d, i) => arcColors[i])
			.attr('opacity', (d, i) => opacity[i])
			.attr('d', arcPath)
			.on('mouseenter', enterTooltip)
			.on('mousemove', (e, d, i) => movingTooltip(e, d, i))
			.on('mouseleave', leaveTooltip)

		chartContainer.append(() => svg.node())
	}

	onMount(() => {
		if (browser) {
			tooltip = d3.select(`#${tooltipId}`).style('opacity', 0)
			let chartContainer = d3.select(`.${tooltipId}-chart`)

			let height = chartContainer.node().parentNode.getBoundingClientRect().height

			chartData = JSON.parse(JSON.stringify(data))

			window.addEventListener('resize', () => {
				// Recalculate the width and height of the chart sizer
				let height = chartContainer.node().parentNode.getBoundingClientRect().height

				// Remove the old chart
				chartContainer.selectAll('*').remove()

				// Redraw the chart
				renderChart(chartContainer, height, height)
			})

			renderChart(chartContainer, height, height)
		}
	})

	function enterTooltip(e) {
		tooltip.style('opacity', 1)
	}

	function movingTooltip(e, d, i) {
		let tooltipHeight = tooltip.node().getBoundingClientRect().height
		let tooltipWidth = tooltip.node().getBoundingClientRect().width
		
		tooltipData.y = e.offsetY - tooltipHeight - 20
		tooltipData.x = e.offsetX - tooltipWidth / 2
		tooltipData.title = d.data[domain]
		tooltipData.valueOne = d.data[range]
		if (valueTwoLabel) tooltipData.valueTwo = d.data[valueTwoLabel]
		changeOpacityOnHover(i)
	}

	function leaveTooltip(e) {
		tooltip.style('opacity', 0)
		resetOpacity()
	}

	function changeOpacityOnHover(i) {
		opacity = opacity.map((o, index) => {
			o = index === i ? 1 : 0.5
			return o
		})
	}

	function resetOpacity() {
		opacity = opacity.map((o) => {
			o = 1
			return o
		})
	}
</script>

<div class="{tooltipId}-chart pie-chart-svg-container width-100">
	<ChartTooltip tooltipInfo={tooltipData} />
</div>
