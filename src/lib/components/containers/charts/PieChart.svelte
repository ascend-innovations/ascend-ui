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
		tooltipId,
		chartHeight = 306

	let width = 306
	let height = chartHeight
	let pie, arcPath, arcs, opacity = []
	$: chartData = JSON.parse(JSON.stringify(data)) // copies and removes references to original data

	$: {
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

		console.log(chartData)
		arcs = pie(chartData)

		opacity = Array(chartData.length).fill(1)
	}

	let tooltip,
		tooltipData = { y: 0, x: 0, title: '', tooltipId, valueOneLabel, valueOne: 0, currency }
	if (valueTwoLabel) {
		tooltipData.valueTwoLabel = valueTwoLabel
		tooltipData.valueTwo = 0
	}

	onMount(() => {
		if (browser) {
			tooltip = d3.select(`#${tooltipId}`).style('opacity', 0)
		}
	})

	function enterTooltip(e) {
		tooltip.style('opacity', 1)
	}

	function movingTooltip(e, d, i) {
		const [x, y] = d3.pointer(e)
		tooltipData.y = e.offsetY - 85
		tooltipData.x = e.offsetX - 10
		tooltipData.title = d.data[domain]
		tooltipData.valueOne = d.data[domain]
		if (valueTwoLabel) tooltipData.valueTwo = d.data[range]
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

<div class="svg-container" >
	<svg
		class="pie-chart-svg"
		width={height}
		height={height}
		viewBox="{-height / 2} {-height / 2} {height} {height}"
	>
		<g>
			{#each arcs as slice, i}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<path
					class="arc"
					on:mouseenter={enterTooltip}
					on:mousemove={(e) => movingTooltip(e, slice, i)}
					on:mouseleave={leaveTooltip}
					fill={arcColors[i]}
					opacity={opacity[i]}
					d={arcPath(slice)}
				/>
			{/each}
		</g>
	</svg>
	<ChartTooltip tooltipInfo={tooltipData} />
</div>

<style>
	.svg-container {
		display: block;
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.pie-chart-svg {
		width: 100%;
	}
	.arc {
		transition: all ease-out 300ms;
	}
</style>
