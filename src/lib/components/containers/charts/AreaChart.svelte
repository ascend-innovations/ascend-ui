<script>
	import * as d3 from 'd3'
	import { ChartTooltip, RuleTip } from '$lib/index.js'
	import { onMount } from 'svelte'
	import { spring } from 'svelte/motion'
	import consolidateMonths from '$lib/functions/charts/consolidateMonths.js'
	import consolidateYears from '$lib/functions/charts/consolidateYears.js'

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
		stacked = false

	let innerWidth
	// $: textOpacitySwitch = innerWidth < 678
	let marginLeft = rangeLabel ? 80 : 60
	let marginRight = 20
	let marginTop = 24
	let marginBottom = domainLabel ? 50 : 30
	let avgArray = []
	let position = rule
	let chartData // copies and removes references to original data

	let svg,
		xScale,
		yScale,
		stroke,
		stack,
		area,
		opacity = [],
		charactersPerBand

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

	let tooltip,
		tooltipLine,
		tooltipInnerCircle,
		tooltipOuterCircle,
		tooltipData = { y: 0, x: 0, line: 0, circlePosition: 0, color: '', title: '', tooltipId, valueOneLabel, valueOne: 0, currency }

	if (valueTwoLabel) {
		tooltipData.valueTwoLabel = valueTwoLabel
		tooltipData.valueTwo = 0
	}

	function truncateTicks() {
		let self = d3.select(this)
		if (self.text().length > charactersPerBand) {
			self.text(self.text().slice(0, charactersPerBand) + '...')
		}
	}

	function abbreviateNumber(start = 10000) {
		let self = d3.select(this)
		let abvNumber = ''
		if (Number(self.text()) >= 1000000000000) {
			abvNumber = `${(Number(self.text()) * 0.000000000001).toFixed(1)}T`
		} else if (Number(self.text()) >= 1000000000) {
			abvNumber = `${(Number(self.text()) * 0.000000001).toFixed(1)}B`
		} else if (Number(self.text()) >= 1000000) {
			abvNumber = `${(Number(self.text()) * 0.000001).toFixed(1)}M`
		} else if (Number(self.text()) >= 10000) {
			abvNumber = `${(Number(self.text()) * 0.001).toFixed(1)}K`
		} else if (Number(self.text()) >= 1000) {
			if (Number(self.text()) === 1000) {
				abvNumber = `${(Number(self.text()) * 0.001).toFixed(1)}K`
			} else {
				let numberString = Number(self.text()).toString()
				let numberArray = numberString.split('')
				let firstNumber = numberArray[0]
				let remainingNumbers = numberString.slice(1, numberArray.length)
				abvNumber = `${firstNumber},${remainingNumbers}`
			}
		} else {
			abvNumber = self.text() === '' ? '' : Number(self.text()).toString()
		}
		if (currency) abvNumber = abvNumber === '' ? '' : '$' + abvNumber
		self.text(abvNumber)
	}

	function enterTooltip(e) {
		tooltip.style('opacity', 1)
		tooltipLine.style('opacity', 1)
		tooltipInnerCircle.style('opacity', 1)
		tooltipOuterCircle.style('opacity', 1)
	}

	function movingTooltip(e, d, s, series, c) {
		let tooltipHeight = tooltip.node().getBoundingClientRect().height
		let tooltipWidth = tooltip.node().getBoundingClientRect().width
		
		tooltipData.title = s

		let mouseValue
		if (stacked) {
			changeOpacityOnHover(s)
			mouseValue = d[1] - d[0]
			tooltipData.valueOne = labelFormat(d.data[0])
			coords.set({ x: xScale(d.data[0]), y: yScale(d[1]) })
			tooltipData.x = $coords.x - tooltipWidth / 2
			tooltipData.y = $coords.y - tooltipHeight - 40

			tooltipLine.node().setAttribute('x1', xScale(d.data[0]))
			tooltipLine.node().setAttribute('x2', xScale(d.data[0]))
			tooltipInnerCircle.node().setAttribute('cx', xScale(d.data[0]))
			tooltipInnerCircle.node().setAttribute('cy', yScale(d[1]))
			tooltipOuterCircle.node().setAttribute('cx', xScale(d.data[0]))
			tooltipOuterCircle.node().setAttribute('cy', yScale(d[1]))
			tooltipInnerCircle.node().setAttribute('fill', c)
		} else {
			mouseValue = d[range]
			tooltipData.valueOne = labelFormat(d[domain])
			coords.set({ x: xScale(d[domain]), y: yScale(mouseValue) })
			tooltipData.x = $coords.x - tooltipWidth / 2
			tooltipData.y = $coords.y - tooltipHeight - 40

			tooltipLine.node().setAttribute('x1', xScale(d[domain]))
			tooltipLine.node().setAttribute('x2', xScale(d[domain]))
			tooltipInnerCircle.node().setAttribute('cx', xScale(d[domain]))
			tooltipInnerCircle.node().setAttribute('cy', yScale(d[range]))
			tooltipOuterCircle.node().setAttribute('cx', xScale(d[domain]))
			tooltipOuterCircle.node().setAttribute('cy', yScale(d[range]))
			tooltipInnerCircle.node().setAttribute('fill', c)
		}

		if (tooltipData.valueTwoLabel) tooltipData.valueTwo = mouseValue
	}

	function leaveTooltip(e) {
		tooltip.style('opacity', 0),
		tooltipLine.style('opacity', 0),
		tooltipInnerCircle.style('opacity', 0),
		tooltipOuterCircle.style('opacity', 0)
		
		let areas = d3.selectAll(`.${tooltipId}-areas`).nodes()
		let lines = d3.selectAll(`.${tooltipId}-line`).nodes()
		areas.forEach((area) => {
			area.setAttribute('opacity', 1)
		})
		lines.forEach((line) => {
			line.setAttribute('opacity', 1)
		})
	}

	function changeOpacityOnHover(target) {
		let areas = d3.selectAll(`.${tooltipId}-areas`).nodes()
		let lines = d3.selectAll(`.${tooltipId}-line`).nodes()
		areas.forEach((area) => {
			if (area.getAttribute('opacity-id') !== target) area.setAttribute('opacity', 0.5)
		})
		lines.forEach((line) => {
			if (line.getAttribute('opacity-id') !== target) line.setAttribute('opacity', 0.5)
		})
	}

	function renderChart(chartContainer, width, height, stacked) {
		for (let obj of chartData) {
			obj[domain] = new Date(obj[domain])
			obj[range] = parseFloat(obj[range])
		}
		chartData.sort((a, b) => a[domain] - b[domain])
		const min = d3.min(chartData, (d) => d[domain])
		const max = d3.max(chartData, (d) => d[domain])
		dayInterval = d3.timeDay.count(min, max)
		monthInterval = d3.timeMonth.count(min, max)
		yearInterval = d3.timeYear.count(min, max)

		if (stacked) {
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
				labelFormat = formatMonthYear
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

		/**
		 *	Create the SVG element
		 */
		svg = d3.create('svg')
			.attr('viewBox', [0, 0, width, height])
			.attr('class', 'chart-svg width-100')
			.attr('id', tooltipId)

		/**
		 *	Create the scales and
		 *	series where applicable
		 */
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
		}

		charactersPerBand = width / chartData.length / 6

		/**
		 * 	Create the axes
		 */
		// base axis
		let baseAxis = svg
			.append('g')
			.attr('transform', `translate(0,${height - marginBottom})`)
			.attr('class', 'domain-line chart-axis-label neutral-400-text')
			.call(d3.axisBottom(xScale).tickFormat(labelFormat).tickSizeOuter(0))
			.call((g) => g.selectAll('.tick line').remove())
			.call((g) => g.select('.domain').remove())

		baseAxis
			.select('.domain-line .domain')
			.style('stroke', 'var(--neutral-050)')
			.attr('x1', marginLeft)
			.attr('x2', width - marginRight)

		baseAxis.selectAll('.tick text').attr('y', 15).each(truncateTicks)

		// side axis
		let sideAxis = svg
			.append('g')
			.attr('transform', `translate(${marginLeft - (rangeLabel ? 75 : 60)},0)`)
			.attr('class', 'range chart-axis-label neutral-400-text')
			.call(d3.axisLeft(yScale).tickFormat((yScale) => yScale.toFixed()))
			.call((g) => g.select('.range .domain').remove())
			.call((g) => g.append('text').attr('y', 10).attr('fill', 'currentColor').attr('text-anchor', 'start'))

		sideAxis
			.selectAll('.range line')
			.attr('x1', rangeLabel ? marginLeft - 5 : marginLeft)
			.attr('x2', width - marginRight)
			.style('stroke', 'var(--neutral-050)')

		sideAxis
			.selectAll('.range text')
			.attr('x', marginLeft - 15)
			.attr('text-anchor', 'end')
			.style('fill', 'var(--neutral-400)')
			.each(abbreviateNumber)

		if (stacked) {
			let gradient = svg.append('defs')
			let gradients = []
			stack.forEach((series, i) => {
				let gradientId = `area-gradient-${tooltipId}-${i}`
				gradients.push(gradientId)

				let thisGradient = gradient.append('linearGradient')
					.attr('id', gradientId)
					.attr('x1', '0%')
					.attr('x2', '0%')
					.attr('y1', '0%')
					.attr('y2', '100%')
				
				thisGradient.append('stop')
					.attr('offset', '0%')
					.attr('stop-color', areaColors[i])

				thisGradient.append('stop')
					.attr('offset', '100%')
					.attr('stop-color', 'rgba(255,255,255,0)')
			})

			if (!line) {
				svg.append('g')
					.selectAll('path')
					.data(stack)
					.join('path')
					.attr('d', area)
					.attr('fill', (d, i) => `url(#${gradients[i]})`)
					.attr('class', `${tooltipId}-areas area-chart-path`)
					.attr('opacity', 1)
					.attr('opacity-id', (d) => `${d.key}`)
			}

			stack.forEach((series, i) => {
				svg.append('path')
					.attr('fill', 'none')
					.attr('stroke-width', 2)
					.attr('stroke', lineColors[i])
					.attr('class', `${tooltipId}-line area-chart-path`)
					.attr('opacity', 1)
					.attr('opacity-id', (d) => `${series.key}`)
					.attr('d', stroke(series))
			})

			stack.forEach((series, i) => {
				// Draw touch targets
				svg.append('g')
					.selectAll('rect')
					.data(series)
					.join('rect')
					.attr('class', 'touch-target')
					.attr('x', (d) => xScale(d.data[0]) - (width / series.length / 2))
					.attr('y', (d) => yScale(d[1]))
					.attr('width', width / series.length)
					.attr('height', (d) => height - yScale(d[1] - d[0]) - 24)
					.attr('fill', 'transparent')
					.on('mouseenter', (e) => enterTooltip(e))
					.on('mousemove', (e, d) => movingTooltip(e, d, series.key, null, lineColors[i]))
					.on('mouseleave', (e) => leaveTooltip(e))
			})
		} else {
			let gradient = svg.append('defs')
				.append('linearGradient')
				.attr('id', `area-gradient-${tooltipId}`)
				.attr('x1', '0%')
				.attr('x2', '0%')
				.attr('y1', '0%')
				.attr('y2', '100%')

			gradient.append('stop')
				.attr('offset', '0%')
				.attr('stop-color', areaColors[0])

			gradient.append('stop')
				.attr('offset', '100%')
				.attr('stop-color', 'rgba(255,255,255,0)')

			if (!line) {
				svg.append('path')
					.attr('d', area(chartData))
					.attr('fill', `url(#area-gradient-${tooltipId})`)
					.attr('class', `${tooltipId} area-chart-path`)
					.attr('opacity', 1)
					.attr('opacity-id', `${chartData[0][seriesKey]}`)
			}

			svg.append('path')
				.attr('fill', 'none')
				.attr('stroke-width', 2)
				.attr('stroke', lineColors[0])
				.attr('d', stroke(chartData))

			// Draw touch targets
			svg.append('g')
				.selectAll('rect')
				.data(chartData)
				.join('rect')
				.attr('class', 'touch-target')
				.attr('x', (d) => xScale(d[domain]) - width / chartData.length / 2)
				.attr('y', (d) => yScale(d[range]))
				.attr('width', (width + marginRight + 2 * marginLeft) / chartData.length)
				.attr('height', (d) => height - yScale(d[range]) - 24)
				.attr('fill', 'transparent')
				.on('mouseenter', (e) => enterTooltip(e))
				.on('mousemove', (e, d) => movingTooltip(e, d, d[seriesKey], null, lineColors[0]))
				.on('mouseleave', (e) => leaveTooltip(e))
		}

		/**
		 *	Add extra elements to the chart
		 */
		if (rangeLabel) {
			svg.append('text')
				.attr('x', marginLeft + 20)
				.attr('y', height / 2 - 65)
				.attr('text-anchor', 'middle')
				.attr('class', 'chart-axis-label')
				.attr('fill', 'var(--neutral-400)')
				.attr('transform', `rotate(-90, ${marginLeft}, ${height / 2})`)
				.text(rangeLabel)
		}

		if (domainLabel) {
			svg.append('text')
				.attr('x', width / 2)
				.attr('y', height - marginBottom + 40)
				.attr('text-anchor', 'middle')
				.attr('class', 'chart-axis-label')
				.attr('fill', 'var(--neutral-400)')
				.text(domainLabel)
		}

		if (rule) {
			if (rule === 'avg') {
				// Calculate the average of the range
				let avg = 0
				chartData.forEach((el) => avgArray.push(el[range]))
				avgArray.forEach((el) => (avg += el))
				position = avg / avgArray.length
			} else {
				position = Number(rule)
			}
			svg.append('line')
				.attr('class', 'rule')
				.attr('stroke', 'var(--neutral-400)')
				.attr('stroke-width', 1)
				.attr('stroke-dasharray', '3 2')
				.attr('x1', marginLeft)
				.attr('x2', width)
				.attr('y1', yScale(position))
				.attr('y2', yScale(position))
		}

		/**
		 * 	Append additional tooltip circles/lines
		 */
		svg.append('line')
			.attr('class', 'tooltip-line')
			.attr('id', `${tooltipId}-line`)
			.attr('x1', 0)
			.attr('x2', 0)
			.attr('y1', marginTop)
			.attr('y2', height - marginBottom)
			.attr('stroke', 'var(--neutral-trans-100)')
			.attr('stroke-dasharray', '2 3')
			.style('opacity', 0)
			
		svg.append('circle')
			.attr('class', 'area-chart-tooltip-circle')
			.attr('id', `${tooltipId}-outer-circle`)
			.attr('fill', 'white')
			.attr('r', 10)
			.attr('cx', $coords.x)
			.attr('cy', $coords.y)
			.style('opacity', 0)
			
		svg.append('circle')
			.attr('class', 'tooltip-circle')
			.attr('id', `${tooltipId}-inner-circle`)
			.attr('r', 5)
			.attr('cx', $coords.x)
			.attr('cy', $coords.y)
			.style('opacity', 0)
		
		/**
		 *	Append to the chart container
		 */
		chartContainer.append(() => svg.node())
	}

	function mountChart() {
		tooltip = d3.select(`#${tooltipId}`)
		let chartContainer = d3.select(`.${tooltipId}-chart`)

		let width = chartContainer.node().parentNode.getBoundingClientRect().width
		let height = chartContainer.node().parentNode.getBoundingClientRect().height

		marginLeft = rangeLabel ? 80 : 60

		chartData = JSON.parse(JSON.stringify(data))

		window.addEventListener('resize', (e) => {
			// Recalculate the width of the screen
			innerWidth = e.target.innerWidth
			// marginLeft = innerWidth < 768 ? rangeLabel ? 70 : 35 : rangeLabel ? 80 : 60 // range label
			marginLeft = rangeLabel ? 80 : 60
			// marginLeft = rangeLabel ? 70 : 35 // mobile
			// marginLeft = rangeLabel ? 80 : 50 // desktop

			chartData = JSON.parse(JSON.stringify(data)) // copies and removes references to original data

			// Recalculate the width and height of the chart sizer
			let width = chartContainer.node().parentNode.getBoundingClientRect().width
			let height = chartContainer.node().parentNode.getBoundingClientRect().height

			// Remove the old chart
			chartContainer.selectAll('*').remove()

			// Redraw the chart
			renderChart(chartContainer, width, height, stacked)
		})

		renderChart(chartContainer, width, height, stacked)

		tooltipLine = d3.select(`#${tooltipId}-line`)
		tooltipInnerCircle = d3.select(`#${tooltipId}-inner-circle`)
		tooltipOuterCircle = d3.select(`#${tooltipId}-outer-circle`)
	}

	onMount(() => {
		mountChart()
	})
</script>

<div class="{tooltipId}-chart"></div>

<ChartTooltip tooltipInfo={tooltipData} />
