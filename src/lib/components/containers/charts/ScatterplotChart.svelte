<script>
	import * as d3 from 'd3'
	import { RuleTip, ChartTooltip, abbreviateNumber } from '$lib/index.js'
	import { onMount } from 'svelte'
	import { spring } from 'svelte/motion'
	import { browser } from '$app/environment'

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
	export let data,
		domain,
		range,
		currency,
		domainLabel = '',
		rangeLabel = '',
		tooltipId,
		rule = null,
		valueOneLabel,
		valueTwoLabel,
		pointColor,
		seriesKey,
		fullDate,
		yearOnly,
		monthOnly,
		monthDay,
		monthYear,
		quarters = false,
		fiscalQuarters = false,
		line = false,
		stacked = false,
		chartWidth = 700,
		chartHeight = 400

	let innerWidth
	$: width = chartWidth
	$: height = chartHeight
	$: textOpacitySwitch = innerWidth < 678
	let marginLeft = 50
	let marginRight = 15
	let marginTop = 24
	let marginBottom = domainLabel ? 50 : 24
	let avgArray = []
	let position = rule
	$: chartData = JSON.parse(JSON.stringify(data))

	let xScale,
		yScale,
		opacity = []

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

	let tickFormat = d3.timeDay,
		labelFormat = formatFull,
		everyOther = false,
		dayInterval,
		monthInterval,
		yearInterval

	// tooltip motion transition
	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.5,
		},
	)

	// runs before data is updated. Lifecycle hooks do not work. Reactive blocks do not work
	// maybe toy around with await blocks?
	$: if (chartData !== undefined) {
		opacity = Array(chartData.length).fill(1) // initialize area opacity array
		for (let obj of chartData) {
			obj[domain] = new Date(obj[domain])
		}
		const min = d3.min(chartData, (d) => d[domain])
		const max = d3.max(chartData, (d) => d[domain])
		dayInterval = d3.timeDay.count(min, max)
		monthInterval = d3.timeMonth.count(min, max)
		yearInterval = d3.timeYear.count(min, max)
		if (stacked) {
			// todo
		} else {
			if (quarters) {
				labelFormat = formatQuarter
				tickFormat = d3.timeQuarter
			} else if (fiscalQuarters) {
				labelFormat = formatFiscalQuarter
				tickFormat = d3.timeQuarter
			} else if (yearInterval >= 2 && yearInterval <= 20) {
				labelFormat = formatYear
				tickFormat = d3.timeYear
				everyOther = false
				chartData = [...consolidateYears(chartData, domain, range)]
				if (yearInterval >= 11) everyOther = true
			} else if (monthInterval >= 2 && monthInterval <= 23) {
				labelFormat = formatMonthYear // eo
				tickFormat = d3.timeMonth
				everyOther = false
				chartData = [...consolidateMonths(chartData, domain, range)]
				if (monthInterval >= 13) everyOther = true
			} else if (dayInterval <= 31) {
				labelFormat = formatMonthDay
				tickFormat = d3.timeDay
				everyOther = false
			}
		}
	}

	$: {
		if (innerWidth < 768) {
			marginLeft = rangeLabel ? 70 : 35
		} else if (innerWidth >= 768) {
			marginLeft = rangeLabel ? 80 : 50
		}

		for (let point of chartData) {
			point[domain] = new Date(point[domain])
		}

		xScale = d3
			.scaleTime()
			.domain(d3.extent(chartData, (d) => d[domain]))
			.range([marginLeft, width - marginRight])

		yScale = d3
			.scaleLinear()
			.domain([0, d3.max(chartData, (d) => d[range])])
			.range([height - marginBottom, marginTop])
	}

	let tooltip,
		tooltipOuterCircle,
		tooltipData = { y: 0, x: 0, circlePosition: 0, title: '', tooltipId, valueOneLabel, valueOne: 0, currency }

	if (valueTwoLabel) {
		tooltipData.valueTwoLabel = valueTwoLabel
		tooltipData.valueTwo = 0
	}

	onMount(() => {
		if (browser) {
			tooltip = d3.select(`#${tooltipId}`)
			tooltipOuterCircle = d3.select(`#${tooltipId}-outer-circle`)
		}
	})

	function enterTooltip(e) {
		tooltip.style('opacity', 1)
		tooltipOuterCircle.style('opacity', 1)
	}

	function movingTooltip(p, s, i) {
		changeOpacityOnHover(i)
		let tooltipWidth = tooltip.node().getBoundingClientRect().width
		tooltipData.line = xScale(chartData[i][domain])
		tooltipData.title = s
		tooltipData.valueOne = fullDate
			? formatFull(p[domain])
			: yearOnly
				? formatYear(p[domain])
				: monthOnly
					? formatMonth(p[domain])
					: monthDay
						? formatMonthDay(p[domain])
						: monthYear
							? formatMonthYear(p[domain])
							: quarters
								? formatQuarter(p[domain])
								: formatFull(p[domain])
		if (tooltipData.valueTwoLabel) tooltipData.valueTwo = p[range]
		coords.set({ x: xScale(p[domain]), y: yScale(p[range]) })
		tooltipData.x = $coords.x - tooltipWidth / 2
		tooltipData.y = $coords.y - 100
	}

	function leaveTooltip(e) {
		tooltip.style('opacity', 0)
		tooltipOuterCircle.style('opacity', 0)
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

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
	class="scatterplot-chart-svg"
	viewBox="0 0 {width} {height}"
>
	<!-- Range Axis -->
	{#if rangeLabel}
		<text
			text-anchor="middle"
			x={marginLeft}
			y={height / 2 - 40}
			transform="rotate(-90, {marginLeft - 15}, {height / 2})"
			fill="var(--neutral-400)"
			class="axis-label"
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
			text-anchor="end"
			x={marginLeft - 15}
			y={yScale(tick) + 5}
		>
			{abbreviateNumber(tick, 1000)}
		</text>
	{/each}

	<!-- Domain Axis -->
	<g transform="translate(0,{height - marginBottom})">
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
		{#each xScale.ticks(tickFormat) as tick, i}
			<text
				class="axis-label"
				fill="gray"
				text-anchor="middle"
				fill-opacity={textOpacitySwitch ? (i % 2 === 1 ? '0' : '1') : '1'}
				x={xScale(tick)}
				y={22}
			>
				{#if everyOther}
					{i % 2 === 1 ? labelFormat(tick) : ''}
				{:else if quarters || fiscalQuarters}
					{i % 3 === 1 ? labelFormat(tick) : ''}
				{:else}
					{labelFormat(tick)}
				{/if}
			</text>
		{/each}
	</g>

	<!-- Tooltip Circles -->
	<filter id="shadow">
		<feDropShadow
			dx="0"
			dy="0"
			stdDeviation="0.5"
		/>
	</filter>
	<circle
		id={`${tooltipId}-outer-circle`}
		class="circle"
		fill="white"
		cx={$coords.x}
		cy={$coords.y}
		r="9"
	/>

	<!-- Scatter Points -->
	{#each chartData as point, i}
		<!-- first circle is a cursor target -->
		<circle
			opacity="0"
			on:mouseenter={enterTooltip}
			on:mousemove={() => movingTooltip(point, seriesKey, i)}
			on:mouseleave={leaveTooltip}
			cx={xScale(point[domain])}
			cy={yScale(point[range])}
			r="16"
		/>
		<circle
			class="point"
			on:mouseenter={enterTooltip}
			on:mousemove={() => movingTooltip(point, seriesKey, i)}
			on:mouseleave={leaveTooltip}
			fill={pointColor}
			opacity={opacity[i]}
			cx={xScale(point[domain])}
			cy={yScale(point[range])}
			r="4"
		/>
	{/each}

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
	.scatterplot-chart-svg {
		display: block;
		width: 100%;
		height: 100%;
	}
	.axis-label {
		font-size: 11px;
	}
	.point {
		transition: all ease-out 300ms;
	}
	.circle {
		opacity: 0;
		filter: drop-shadow(2px 4px 4px var(--neutral-trans-200));
	}
</style>
