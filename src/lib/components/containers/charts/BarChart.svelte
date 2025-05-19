<script>
	import * as d3 from 'd3'
	import { ChartTooltip, RuleTip } from '$lib/index.js'
	import { onMount } from 'svelte'

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
		rule = null

	let innerWidth
	let marginLeft = vertical ? 25 : 125
	let marginRight = vertical ? 20 : 50
	let marginTop = vertical ? 24 : 20
	let marginBottom = vertical ? (domainLabel ? 50 : 24) : 20
	let avgArray = []
	let position = rule
	let svg,
		xScale,
		yScale,
		stack,
		charactersPerBand,
		rulePosition,
		chartData,
		tooltip,
		tooltipData = { y: 0, x: 0, title: '', valueOneLabel, tooltipId, valueOne: 0, currency }

	if (valueTwoLabel) {
		tooltipData.valueTwoLabel = valueTwoLabel
		tooltipData.valueTwo = 0
	}

	// if (horizontal) {
	// 	if (stacked) {
	// 		stack = d3
	// 			.stack()
	// 			.keys(d3.union(chartData.map((d) => d[seriesKey])))
	// 			.value(([, D], key) => D.get(key)[domain])(
	// 			d3.index(
	// 				chartData,
	// 				(d) => d[range],
	// 				(d) => d[seriesKey],
	// 			),
	// 		)

	// 		yScale = d3
	// 			.scaleBand()
	// 			.domain(chartData.map((d) => d[range]))
	// 			.range([marginTop, height - marginBottom])
	// 			.padding(0.2)

	// 		xScale = d3
	// 			.scaleLinear()
	// 			.domain([0, d3.max(stack, (d) => d3.max(d, (d) => d[1]))])
	// 			.range([width - marginRight, marginLeft])
	// 	} else {
	// 		if (sort === 'ascending') {
	// 			yScale = d3
	// 				.scaleBand()
	// 				.domain(
	// 					d3.groupSort(
	// 						chartData,
	// 						([d]) => d[domain],
	// 						(d) => d[range],
	// 					),
	// 				)
	// 				.range([marginTop, height - marginBottom])
	// 				.padding(0.2)
	// 		} else if (sort === 'descending') {
	// 			yScale = d3
	// 				.scaleBand()
	// 				.domain(
	// 					d3.groupSort(
	// 						chartData,
	// 						([d]) => -d[domain],
	// 						(d) => d[range],
	// 					),
	// 				)
	// 				.range([marginTop, height - marginBottom])
	// 				.padding(0.2)
	// 		} else {
	// 			yScale = d3
	// 				.scaleBand()
	// 				.domain(chartData.map((d) => d[range]))
	// 				.range([marginTop, height - marginBottom])
	// 				.padding(0.2)
	// 		}

	// 		xScale = d3
	// 			.scaleLinear()
	// 			.domain([0, d3.max(chartData, (d) => d[domain])])
	// 			.range([width - marginRight, marginLeft])
	// 	}
	// }

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
		self.text(abvNumber)
	}

	function enterTooltip(e) {
		tooltip.style('opacity', 1)
	}

	function movingTooltip(e, d, r, s, i) {
		let target = d3.select(e.target).node()
		let tooltipHeight = tooltip.node().getBoundingClientRect().height
		let tooltipWidth = tooltip.node().getBoundingClientRect().width

		tooltipData.x = e.offsetX - tooltipWidth / 2
		tooltipData.title = s
		tooltipData.y = e.offsetY - tooltipHeight - 20
		changeOpacityOnHover(target)

		tooltipData.valueOne = d
		if (tooltipData.valueTwoLabel) tooltipData.valueTwo = r
	}

	function leaveTooltip(e) {
		tooltip.style('opacity', 0)
		
		let bars = d3.selectAll(`.${tooltipId}-bars`).nodes()
		bars.forEach((bar) => {
			bar.setAttribute('opacity', 1)
		})
	}

	function changeOpacityOnHover(target) {
		let bars = d3.selectAll(`.${tooltipId}-bars`).nodes()
		bars.forEach((bar) => {
			if (bar.getAttribute('opacity-id') !== target.getAttribute('opacity-id')) bar.setAttribute('opacity', 0.5)
		})
	}

	function renderChart(chartContainer, width, height, stacked) {
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
				))

			xScale = d3
					.scaleBand()
					.domain(chartData.map((d) => d[domain]))
					.range([marginLeft, width - marginRight])
					.padding(0.3)

			yScale = d3
				.scaleLinear()
				.domain([0, d3.max(stack, (d) => d3.max(d, (d) => d[1]))])
				.range([height - marginBottom, marginTop])
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
				xScale = d3
					.scaleBand()
					.domain(chartData.map((d) => d[domain]))
					.range([marginLeft, width - marginRight])
					.padding(0.3)
			}

			charactersPerBand = xScale.bandwidth() / 6
				
			yScale = d3
				.scaleLinear()
				.domain([0, d3.max(chartData, (d) => d[range])])
				.range([height - marginBottom, marginTop])
		}
			
		/**
		 * 	Create the axes
		 */
		// base axis
		let baseAxis = svg.append("g")
			.attr("transform", `translate(0,${height - marginBottom})`)
			.attr("class", "domain-line chart-axis-label neutral-400-text")
			.call(d3.axisBottom(xScale).tickSizeOuter(0))
			.call(g => g.selectAll(".tick line").remove())
			.call(g => g.select(".domain").remove())

		baseAxis.select(".domain-line .domain")
			.style("stroke", "var(--neutral-050)")
			.attr("x1", marginLeft)
			.attr("x2", width - marginRight)
			
		baseAxis.selectAll(".tick text")
			.each(truncateTicks)

		// side axis
		let sideAxis = svg.append("g")
			.attr("transform", `translate(${marginLeft},0)`)
			.attr("class", "range chart-axis-label neutral-400-text")
			.call(d3.axisLeft(yScale).tickFormat((yScale) => yScale.toFixed()))
			.call(g => g.select(".range .domain").remove())
			.call(g => g.append("text")
				.attr("y", 10)
				.attr("fill", "currentColor")
				.attr("text-anchor", "start"))

		sideAxis.selectAll(".range line")
			.attr("x1", marginLeft)
			.attr("x2", width - marginRight)
			.style("stroke", "var(--neutral-050)")

		sideAxis.selectAll(".range text")
			.attr("x", marginLeft - 15)
			.attr("text-anchor", "end")
			.style("fill", "var(--neutral-400)")
			.each(abbreviateNumber)

		/**
		 * 	Create the bars
		 *		- if stacked, use the stack data
		 *		- if not stacked, use the chartData
		*/
		if (stacked) {
			svg.append("g")
				.selectAll()
				.data(stack)
				.join("g")
					.attr("fill", (d, i) => barColors[i])
				.selectAll("path")
				.data(D => D.map(d => (d.key = D.key, d)))
				.enter().append("path")
				.attr("d", (d) => {
					return `
						M${xScale(d.data[0])},${yScale(d[1]) + 4}
						a4,4 0 0 1 4,-4
						h${xScale.bandwidth() - 2 * 4}
						a4,4 0 0 1 4,4
						v${yScale(d[0]) - yScale(d[1]) - 4}
						h${-xScale.bandwidth()}Z
					`
				})
				.attr("x", (d) => xScale(d.data[0]))
				.attr("y", (d) => yScale(d[1]))
				.attr("height", (d) => yScale(d[0]) - yScale(d[1]))
				.attr("opacity", 1)
				.attr("opacity-id", (d) => `${d.key}`)
				.attr("class", `${tooltipId}-bars bar-chart-path`)
				.on("mouseover", (e) => enterTooltip(e))
				.on("mousemove", (e, d) => movingTooltip(e, d.data[0], (d[1] - d[0]), d.key))
				.on("mouseleave", (e) => leaveTooltip(e))
		} else {
			svg.append("g")
				.attr("fill", barColors[0])
				.selectAll()
				.data(chartData)
				.enter().append("path")
				.attr("d", (d) => {
					return `
						M${xScale(d[domain])},${yScale(d[range]) + 4}
						a4,4 0 0 1 4,-4
						h${xScale.bandwidth() - 2 * 4}
						a4,4 0 0 1 4,4
						v${height - yScale(d[range]) - marginBottom - 4}
						h${-xScale.bandwidth()}Z
					`
				})
				.attr("class", `${tooltipId}-bars bar-chart-path`)
				.attr("x", (d) => xScale(d[domain]))
				.attr("y", (d) => yScale(d[range]))
				.attr("height", (d) => yScale(0) - yScale(d[range]))
				.attr("width", xScale.bandwidth())
				.attr("opacity", 1)
				.attr("opacity-id", (d) => `${d[domain]}`)
				.on("mouseover", (e) => enterTooltip(e))
				.on("mousemove", (e, d, i) => movingTooltip(e, d[domain], d[range], d[seriesKey], i))
				.on("mouseleave", (e) => leaveTooltip(e))
		}

		/**
		 *	Add extra elements to the chart
		*/
		if (rangeLabel) {
			svg.append("text")
				.attr("x", marginLeft + 20)
				.attr("y", height / 2 - 25)
				.attr("text-anchor", "middle")
				.attr("class", "chart-axis-label")
				.attr("fill", "var(--neutral-400)")
				.attr("transform", `rotate(-90, ${marginLeft}, ${height / 2})`)
				.text(rangeLabel)
		}

		if (domainLabel) {
			svg.append("text")
				.attr("x", width / 2)
				.attr("y", height - marginBottom + 40)
				.attr("text-anchor", "middle")
				.attr("class", "chart-axis-label")
				.attr("fill", "var(--neutral-400)")
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
			svg.append("line")
				.attr("class", "rule")
				.attr("stroke", "var(--neutral-400)")
				.attr("stroke-width", 1)
				.attr("stroke-dasharray", "3 2")
				.attr("x1", marginLeft)
				.attr("x2", width)
				.attr("y1", yScale(position))
				.attr("y2", yScale(position))
			
			rulePosition = yScale(position) - 23
		}
		
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
		chartData = JSON.parse(JSON.stringify(data))

		marginLeft = innerWidth < 768 ? rangeLabel ? 35 : 20 : rangeLabel ? 40 : vertical ? 25 : 125
		marginRight = innerWidth < 768 ? 5 : 20

		window.addEventListener('resize', (e) => {
			// Recalculate the width of the screen
			innerWidth = e.target.innerWidth
			marginLeft = innerWidth < 768 ? rangeLabel ? 35 : 20 : rangeLabel ? 40 : vertical ? 25 : 125

			// Recalculate the width and height of the chart sizer
			let width = chartContainer.node().parentNode.getBoundingClientRect().width
			let height = chartContainer.node().parentNode.getBoundingClientRect().height

			// Remove the old chart
			chartContainer.selectAll('*').remove()

			// Redraw the chart
			renderChart(chartContainer, width, height, stacked)
		})
		
		renderChart(chartContainer, width, height, stacked)
	}

	onMount(() => {
		mountChart()
	})
</script>

<div class="{tooltipId}-chart"></div>

{#if rule}
	<RuleTip
		value={rule}
		position={rulePosition}
	/>
{/if}
<ChartTooltip tooltipInfo={tooltipData} />
