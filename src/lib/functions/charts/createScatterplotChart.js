import * as d3 from 'd3'
import { RuleTip, ChartTooltip } from '$lib/index.js'

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
export let currency
    // domain,
    // range,
    // domainLabel = '',
    // rangeLabel = '',
    // tooltipId,
    let rule = null
    // valueOneLabel,
    // valueTwoLabel,
    // pointColor,
    // seriesKey,
   let fullDate,
    yearOnly,
    monthOnly,
    monthDay,
    monthYear,
    quarters = false,
    fiscalQuarters = false,
    stacked = false

// let innerWidth
// let textOpacitySwitch = innerWidth < 678
let marginLeft = 50
let marginRight = 15
let marginTop = 24
let marginBottom = 24
let avgArray = []
let position = rule
let rulePosition

let svg,
    xScale,
    yScale,
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

let tickFormat = d3.timeDay,
    labelFormat = formatFull,
    everyOther = false,
    dayInterval,
    monthInterval,
    yearInterval

// tooltip motion transition
let coords = { x: 50, y: 50 }

// $: {
//     if (innerWidth < 768) {
//         marginLeft = rangeLabel ? 70 : 35
//     } else if (innerWidth >= 768) {
//         marginLeft = rangeLabel ? 80 : 50
//     }
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
    if (currency) abvNumber = abvNumber === '' ? '' : '$' + abvNumber
    self.text(abvNumber)
}

function enterTooltip(e) {
    tooltip.style('opacity', 1)
    tooltipOuterCircle.style('opacity', 1)
}

function movingTooltip(e, p, s, i) {
    changeOpacityOnHover(i)
    let tooltipWidth = tooltip.node().getBoundingClientRect().width
    tooltipData.line = xScale(chartData[i][domain])
    tooltipData.title = s
    tooltipData.valueOne = fullDate ? formatFull(p[domain]) : yearOnly ? formatYear(p[domain]) : monthOnly ? formatMonth(p[domain]) : monthDay ? formatMonthDay(p[domain]) : monthYear ? formatMonthYear(p[domain]) : quarters ? formatQuarter(p[domain]) : formatFull(p[domain])
    if (tooltipData.valueTwoLabel) tooltipData.valueTwo = p[range]
    coords.set({ x: xScale(p[domain]), y: yScale(p[range]) })
    tooltipData.x = coords.x - tooltipWidth / 2
    tooltipData.y = coords.y - 100
}

function leaveTooltip(e) {
    tooltip.style('opacity', 0)
    tooltipOuterCircle.style('opacity', 0)
}

function changeOpacityOnHover(i) {
    
}

function renderChart(chartContainer, width, height, chartData, domain, range, seriesKey, tooltipId, valueOneLabel, valueTwoLabel, rangeLabel, domainLabel, currency, pointColor) {
    /**
     *	Create the SVG element
    */
    svg = d3.create('svg')
        .attr('viewBox', [0, 0, width, height])
        .attr('class', 'chart-svg width-100')
        .attr('id', tooltipId)

    let tooltip,
        tooltipOuterCircle,
        tooltipData = { y: 0, x: 0, circlePosition: 0, title: '', tooltipId, valueOneLabel, valueOne: 0, currency }

    if (valueTwoLabel) {
        tooltipData.valueTwoLabel = valueTwoLabel
        tooltipData.valueTwo = 0
    }

    /**
     *	Create the scales and
        *	series where applicable
    */
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

    xScale = d3
        .scaleTime()
        .domain(d3.extent(chartData, (d) => d[domain]))
        .range([marginLeft, width - marginRight])

    yScale = d3
        .scaleLinear()
        .domain([0, d3.max(chartData, (d) => d[range])])
        .range([height - marginBottom, marginTop])

    /**
     * 	Create the axes
     */
    charactersPerBand = width / chartData.length / 6

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
    /**
     * 	Create the chart
     */
    // tooltip circle
    let filter = svg.append('filter')
        .attr('id', 'shadow')
        .attr('dx', 0)
        .attr('dy', 0)
        .attr('stdDeviation', 0.5)

    svg.append('g')
        .selectAll('circle')
        .data(chartData)
        .join('circle')
        .attr('class', 'tooltip-outer-circle')
        .attr('cx', (d) => xScale(d[domain]))
        .attr('cy', (d) => yScale(d[range]))
        .attr('r', 16)
        .attr('fill', 'var(--background-base)')
        .attr('shadow', 'url(#shadow)')

    // touch targets
    svg.append('g')
        .selectAll('circle')
        .data(chartData)
        .join('circle')
        .attr('class', 'scatterplot-touch-target')
        .attr('cx', (d) => xScale(d[domain]))
        .attr('cy', (d) => yScale(d[range]))
        .attr('r', 16)
        .attr('fill', 'transparent')
        .on('mouseenter', enterTooltip)
        .on('mousemove', (e, d) => {
            movingTooltip(e, d, seriesKey, chartData.indexOf(d))
        })
        .on('mouseleave', leaveTooltip)

    svg.append('g')
        .attr('class', 'scatterplot')
        .selectAll('circle')
        .data(chartData)
        .join('circle')
        .attr('class', 'scatterplot-point')
        .attr('cx', (d) => xScale(d[domain]))
        .attr('cy', (d) => yScale(d[range]))
        .attr('r', 4)
        .style('fill', pointColor)
        .style('opacity', 1)
        .on('mouseenter', enterTooltip)
        .on('mousemove', (e, d) => {
            movingTooltip(e, d, seriesKey, chartData.indexOf(d))
        })
        .on('mouseleave', leaveTooltip)
    
    /**
     *	Add extra elements to the chart
    */
    if (rangeLabel) {
        svg.append("text")
            .attr("x", marginLeft + 20)
            .attr("y", height / 2 - 55)
            .attr("text-anchor", "middle")
            .attr("class", "chart-axis-label")
            .attr("fill", "var(--neutral-400)")
            .attr("transform", `rotate(-90, ${marginLeft}, ${height / 2})`)
            .text(rangeLabel)
    }

    if (domainLabel) {
        svg.append("text")
            .attr("x", width / 2)
            .attr("y", height - marginBottom + 45)
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
        svg.append('line')
            .attr('class', 'rule')
            .attr('x1', marginLeft)
            .attr('x2', width - marginRight)
            .attr('y1', yScale(position))
            .attr('y2', yScale(position))
            .style('stroke', 'var(--neutral-400)')
            .style('stroke-width', 1)
            .style('stroke-dasharray', '3 2')

        rulePosition = yScale(position) - 23
    }

    /**
     *	Append to the chart container
    */
    chartContainer.append(svg.node())
}

export default function createScatterplotChart(chartContainer, data, domain, range, seriesKey, tooltipId, valueOneLabel, valueTwoLabel, rangeLabel, domainLabel, currency, pointColor) {
    // tooltip = d3.select(`#${tooltipId}`)
    // tooltipOuterCircle = d3.select(`#${tooltipId}-outer-circle`)

    let width = chartContainer.getBoundingClientRect().width
    let height = chartContainer.getBoundingClientRect().height

    marginLeft = width < 768 ? rangeLabel ? 35 : 20 : rangeLabel ? 75 : 50

    let chartData = JSON.parse(JSON.stringify(data))

    window.addEventListener('resize', (e) => {
        let width = chartContainer.getBoundingClientRect().width
        let height = chartContainer.getBoundingClientRect().height

        marginLeft = width < 768 ? rangeLabel ? 35 : 20 : rangeLabel ? 75 : 50
        marginBottom = domainLabel ? 50 : 24
    
        chartData = JSON.parse(JSON.stringify(data))

        // remove the old chart
        chartContainer.innerHTML = ''

        renderChart(chartContainer, width, height, chartData, domain, range, seriesKey, tooltipId, valueOneLabel, valueTwoLabel, rangeLabel, domainLabel, currency, pointColor)
    })

    renderChart(chartContainer, width, height, chartData, domain, range, seriesKey, tooltipId, valueOneLabel, valueTwoLabel, rangeLabel, domainLabel, currency, pointColor)
}