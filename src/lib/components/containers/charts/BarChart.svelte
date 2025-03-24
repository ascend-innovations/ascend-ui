<script>
	import * as d3 from 'd3'
	import { abbreviateNumber, ChartTooltip, RuleTip, XCircleCloseExtraSmallIcon } from '$lib/index.js'
	import { browser } from '$app/environment'
	import { afterUpdate, onMount } from 'svelte'

	/**
	 *  @param {array} data
	 *      data - an array of objects containing the bar chart data.
	 *      For all bar charts each object must have a minimum of three properties –
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
	 *      seriesKey - string property that declares the object key to differentiating each series
	 */

	export let data,
		barColors = [],
		vertical = false,
		horizontal = false,
		timeseries,
		stacked = false,
		sort = null,
		domain,
		range,
		currency,
		domainLabel = '',
		rangeLabel = '',
		valueOneLabel,
		valueTwoLabel,
		seriesKey = null,
		tooltipId,
		rule = null,
		chartWidth = 700,
		chartHeight = 400

	let innerWidth
	$: width = chartWidth
	$: height = chartHeight
	let marginLeft = vertical ? 25 : 125
	let marginRight = vertical ? 20 : 50
	let marginTop = vertical ? 24 : 20
	let marginBottom = vertical ? (domainLabel ? 50 : 24) : 20
	let avgArray = []
	let position = rule
	let xScale,
		yScale,
		stack,
		opacity = [],
		charactersPerBand,
		tickVals, 
		scaleWidth
	$: chartData = JSON.parse(JSON.stringify(data)) // copies and removes references to original data

	let formatFull = d3.utcFormat('%-m/%-d/%Y')
	let formatYear = d3.utcFormat('%Y')
	let formatMonth = d3.utcFormat('%b')
	let formatMonthDay = d3.utcFormat('%-m/%-d')
	let formatMonthYear = d3.utcFormat('%-m/%Y')
	let formatQuarter = (d) => `Q${d3.utcFormat(`%q %Y`)(d)}`
	let formatFiscalQuarter = (d) => {
		if (Number(d3.utcFormat('%q')(d)) < 3) {
			return `Q${Number(d3.utcFormat('%q')(d)) + 2} SFY${d3.utcFormat('%Y')(d)}`
		} else {
			return `Q${Number(d3.utcFormat('%q')(d)) - 2} SFY${Number(d3.utcFormat('%Y')(d)) + 1}`
		}
	} // offset by 2 quarters

	$: tickFormat = d3.timeDay
	$: labelFormat = formatFull

	$: {
		// Re-assign margins based on small screens
		if (innerWidth < 768) {
			if (vertical) {
				marginLeft = rangeLabel ? 35 : 20
			} else if (horizontal) {
			}
		} else if (innerWidth >= 768) {
			if (vertical) {
				marginLeft = rangeLabel ? 40 : 25
			}
		}

		if (vertical) {
			if (stacked) {
				stack = d3
					.stack()
					.keys(d3.union(chartData.map((d) => d[seriesKey])))
					.value(([, D], key) => D.get(key)[range])(
					d3.index(
						chartData,
						(d) => d[domain],
						(d) => d[seriesKey],
					),
				)

				if (timeseries) {
					// date parsing and quarter assignment
				} else {
					xScale = d3
						.scaleBand()
						.domain(chartData.map((d) => d[domain]))
						.range([marginLeft, width - marginRight])
						.padding(0.3)
				}

				yScale = d3
					.scaleLinear()
					.domain([0, d3.max(stack, (d) => d3.max(d, (d) => d[1]))])
					.range([height - marginBottom, marginTop])

				opacity = Array(stack.length).fill(1)
			} else {
				if (sort === 'ascending') {
					xScale = d3
						.scaleBand()
						.domain(
							d3.groupSort(
								chartData,
								([d]) => d[range],
								(d) => d[domain],
							),
						)
						.range([marginLeft, width - marginRight])
						.padding(0.3)
				} else if (sort === 'descending') {
					xScale = d3
						.scaleBand()
						.domain(
							d3.groupSort(
								chartData,
								([d]) => -d[range],
								(d) => d[domain],
							),
						)
						.range([marginLeft, width - marginRight])
						.padding(0.3)
				} else {
					if (timeseries) {
						// date parsing and quarter assignment
					} else {
						xScale = d3
							.scaleBand()
							.domain(chartData.map((d) => d[domain]))
							.range([marginLeft, width - marginRight])
							.padding(0.3)
					}
				}

				yScale = d3
					.scaleLinear()
					.domain([0, d3.max(chartData, (d) => d[range])])
					.range([height - marginBottom, marginTop])

				opacity = Array(chartData.length).fill(1)

				if (rule === 'avg') {
					let avg = 0
					chartData.forEach((el) => avgArray.push(el[range]))
					avgArray.forEach((el) => (avg += el))
					position = avg / avgArray.length
				}
			}
		}

		if (horizontal) {
			if (stacked) {
				stack = d3
					.stack()
					.keys(d3.union(chartData.map((d) => d[seriesKey])))
					.value(([, D], key) => D.get(key)[domain])(
					d3.index(
						chartData,
						(d) => d[range],
						(d) => d[seriesKey],
					),
				)

				yScale = d3
					.scaleBand()
					.domain(chartData.map((d) => d[range]))
					.range([marginTop, height - marginBottom])
					.padding(0.2)

				xScale = d3
					.scaleLinear()
					.domain([0, d3.max(stack, (d) => d3.max(d, (d) => d[1]))])
					.range([width - marginRight, marginLeft])
			} else {
				if (sort === 'ascending') {
					yScale = d3
						.scaleBand()
						.domain(
							d3.groupSort(
								chartData,
								([d]) => d[domain],
								(d) => d[range],
							),
						)
						.range([marginTop, height - marginBottom])
						.padding(0.2)
				} else if (sort === 'descending') {
					yScale = d3
						.scaleBand()
						.domain(
							d3.groupSort(
								chartData,
								([d]) => -d[domain],
								(d) => d[range],
							),
						)
						.range([marginTop, height - marginBottom])
						.padding(0.2)
				} else {
					yScale = d3
						.scaleBand()
						.domain(chartData.map((d) => d[range]))
						.range([marginTop, height - marginBottom])
						.padding(0.2)
				}

				xScale = d3
					.scaleLinear()
					.domain([0, d3.max(chartData, (d) => d[domain])])
					.range([width - marginRight, marginLeft])
			}
		}
	}

	let tooltip,
		tooltipData = { y: 0, x: 0, title: '', valueOneLabel, tooltipId, valueOne: 0, currency }

	if (valueTwoLabel) {
		tooltipData.valueTwoLabel = valueTwoLabel
		tooltipData.valueTwo = 0
	}

	onMount(() => {
		if (browser) {
			tooltip = d3.select(`#${tooltipId}`)
		}
	})

	afterUpdate(() => {
		tickVals = xScale.domain()
		scaleWidth = xScale.bandwidth()
		charactersPerBand = scaleWidth / 6
	})

	function truncateTicks(tick) {
		let value = tick
		if (value.length > charactersPerBand) {
			return value.slice(0, charactersPerBand) + '...'
		}
		return value
	}

	function enterTooltip(e) {
		tooltip.style('opacity', 1)
	}

	function movingTooltip(e, d, s, i) {
		let tooltipWidth = tooltip.node().getBoundingClientRect().width
		const [x, y] = d3.pointer(e)
		tooltipData.x = e.offsetX - tooltipWidth / 2
		tooltipData.title = s
		tooltipData.y = e.offsetY - 85
		changeOpacityOnHover(i)

		if (stacked) {
			tooltipData.valueOne = d.data[0]
			if (tooltipData.valueTwoLabel) tooltipData.valueTwo = d[1] - d[0]
		} else {
			tooltipData.valueOne = d[domain]
			if (tooltipData.valueTwoLabel) tooltipData.valueTwo = d[range]
		}
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

<svelte:window bind:innerWidth />

<svg
	class="bar-chart-svg"
	viewBox="0 0 {width} {height}"
>
	<!-- Side Axis -->
	<g
		class="side-axis"
		transform="translate({marginLeft}, 0)"
	>
		{#if horizontal}
			<line
				stroke="var(--neutral-050)"
				y1={marginTop}
				y2={height - marginBottom}
			/>
			{#each chartData as d}
				<text
					class="axis-label"
					fill="gray"
					text-anchor="start"
					x={-100}
					y={yScale(d[range]) + yScale.bandwidth() / 2 + 5}
				>
					{d[range]}
				</text>
			{/each}
		{:else if vertical}
			{#if rangeLabel}
				<text
					text-anchor="middle"
					x={marginLeft}
					y={height / 2 - 40}
					transform="rotate(-90, {marginLeft - 15}, {height / 2})"
					class="axis-label"
					fill="var(--neutral-400)"
				>
					{rangeLabel}
				</text>
			{/if}
			{#each yScale.ticks() as tick}
				<line
					stroke="var(--neutral-050)"
					x1={marginLeft}
					x2={width - marginRight}
					y1={yScale(tick)}
					y2={yScale(tick)}
				/>
				<text
					class="axis-label"
					fill="var(--neutral-400)"
					x={marginLeft - 15}
					y={yScale(tick) + 5}
					text-anchor="end"
				>
					{abbreviateNumber(tick, 1000)}
				</text>
			{/each}
		{/if}
	</g>

	<!-- Base Axis -->
	<g
		class="base-axis"
		transform="translate(0,{height - marginBottom})"
	>
		{#if vertical}
			{#if domainLabel}
				<text
					text-anchor="middle"
					x={width / 2}
					y={45}
					class="axis-label"
					fill="var(--neutral-400)"
				>
					{domainLabel}
				</text>
			{/if}
			<line
				stroke="var(--neutral-050)"
				x1={rangeLabel ? marginLeft + 40 : marginLeft + 20}
				x2={width}
			/>
			{#if innerWidth >= 500}
				{#each chartData as d}
					<text
						class="axis-label domain-ticks"
						fill="gray"
						text-anchor="middle"
						x={xScale(d[domain]) + xScale.bandwidth() / 2}
						y={20}
					>
						{truncateTicks(d[domain])}
					</text>
				{/each}
			{/if}
		{/if}
	</g>

	<!-- Bars -->
	{#if stacked}
		<g class="bars">
			{#each stack as series, i}
				{#each series as d}
					{#if vertical}
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<path
							class="bar"
							on:mouseenter={enterTooltip}
							on:mousemove={(e) => movingTooltip(e, d, series.key, i)}
							on:mouseleave={leaveTooltip}
							opacity={opacity[i]}
							fill={barColors[i]}
							d={`
								M${xScale(d.data[0])},${yScale(d[1]) + 4}
								a4,4 0 0 1 4,-4
								h${xScale.bandwidth() - 2 * 4}
								a4,4 0 0 1 4,4
								v${yScale(d[0]) - yScale(d[1]) - 4}
								h${-xScale.bandwidth()}Z
							`}
						/>
					{:else if horizontal}
						<!-- <path 
							fill={barColors[i]}
							d={`
								M${marginLeft},${yScale(d[range]) + 4}
								h${width - xScale(d[domain]) - marginRight - 4}
								a4,4 0 0 1 4,4
								v${yScale.bandwidth() - 2 * 4}
								a-4,4 0 0 1 -4,4
								h${-width + xScale(d[domain]) + marginRight + 4}Z
							`}
						/> -->
					{/if}
				{/each}
			{/each}
		</g>
	{:else}
		<g class="bars">
			{#each chartData as d, i}
				{#if vertical}
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-mouse-events-have-key-events -->
					<path
						class="bar"
						on:mouseenter={enterTooltip}
						on:mousemove={(e) => movingTooltip(e, d, d[seriesKey], i)}
						on:mouseleave={leaveTooltip}
						opacity={opacity[i]}
						fill={barColors.length > 1 ? barColors[i] : barColors[0]}
						d={`
							M${xScale(d[domain])},${yScale(d[range]) + 4}
							a4,4 0 0 1 4,-4
							h${xScale.bandwidth() - 2 * 4}
							a4,4 0 0 1 4,4
							v${height - yScale(d[range]) - marginBottom - 4}
							h${-xScale.bandwidth()}Z
						`}
					/>
				{:else if horizontal}
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<path
						on:mouseenter={enterTooltip}
						on:mousemove={(e) => movingTooltip(e, d, d[seriesKey])}
						on:mouseleave={leaveTooltip}
						fill={barColors.length > 1 ? barColors[i] : barColors[0]}
						d={`
							M${marginLeft},${yScale(d[range]) + 4}
							h${width - xScale(d[domain]) - marginRight - 4}
							a4,4 0 0 1 4,4
							v${yScale.bandwidth() - 2 * 4}
							a-4,4 0 0 1 -4,4
							h${-width + xScale(d[domain]) + marginRight + 4}Z
						`}
					/>
				{/if}
			{/each}
		</g>
	{/if}

	<!-- Rule -->
	{#if rule}
		<line
			class="rule"
			stroke="var(--neutral-400)"
			stroke-width="1"
			stroke-dasharray="3 2"
			x1={marginLeft}
			x2={width}
			y1={rule === 'avg' ? yScale(position) : yScale(rule)}
			y2={rule === 'avg' ? yScale(position) : yScale(rule)}
		/>
	{/if}
</svg>

{#if rule}
	<RuleTip
		value={rule}
		position={yScale(position)}
	/>
{/if}
<ChartTooltip tooltipInfo={tooltipData} />

<style>
	.bar-chart-svg {
		display: block;
		width: 100%;
		height: 100%;
	}

	.axis-label {
		font-size: 11px;
	}

	.bar {
		transition: all ease-out 300ms;
	}
</style>
