<script>
	import { DateRange, MonthPicker, MonthRange, DatePicker, TimePicker, DateTimePicker } from '$lib/index.js'
</script>

<TimePicker 
	id="time-picker"
	label="Time Picker"
/>
<DatePicker 
	id="date-picker"
	label="Date Picker"
/>
<DateRange
	styles={[`width: 100%`]}
	fill
/>
<MonthPicker
	label="Month Picker"
	id="month-picker"
/>
<MonthRange />
<DateTimePicker 
	id="date-time-picker"
	label="DateTime Picker"
/>
