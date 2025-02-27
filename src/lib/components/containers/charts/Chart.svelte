<script>
	import { AreaChart, BarChart, CardHeader, ChartKeyContainer, GeoChart, PieChart, TableChart, ScatterplotChart } from '$lib/index.js'
	import AlertCircleSmallIcon from '$lib/assets/icons/s/AlertCircleSmallIcon.svelte'
	import { afterUpdate } from 'svelte'

	export let type = '',
		data = [],
		domain,
		range,
		currency = false,
		domainLabel,
		rangeLabel,
		valueOneLabel,
		valueTwoLabel = '',
		stacked,
		seriesKey = '',
		sort = '',
		tooltipId = '',
		vertical = false,
		horizontal = false,
		timeseries = false,
		icon = null,
		title = '',
		rule = null,
		line = false,
		ring = false,
		markers = {},
		geoJSON = [],
		mapId,
		pillText = '',
		pillKey = '',
		addressKey = '',
		infoTitleKey = '',
		infoLink,
		linkKey,
		tableColumns = [],
		fullDate = false,
		yearOnly = false,
		monthOnly = false,
		monthDay = false,
		monthYear = false,
		quarters,
		fiscalQuarters,
		titleTooltip = null,
		titleButton = false,
		barColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)', 'var(--secondary-050)'],
		areaColors = ['var(--secondary-trans-600)', 'var(--secondary-trans-500)', 'var(--secondary-trans-400)', 'var(--secondary-trans-300)', 'var(--secondary-trans-200)', 'var(--secondary-trans-100)'],
		lineColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)'],
		arcColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)', 'var(--secondary-050)'],
		pointColor = 'var(--secondary-600)'

	let chartWidth,
		chartHeight,
		keyContainerKeys = []

	if (data?.length < 5 && type === 'table') titleButton = false

	afterUpdate(() => {
		// pull out the unique series values for the chart key
		let seenValues = []
		keyContainerKeys.length = 0
		for (let item of data) {
			keyContainerKeys.push(item[seriesKey])
		}
		for (let [index, value] of keyContainerKeys.entries()) {
			if (!seenValues.includes(value)) {
				const obj = {}
				obj[seriesKey] = value
				keyContainerKeys[index] = obj
				seenValues.push(value)
			}
		}
		for (let i = keyContainerKeys.length - 1; i >= 0; i--) {
			if (typeof keyContainerKeys[i] === 'string') keyContainerKeys.splice(i, 1)
		}
	})
</script>

<div class="chart neutral-shadow-l">
	<CardHeader
		{icon}
		{title}
		{titleTooltip}
		{titleButton}
	/>
	<div class="chart-content">
		{#if (type === 'geo' && geoJSON?.length === 0) || (type !== 'geo' && data.length === 0)}
			<div class="no-data-panel">
				<AlertCircleSmallIcon colorOverride="var(--neutral-400)" />
				<p>No data to display</p>
			</div>
		{:else}
			{#if $$slots['chart-header']}
				<div class="chart-header">
					<slot name="chart-header" />
				</div>
			{/if}
			<div class="visualization-container">
				<div
					class="chart-sizer {type === 'table' ? 'table-position' : ''}"
					bind:clientWidth={chartWidth}
					bind:clientHeight={chartHeight}
				>
					{#if type === 'bar'}
						<BarChart
							{data}
							{domain}
							{range}
							{currency}
							{domainLabel}
							{rangeLabel}
							{seriesKey}
							{valueOneLabel}
							{valueTwoLabel}
							{sort}
							{stacked}
							{tooltipId}
							{vertical}
							{horizontal}
							{timeseries}
							{rule}
							{barColors}
							{chartWidth}
							{chartHeight}
						/>
					{:else if type === 'area'}
						<AreaChart
							{data}
							{domain}
							{range}
							{currency}
							{domainLabel}
							{rangeLabel}
							{seriesKey}
							{valueOneLabel}
							{valueTwoLabel}
							{rule}
							{tooltipId}
							{stacked}
							{line}
							{fullDate}
							{yearOnly}
							{monthOnly}
							{monthDay}
							{monthYear}
							{quarters}
							{fiscalQuarters}
							{lineColors}
							{areaColors}
							{chartWidth}
							{chartHeight}
						/>
					{:else if type === 'pie'}
						<PieChart
							{data}
							{domain}
							{range}
							{currency}
							{tooltipId}
							{valueOneLabel}
							{valueTwoLabel}
							{sort}
							{arcColors}
							{ring}
							{chartHeight}
						/>
					{:else if type === 'table'}
						<TableChart
							columns={tableColumns}
							bind:list={data}
						/>
					{:else if type === 'geo'}
						<GeoChart
							{data}
							{geoJSON}
							{mapId}
							{markers}
							{pillKey}
							{pillText}
							{addressKey}
							{infoTitleKey}
							{infoLink}
							{linkKey}
						/>
					{:else if type === 'scatter'}
						<ScatterplotChart
							{data}
							{domain}
							{range}
							{currency}
							{seriesKey}
							{valueOneLabel}
							{valueTwoLabel}
							{pointColor}
							{chartWidth}
							{chartHeight}
							{tooltipId}
							{rangeLabel}
							{domainLabel}
						/>
					{:else}
						Please specify a chart type.
					{/if}
				</div>
			</div>
			{#if stacked || type === 'pie'}
				<ChartKeyContainer
					data={type === 'area' || type === 'bar' ? keyContainerKeys : data}
					{seriesKey}
					colors={type === 'bar' ? barColors : type === 'area' ? lineColors : arcColors}
					column={chartWidth < 500 ? true : false}
				/>
			{/if}
		{/if}
		{#if $$slots['chart-footer']}
			<div class="chart-footer">
				<slot name="chart-footer" />
			</div>
		{/if}
	</div>
</div>

<style>
	.chart {
		height: 100%;
		border: 1px solid var(--neutral-100);
		border-radius: 24px;
		padding: var(--spacing09);
		position: relative;

		display: flex;
		flex-direction: column;
	}
	.chart-content {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.visualization-container {
		position: relative;
		flex-grow: 1;
	}
	.chart-sizer {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.table-position {
		position: relative;
	}
	.no-data-panel {
		border-radius: 12px;
		background-color: var(--neutral-050);
		height: 100%;
		margin-top: var(--spacing09);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: var(--spacing03);

		& p {
			color: var(--neutral-400);
		}
	}
</style>
