<script>
	import * as d3 from 'd3'
	import { ChartTooltip, RuleTip, abbreviateNumber } from '$lib/index.js'
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'
	import { spring } from 'svelte/motion'
	import consolidateMonths from '$lib/functions/charts/consolidateMonths'
	import consolidateYears from '$lib/functions/charts/consolidateYears'

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
		tooltipId,
		lineColors = [],
		areaColors = [],
		domain,
		range,
		currency,
		domainLabel = '',
		rangeLabel = '',
		rule = null,
		valueOneLabel,
		valueTwoLabel,
		seriesKey,
		fullDate,
		yearOnly,
		monthOnly,
		monthDay,
		monthYear,
		quarters = false,
		fiscalQuarters = false,
		fiscalYears = false,
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
	$: chartData = JSON.parse(JSON.stringify(data)) // copies and removes references to original data

	let xScale,
		yScale,
		stroke,
		stack,
		area,
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
	let formatFiscalYear = (d) => `SFY${d3.utcFormat(`%Y`)(d)}`

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
		for (let obj of chartData) {
			obj[domain] = new Date(obj[domain])
			obj[range] = parseFloat(obj[range])
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
			} else if (fiscalYears) {
				labelFormat = formatFiscalYear
				tickFormat = d3.timeYear
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

			xScale = d3
				.scaleTime()
				.domain(d3.extent(chartData, (d) => d[domain]))
				.range([marginLeft, width - marginRight])

			yScale = d3
				.scaleLinear()
				.domain([0, d3.max(stack, (d) => d3.max(d, (d) => d[1]))])
				.range([height - marginBottom, marginTop])

			area = d3
				.area()
				.x((d) => xScale(d.data[0]))
				.y0((d) => yScale(d[0]))
				.y1((d) => yScale(d[1]))

			stroke = d3
				.line()
				.x((d) => xScale(d.data[0]))
				.y((d) => yScale(d[1]))

			opacity = Array(stack[0].length).fill(1) // initialize area opacity array
		} else {
			xScale = d3
				.scaleTime()
				.domain(d3.extent(chartData, (d) => d[domain]))
				.range([marginLeft, width - marginRight])

			yScale = d3
				.scaleLinear()
				.domain([0, d3.max(chartData, (d) => d[range])])
				.range([height - marginBottom, marginTop])

			area = d3
				.area()
				.x((d) => xScale(d[domain]))
				.y0(yScale(0))
				.y1((d) => yScale(d[range]))

			stroke = d3
				.line()
				.x((d) => xScale(d[domain]))
				.y((d) => yScale(d[range]))

			if (rule === 'avg') {
				let avg = 0
				chartData.forEach((el) => avgArray.push(el[range]))
				avgArray.forEach((el) => (avg += el))
				position = avg / avgArray.length
			}
		}
	}

	let tooltip,
		tooltipLine,
		tooltipInnerCircle,
		tooltipOuterCircle,
		tooltipData = { y: 0, x: 0, line: 0, circlePosition: 0, color: '', title: '', tooltipId, valueOneLabel, valueOne: 0, currency }

	if (valueTwoLabel) {
		tooltipData.valueTwoLabel = valueTwoLabel
		tooltipData.valueTwo = 0
	}

	onMount(() => {
		if (browser) {
			tooltip = d3.select(`#${tooltipId}`)
			tooltipLine = d3.select(`#${tooltipId}-line`)
			tooltipInnerCircle = d3.select(`#${tooltipId}-inner-circle`)
			tooltipOuterCircle = d3.select(`#${tooltipId}-outer-circle`)
		}
	})

	function enterTooltip(e) {
		tooltip.style('opacity', 1)
		tooltipLine.style('opacity', 1)
		tooltipInnerCircle.style('opacity', 1)
		tooltipOuterCircle.style('opacity', 1)
	}

	function movingTooltip(e, d, s, series, i, c) {
		let tooltipHeight = tooltip.node().getBoundingClientRect().height
		let tooltipWidth = tooltip.node().getBoundingClientRect().width
		tooltipData.color = c
		tooltipData.line = xScale(chartData[i][domain])
		tooltipData.title = s

		let mouseValue
		if (stacked) {
			changeOpacityOnHover(series)
			mouseValue = d[1] - d[0]
			tooltipData.line = xScale(d.data[0])
			tooltipData.circlePosition = yScale(d[1])
			tooltipData.valueOne = fullDate ? formatFull(d.data[0]) : yearOnly ? formatYear(d.data[0]) : monthOnly ? formatMonth(d.data[0]) : monthDay ? formatMonthDay(d.data[0]) : monthYear ? formatMonthYear(d.data[0]) : quarters ? formatQuarter(d.data[0]) : formatFull(d.data[0])
			coords.set({ x: xScale(d.data[0]), y: yScale(d[1]) })
			tooltipData.x = $coords.x - tooltipWidth / 2
			tooltipData.y = $coords.y - tooltipHeight - 40
		} else {
			mouseValue = chartData[i][range]
			tooltipData.circlePosition = yScale(mouseValue)
			tooltipData.valueOne = fullDate ? formatFull(chartData[i][domain]) : yearOnly ? formatYear(chartData[i][domain]) : monthOnly ? formatMonth(chartData[i][domain]) : monthDay ? formatMonthDay(chartData[i][domain]) : monthYear ? formatMonthYear(chartData[i][domain]) : quarters ? formatQuarter(d.data[0]) : formatFull(chartData[i][domain])
			coords.set({ x: xScale(chartData[i][domain]), y: yScale(mouseValue) })
			tooltipData.x = $coords.x - tooltipWidth / 2
			tooltipData.y = $coords.y - tooltipHeight - 40
		}

		if (tooltipData.valueTwoLabel) tooltipData.valueTwo = mouseValue
	}

	function leaveTooltip(e) {
		tooltip.style('opacity', 0)
		tooltipLine.style('opacity', 0)
		tooltipInnerCircle.style('opacity', 0)
		tooltipOuterCircle.style('opacity', 0)
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
	class="area-chart-svg"
	viewBox="0 0 {width} {height}"
	on:mouseleave={() => resetOpacity()}
>
	<!-- Y-Axis lines -->
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

	<!-- Areas -->
	{#if stacked}
		{#each stack as series, i}
			{@const gradient = `area-gradient-${i}-${tooltipId}`}
			<!-- gradient -->
			<defs>
				<linearGradient
					id={gradient}
					x1="0%"
					x2="0%"
					y1="0%"
					y2="100%"
				>
					<stop
						offset="0%"
						stop-color={areaColors[i]}
					/>
					<stop
						offset="100%"
						stop-color="rgba(255,255,255,0)"
					/>
				</linearGradient>
			</defs>

			<path
				class="line-path"
				stroke={lineColors[i]}
				stroke-width={2}
				fill="none"
				opacity={opacity[i]}
				d={stroke(series)}
			/>
			{#if !line}
				<path
					class="area-path"
					fill={`url(#${gradient}`}
					d={area(series)}
					opacity={opacity[i]}
				/>
			{/if}
			{#each series as data, j}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<rect
					on:mouseenter={enterTooltip}
					on:mousemove={(e) => movingTooltip(e, data, series.key, i, j, lineColors[i])}
					on:mouseleave={leaveTooltip}
					stroke="rgba(0, 0, 0, 0)"
					stroke-width={1}
					fill="rgba(0, 0, 0, 0)"
					width={(width + marginRight + 2 * marginLeft) / series.length}
					height={height - yScale(data[1] - data[0]) - 24}
					x={xScale(data.data[0]) - width / series.length / 2}
					y={yScale(data[1])}
				/>
			{/each}
		{/each}
	{:else}
		<!-- gradient -->
		<defs>
			<linearGradient
				id="area-gradient-{tooltipId}"
				x1="0%"
				x2="0%"
				y1="0%"
				y2="100%"
			>
				<stop
					offset="0%"
					stop-color={areaColors[0]}
				/>
				<stop
					offset="100%"
					stop-color="rgba(255,255,255,0)"
				/>
			</linearGradient>
		</defs>
		<path
			class="line-path"
			stroke={lineColors[0]}
			stroke-width="2"
			fill="none"
			d={stroke(chartData)}
		/>
		<path
			class="area-path"
			fill={line ? 'rgba(0,0,0,0)' : `url(#area-gradient-${tooltipId})`}
			d={area(chartData)}
		/>
		{#each chartData as d, i}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<rect
				on:mouseenter={enterTooltip}
				on:mousemove={(e) => movingTooltip(e, chartData, chartData[0][seriesKey], null, i, lineColors[0])}
				on:mouseleave={leaveTooltip}
				stroke="rgba(0, 0, 0, 0)"
				stroke-width={1}
				fill="rgba(0, 0, 0, 0)"
				width={(width + marginRight + marginLeft) / chartData.length}
				height="100%"
				x={xScale(d[domain]) - width / chartData.length / 2}
				y={-24}
			/>
		{/each}
	{/if}

	<!-- Rule -->

	<!-- Base Axis -->
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
		{#if stacked}
			{#each stack as series}
				{#each series as item, i}
					<line
						stroke="var(--neutral-050)"
						stroke-width={2}
						x1={xScale(item.data[0])}
						x2={xScale(item.data[0])}
						y1={marginTop}
						y2={height - marginBottom}
					/>
					<text
						class="axis-label"
						fill="gray"
						text-anchor="middle"
						fill-opacity={textOpacitySwitch ? (i % 2 === 1 ? '0' : '1') : '1'}
						x={xScale(item.data[0])}
						y={22}
					>
						<!-- {#if everyOther}
							{i % 2 === 1 ? labelFormat(tick) : ''}
						{:else}
							{labelFormat(tick)}
						{/if} -->
						{fullDate ? formatFull(item.data[0]) : yearOnly ? formatYear(item.data[0]) : monthOnly ? formatMonth(item.data[0]) : monthDay ? formatMonthDay(item.data[0]) : monthYear ? formatMonthYear(item.data[0]) : quarters ? formatQuarter(item.data[0]) : fiscalYears ? formatFiscalYear(item.data[0]) : formatFull(item.data[0])}
					</text>
				{/each}
			{/each}
		{:else}
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
		{/if}
	</g>

	<!-- Tooltip Line -->
	<line
		id={`${tooltipId}-line`}
		class="line"
		stroke="var(--neutral-trans-100)"
		stroke-dasharray="2 3"
		x1={$coords.x}
		x2={$coords.x}
		y1={marginTop}
		y2={height - marginBottom}
	/>

	<!-- x1={tooltipData.line}
		x2={tooltipData.line} -->
	<!-- Tooltip Circle -->
	<circle
		id={`${tooltipId}-outer-circle`}
		class="circle"
		fill="white"
		cx={$coords.x}
		cy={$coords.y}
		r="12"
	/>
	<circle
		id={`${tooltipId}-inner-circle`}
		class="circle"
		fill={tooltipData.color}
		cx={$coords.x}
		cy={$coords.y}
		r="6"
	/>

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
	.area-chart-svg {
		display: block;
		width: 100%;
		height: 100%;
	}

	.axis-label {
		font-size: 11px;
	}

	.area-path,
	.line-path {
		transition: all ease-out 300ms;
	}

	.line,
	.circle {
		opacity: 0;
	}
</style>
