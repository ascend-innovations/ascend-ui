<script>
	import SelectorInput from '$lib/components/inputs/selectors/SelectorInput.svelte'
	import { Chart, Page, PageBody, StatusTag, PageTransitionWrapper } from '$lib/index.js'

	let svgpin = `<div style="position:relative;">
			<svg width="48" height="61" viewBox="0 0 48 61" fill="none">
				<path d="M4.6144 36.9987C-6.21162 21.3611 4.98056 0 23.9999 0C43.0193 0 54.2115 21.3611 43.3855 36.9987L28.5877 58.3733C26.3688 61.5783 21.6311 61.5783 19.4122 58.3733L4.6144 36.9987Z" fill="#A04B4B"/>
  				<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25879 35.8603L21.0566 57.2349C22.4801 59.2911 25.5197 59.2911 26.9433 57.2349L41.7411 35.8602C51.6488 21.5491 41.406 2 23.9999 2C6.59389 2 -3.64892 21.5491 6.25879 35.8603ZM23.9999 0C4.98056 0 -6.21162 21.3611 4.6144 36.9987L19.4122 58.3733C21.6311 61.5783 26.3688 61.5783 28.5877 58.3733L43.3855 36.9987C54.2115 21.3611 43.0193 0 23.9999 0Z" fill="#F8EDEB"/>
				<circle cx="24" cy="24" r="16" fill="white"/>
			</svg>
			<svg style="position: absolute;left:24px;top: 19%;transform:translateX(-50%);" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M15.5 11.5H14.5L13 14.5L11 8.5L9.5 11.5H8.5M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.75009 14.4724 8.97129 18.311 10.948 20.0749C11.3114 20.3991 11.4931 20.5613 11.7058 20.6251C11.8905 20.6805 12.0958 20.6805 12.2805 20.6251C12.4932 20.5613 12.6749 20.3991 13.0383 20.0749C15.015 18.311 19.2362 14.4724 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="#140D31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>`

	let pin = 'https://ascnd.s3.us-east-2.amazonaws.com/familiar-faces/mcadamhs/hospital-pin.svg'

	let newGeoData = [
    {
        "count": 2,
        "type": "provider",
        "name": "CompDrug Youth to Youth",
        "address": {
            "full_address": "118 E Main St, Columbus, OH 43215",
            "street": "118 E Main St",
            "city": "Columbus",
            "state": "OH",
            "zip": "43215"
        },
        "lat": "39.956579705882355",
        "lng": "-82.99637",
		"html": "true",
        "marker": svgpin
    },
    {
        "count": 1,
        "type": "provider",
        "name": "DayMont Behavioral Health Care",
        "address": {
            "full_address": "1520 Germantown St, Dayton, OH 45417",
            "street": "1520 Germantown St",
            "city": "Dayton",
            "state": "OH",
            "zip": "45417"
        },
        "lat": "39.7466037790724",
        "lng": "-84.21846334262618",
        "marker": pin
    },
    {
        "count": 1,
        "type": "provider",
        "name": "Dayton Children’s Hospital",
        "address": {
            "full_address": "1 Childrens Plaza, Dayton, OH 45404",
            "street": "1 Childrens Plaza",
            "city": "Dayton",
            "state": "OH",
            "zip": "45404"
        },
        "lat": "39.774028",
        "lng": "-84.169785",
        "marker": pin
    },
    {
        "count": 1,
        "type": "provider",
        "name": "Life Essentials",
        "address": {
            "full_address": "40 S. Perry St, Dayton, OH, 45402",
            "street": "40 S. Perry St",
            "city": "Dayton",
            "state": "OH",
            "zip": "45402"
        },
        "lat": "39.7577977",
        "lng": "-84.1958771",
        "marker": pin
    },
    {
        "count": 1,
        "type": "provider",
        "name": "Miami Valley Hospital",
        "address": {
            "full_address": "1 Wyoming St, Dayton, OH 45409",
            "street": "1 Wyoming St",
            "city": "Dayton",
            "state": "OH",
            "zip": "45409"
        },
        "lat": "39.74524605",
        "lng": "-84.18604426125285",
        "marker": pin
    },
    {
        "count": 1,
        "type": "provider",
        "name": "Naphcare",
        "address": {
            "full_address": "330 West 2Nd St, Dayton, OH 45422",
            "street": "330 West 2Nd St",
            "city": "Dayton",
            "state": "OH",
            "zip": "45422"
        },
        "lat": "39.75999523076923",
        "lng": "-84.19780969230769",
        "marker": pin
    },
    {
        "count": 2,
        "type": "provider",
        "name": "Nova Behavioral Health",
        "address": {
            "full_address": "732 Beckman St, Dayton, OH 45410",
            "street": "732 Beckman St",
            "city": "Dayton",
            "state": "OH",
            "zip": "45410"
        },
        "lat": "39.73863097959184",
        "lng": "-84.1649025510204",
        "marker": pin
    },
    {
        "count": 2,
        "type": "provider",
        "name": "Places Inc",
        "address": {
            "full_address": "11 W Monument Ave, Dayton, OH 45402",
            "street": "11 W Monument Ave",
            "city": "Dayton",
            "state": "OH",
            "zip": "45402"
        },
        "lat": "39.7638755",
        "lng": "-84.1935741",
        "marker": pin
    },
    {
        "count": 1,
        "type": "provider",
        "name": "RI International",
        "address": {
            "full_address": "601 S Edwin C Moses Blvd, Dayton, Ohio 45417",
            "street": "601 S Edwin C Moses Blvd",
            "city": "Dayton",
            "state": "Ohio",
            "zip": "45417"
        },
        "lat": "39.749291",
        "lng": "-84.199271",
        "marker": pin
    },
    {
        "count": 1,
        "type": "provider",
        "name": "Samaritan Behavioral Health",
        "address": {
            "full_address": "707 S Edwin C Moses Blvd, Dayton, OH 45417",
            "street": "707 S Edwin C Moses Blvd",
            "city": "Dayton",
            "state": "OH",
            "zip": "45417"
        },
        "lat": "39.74467867805528",
        "lng": "-84.19565849496281",
        "marker": pin
    },
    {
        "count": 1,
        "type": "provider",
        "name": "Sojourner Recovery Services",
        "address": {
            "full_address": "294 N Fair Ave, Hamilton, OH 45011",
            "street": "294 N Fair Ave",
            "city": "Hamilton",
            "state": "OH",
            "zip": "45011"
        },
        "lat": "39.39595183513435",
        "lng": "-84.54178957396414",
        "marker": pin
    },
    {
        "count": 2,
        "type": "provider",
        "name": "South Community",
        "address": {
            "full_address": "3095 Kettering Blvd, Moraine, OH 45439",
            "street": "3095 Kettering Blvd",
            "city": "Moraine",
            "state": "OH",
            "zip": "45439"
        },
        "lat": "39.705709526484625",
        "lng": "-84.20325425252015",
        "marker": pin
    }
]

	let barData = [
		{ x: 'M', series: 'Source', value: 10 },
		{ x: 'Hospital 2', series: 'Source', value: 15 },
		{ x: 'Hospital 3, the biggest hospital of them all. How crazy is it that it has such a long name', series: 'Source', value: 13 },
		{ x: 'Hospital 4', series: 'Source', value: 4 },
		{ x: 'Hospital 5', series: 'Source', value: 20 },
	]

	let stackedBarData = [
		{ x: 'Jan', name: 'A', value: 40 },
		{ x: 'Jan', name: 'B', value: 5 },
		{ x: 'Jan', name: 'C', value: 35 },
		{ x: 'Feb', name: 'A', value: 50 },
		{ x: 'Feb', name: 'B', value: 15 },
		{ x: 'Feb', name: 'C', value: 30 },
		{ x: 'Mar', name: 'A', value: 35 },
		{ x: 'Mar', name: 'B', value: 25 },
		{ x: 'Mar', name: 'C', value: 20 },
		{ x: 'Apr', name: 'A', value: 20 },
		{ x: 'Apr', name: 'B', value: 35 },
		{ x: 'Apr', name: 'C', value: 25 },
		{ x: 'May', name: 'A', value: 10 },
		{ x: 'May', name: 'B', value: 55 },
		{ x: 'May', name: 'C', value: 33 },
	]

	let areaData = [
		{ date: '2018', series: 'Source', value: 2505 },
		{ date: '2019', series: 'Source', value: 2845 },
		{ date: '2020', series: 'Source', value: 2807 },
		{ date: '2021', series: 'Source', value: 2641 },
		{ date: '2022', series: 'Source', value: 2732 },
		{ date: '2023', series: 'Source', value: 2524 },
	]

	let citData = [
		{ date: '2023-01-01T00:00:00-05:00', series: 'CIT', value: 1400.33 },
		{ date: '2023-01-15T00:00:00-05:00', series: 'CIT', value: 1600.12 },
		{ date: '2023-01-25T00:00:00-05:00', series: 'CIT', value: 1300.05 },
		{ date: '2023-02-01T00:00:00-05:00', series: 'CIT', value: 1000.99 },
		{ date: '2023-02-15T00:00:00-05:00', series: 'CIT', value: 900.56 },
		{ date: '2023-02-25T00:00:00-05:00', series: 'CIT', value: 700.65 },
		{ date: '2023-03-01T00:00:00-05:00', series: 'CIT', value: 1300.12 },
		{ date: '2023-03-15T00:00:00-05:00', series: 'CIT', value: 1500.42 },
		{ date: '2023-03-20T00:00:00-05:00', series: 'CIT', value: 1500.97 },
		{ date: '2023-03-25T00:00:00-05:00', series: 'CIT', value: 1400.66 },
		{ date: '2023-04-01T00:00:00-05:00', series: 'CIT', value: 1900.17 },
		{ date: '2023-04-10T00:00:00-05:00', series: 'CIT', value: 2100.71 },
		{ date: '2023-04-15T00:00:00-05:00', series: 'CIT', value: 2000.28 },
		{ date: '2023-04-20T00:00:00-05:00', series: 'CIT', value: 1900.83 },
		{ date: '2023-04-25T00:00:00-05:00', series: 'CIT', value: 1900.92 },
		{ date: '2023-05-01T00:00:00-05:00', series: 'CIT', value: 3100.01 },
		{ date: '2023-05-15T00:00:00-05:00', series: 'CIT', value: 3000.11 },
		{ date: '2023-06-01T00:00:00-05:00', series: 'CIT', value: 1700.54 },
		{ date: '2023-06-10T00:00:00-05:00', series: 'CIT', value: 1500.33 },
		{ date: '2023-06-20T00:00:00-05:00', series: 'CIT', value: 1600.42 },
		{ date: '2023-06-27T00:00:00-05:00', series: 'CIT', value: 1900.53 },
		{ date: '2023-07-01T00:00:00-05:00', series: 'CIT', value: 2000.75 },
		{ date: '2023-07-15T00:00:00-05:00', series: 'CIT', value: 2300.91 },
		{ date: '2023-07-25T00:00:00-05:00', series: 'CIT', value: 800.19 },
		{ date: '2023-08-01T00:00:00-05:00', series: 'CIT', value: 500.07 },
		{ date: '2023-08-15T00:00:00-05:00', series: 'CIT', value: 340.04 },
		{ date: '2023-08-25T00:00:00-05:00', series: 'CIT', value: 300.12 },
		{ date: '2023-09-01T00:00:00-05:00', series: 'CIT', value: 200.99 },
		{ date: '2023-09-15T00:00:00-05:00', series: 'CIT', value: 250.99 },
		{ date: '2023-09-25T00:00:00-05:00', series: 'CIT', value: 300.99 },
		{ date: '2023-10-01T00:00:00-05:00', series: 'CIT', value: 700.86 },
		{ date: '2023-10-20T00:00:00-05:00', series: 'CIT', value: 1000.47 },
		{ date: '2023-11-01T00:00:00-05:00', series: 'CIT', value: 2200.46 },
		{ date: '2023-11-10T00:00:00-05:00', series: 'CIT', value: 2400.84 },
		{ date: '2023-11-15T00:00:00-05:00', series: 'CIT', value: 2600.32 },
		{ date: '2023-11-20T00:00:00-05:00', series: 'CIT', value: 2700.14 },
		{ date: '2023-11-25T00:00:00-05:00', series: 'CIT', value: 2500.71 },
		{ date: '2023-12-01T00:00:00-05:00', series: 'CIT', value: 2300.17 },
		{ date: '2023-12-15T00:00:00-05:00', series: 'CIT', value: 2400.99 },
		{ date: '2023-12-25T00:00:00-05:00', series: 'CIT', value: 2000.07 },
	]

	let realStacked = [
		{ date: '2018', name: 'Logan', value: 12 },
		{ date: '2019', name: 'Logan', value: 9 },
		{ date: '2020', name: 'Logan', value: 8 },
		{ date: '2021', name: 'Logan', value: 7 },
		{ date: '2022', name: 'Logan', value: 8 },
		{ date: '2023', name: 'Logan', value: 10 },
		{ date: '2018', name: 'Champaign', value: 6 },
		{ date: '2019', name: 'Champaign', value: 10 },
		{ date: '2020', name: 'Champaign', value: 5 },
		{ date: '2021', name: 'Champaign', value: 4 },
		{ date: '2022', name: 'Champaign', value: 7 },
		{ date: '2023', name: 'Champaign', value: 8 },
	]

	let stackedAreaData = [
		{ date: '2024-01-04', name: 'Company 1', value: 25 },
		{ date: '2024-01-04', name: 'Company 2', value: 50 },
		{ date: '2024-01-04', name: 'Company 3', value: 12 },
		{ date: '2024-01-25', name: 'Company 1', value: 22 },
		{ date: '2024-01-25', name: 'Company 2', value: 53 },
		{ date: '2024-01-25', name: 'Company 3', value: 14 },
		{ date: '2024-02-02', name: 'Company 1', value: 20 },
		{ date: '2024-02-02', name: 'Company 2', value: 55 },
		{ date: '2024-02-02', name: 'Company 3', value: 16 },
		{ date: '2024-02-13', name: 'Company 1', value: 24 },
		{ date: '2024-02-13', name: 'Company 2', value: 60 },
		{ date: '2024-02-13', name: 'Company 3', value: 18 },
		{ date: '2024-02-29', name: 'Company 1', value: 28 },
		{ date: '2024-02-29', name: 'Company 2', value: 62 },
		{ date: '2024-02-29', name: 'Company 3', value: 16 },
		{ date: '2024-03-06', name: 'Company 1', value: 30 },
		{ date: '2024-03-06', name: 'Company 2', value: 65 },
		{ date: '2024-03-06', name: 'Company 3', value: 12 },
		{ date: '2024-03-17', name: 'Company 1', value: 34 },
		{ date: '2024-03-17', name: 'Company 2', value: 66 },
		{ date: '2024-03-17', name: 'Company 3', value: 10 },
		{ date: '2024-03-23', name: 'Company 1', value: 38 },
		{ date: '2024-03-23', name: 'Company 2', value: 66 },
		{ date: '2024-03-23', name: 'Company 3', value: 13 },
		{ date: '2024-04-15', name: 'Company 1', value: 33 },
		{ date: '2024-04-15', name: 'Company 2', value: 64 },
		{ date: '2024-04-15', name: 'Company 3', value: 15 },
	]

	let pieData = [
		{ name: 'MCADAMHS', value: 45, Percentage: '234' },
		{ name: 'Tri-County', value: 33, Percentage: '123' },
		{ name: '317 Board', value: 10, Percentage: '34' },
		{ name: 'AAH', value: 13, Percentage: '24' },
		{ name: 'Logan-Champaign', value: 65, Percentage: '23' },
	]

	let firstGeoData = [
		{ lat: 39.99301430308352, lng: -83.07889125866988 },
		{ lat: 39.95803726523056, lng: -83.01417504517886 },
		{ lat: 39.96951622358259, lng: -82.96960197216313 },
		{ lat: 39.99467810445367, lng: -83.00654358750577 },
	]

	let secondGeoData = [
		{
			name: 'Miami Valley Hospital',
			count: 15,
			lat: 39.993651990846004,
			lng: -83.03040957396438,
		},
		{
			name: 'Miami Valley Hospital',
			count: 15,
			lat: 39.99191506361452,
			lng: -83.01083640022647,
		},
		{
			name: 'Miami Valley Hospital',
			count: 15,
			lat: 39.99648321748808,
			lng: -83.00200723755758,
		},
		{
			name: 'Miami Valley Hospital',
			count: 15,
			lat: 39.97843952972203,
			lng: -83.01152342283109,
		},
		{
			name: 'Miami Valley Hospital',
			count: 15,
			lat: 40.017166463612554,
			lng: -82.99771283044907,
		},
	]

	let markers = {
		lhn: 'https://local-help-now.s3.us-east-2.amazonaws.com/Pin.svg',
		// lhn: '/src/lib/assets/images/Pin.svg'
	}

	let realData = [
		{
			full_address: '1 Wyoming Street, Dayton, OH 45409',
			street: '1 Wyoming Street',
			city: 'Dayton',
			state: 'OH',
			zip: '45409',
			lat: 39.74468936344823,
			lng: -84.18755780100692,
			name: 'Miami Valley Hospital',
			count: 15,
			type: 'hospital',
			url: 'https://www.example.com',
			marker: 'https://ascnd.s3.us-east-2.amazonaws.com/local-help-now/mcadamhs/Map-Pin-MCADAMHS.svg',
		},
		{
			full_address: '405 W Grand Ave, Dayton, OH 45405',
			street: '405 W Grand Ave',
			city: 'Dayton',
			state: 'OH',
			zip: '45405',
			lat: 39.770033831326764,
			lng: -84.2026657451856,
			name: 'Kettering Health - Dayton',
			count: 10,
			type: 'hospital',
			url: 'https://www.example.com',
			marker: 'https://ascnd.s3.us-east-2.amazonaws.com/local-help-now/mcadamhs/Map-Pin-MCADAMHS.svg',
		},
		{
			full_address: '3535 Southern Blvd, Kettering, OH 45429',
			street: '3535 Southern Blvd',
			city: 'Kettering',
			state: 'OH',
			zip: '45429',
			lat: 39.69714763919204,
			lng: -84.19111608751633,
			name: 'Kettering Health - Main Campus',
			count: 1,
			type: 'hospital',
			url: 'https://www.example.com',
			marker: 'https://ascnd.s3.us-east-2.amazonaws.com/local-help-now/mcadamhs/Map-Pin-MCADAMHS.svg',
		},
		{
			full_address: '3417 Marshall Rd, Dayton, OH 45429',
			street: '3417 Marshall Rd',
			city: 'Dayton',
			state: 'OH',
			zip: '45429',
			lat: 39.69683452972968,
			lng: -84.14159441635228,
			name: 'Eastway Behavioral Health',
			count: 407,
			type: 'provider',
			url: 'https://www.example.com',
			marker: 'https://ascnd.s3.us-east-2.amazonaws.com/local-help-now/mcadamhs/Map-Pin-MCADAMHS.svg',
		},
		{
			full_address: '3095 Kettering Blvd, Moraine, OH 45439',
			street: '3095 Kettering Blvd',
			city: 'Moraine',
			state: 'OH',
			zip: '45439',
			lat: 39.70618516837155,
			lng: -84.20367446053149,
			name: 'South Community',
			count: 868,
			type: 'provider',
			url: 'https://www.example.com',
			marker: 'https://ascnd.s3.us-east-2.amazonaws.com/local-help-now/mcadamhs/Map-Pin-MCADAMHS.svg',
		},
		{
			full_address: '707 S Edwin C Moses Blvd, Dayton, OH 45417',
			street: '707 S Edwin C Moses Blvd',
			city: 'Dayton',
			state: 'OH',
			zip: '45417',
			lat: 39.7467775042141,
			lng: -84.19794147402233,
			name: 'Samaritan Behavioral Health',
			count: 2,
			type: 'provider',
			url: 'https://www.example.com',
			marker: 'https://ascnd.s3.us-east-2.amazonaws.com/local-help-now/mcadamhs/Map-Pin-MCADAMHS.svg',
		},
		{
			full_address: '11 W Monument Ave, Dayton, OH 45402',
			street: '11 W Monument Ave',
			city: 'Dayton',
			state: 'OH',
			zip: '45402',
			lat: 39.76412035481474,
			lng: -84.1935038163499,
			name: 'Places Inc',
			count: 64,
			type: 'provider',
			url: 'https://www.example.com',
			marker: 'https://ascnd.s3.us-east-2.amazonaws.com/local-help-now/mcadamhs/Map-Pin-MCADAMHS.svg',
		},
		{
			full_address: '330 W 2nd St, Dayton, OH 45422',
			street: '330 W 2nd St',
			city: 'Dayton',
			state: 'OH',
			zip: '45422',
			lat: 39.75987081414062,
			lng: -84.19777583169365,
			name: 'Montgomery County Jail',
			count: 58,
			type: 'jail',
			url: 'https://www.example.com',
			marker: 'https://ascnd.s3.us-east-2.amazonaws.com/local-help-now/mcadamhs/Map-Pin-MCADAMHS.svg',
		},
	]

	const tableData = [
		{
			id: 1,
			title: 'One',
			description: 'This is filler text',
			status: 'Pending',
		},
		{
			id: 2,
			title: 'Two',
			description: 'This is filler text',
			status: 'Pending',
		},
		{
			id: 3,
			title: 'Three',
			description: 'This is filler text',
			status: 'Approved',
		},
		{
			id: 4,
			title: 'Four',
			description: 'This is filler text',
			status: 'Pending',
		},
		{
			id: 5,
			title: 'Five',
			description: 'This is filler text',
			status: 'Approved',
		},
		{
			id: 6,
			title: 'Six',
			description: 'This is filler text',
			status: 'Approved',
		},
		{
			id: 7,
			title: 'Seven',
			description: 'This is filler text',
			status: 'Approved',
		},
	]

	const tableColumns = [
		{
			id: 'title',
			title: 'Title',
			key: 'title',
			type: 'text',
			styles: ['flex: 1'],
		},
		{
			id: 'description',
			title: 'Description',
			key: 'description',
			type: 'text',
			styles: ['flex: 1'],
		},
		{
			id: '',
			type: 'tag',
			title: 'Status',
			key: 'status',
			component: StatusTag,
			styles: ['flex: 1'],
		},
	]

	const scatterData = [
		{ date: '2025-4-1', value: 55, series: 'Scatter' },
		{ date: '2025-4-2', value: 28, series: 'Scatter' },
		{ date: '2025-4-3', value: 63, series: 'Scatter' },
		{ date: '2025-4-4', value: 89, series: 'Scatter' },
		{ date: '2025-4-5', value: 44, series: 'Scatter' },
		{ date: '2025-4-6', value: 66, series: 'Scatter' },
		{ date: '2025-4-7', value: 17, series: 'Scatter' },
		{ date: '2025-4-8', value: 29, series: 'Scatter' },
		{ date: '2025-4-9', value: 59, series: 'Scatter' },
		{ date: '2025-4-10', value: 13, series: 'Scatter' },
		{ date: '2025-4-11', value: 92, series: 'Scatter' },
		{ date: '2025-4-12', value: 8, series: 'Scatter' },
		{ date: '2025-4-13', value: 71, series: 'Scatter' },
		{ date: '2025-4-14', value: 87, series: 'Scatter' },
		{ date: '2025-4-15', value: 70, series: 'Scatter' },
		{ date: '2025-4-16', value: 53, series: 'Scatter' },
		{ date: '2025-4-17', value: 15, series: 'Scatter' },
		{ date: '2025-4-18', value: 99, series: 'Scatter' },
		{ date: '2025-4-19', value: 14, series: 'Scatter' },
		{ date: '2025-4-20', value: 27, series: 'Scatter' },
		{ date: '2025-4-21', value: 75, series: 'Scatter' },
		{ date: '2025-4-22', value: 58, series: 'Scatter' },
		{ date: '2025-4-23', value: 91, series: 'Scatter' },
		{ date: '2025-4-24', value: 98, series: 'Scatter' },
		{ date: '2025-4-25', value: 22, series: 'Scatter' },
		{ date: '2025-4-26', value: 7, series: 'Scatter' },
		{ date: '2025-4-27', value: 93, series: 'Scatter' },
		{ date: '2025-4-28', value: 82, series: 'Scatter' },
		{ date: '2025-4-29', value: 46, series: 'Scatter' },
		{ date: '2025-4-30', value: 16, series: 'Scatter' },
	]

	let floatData = [
		{
		"date": "2025-02-27",
		"value": "16.00"
		},
		{
		"date": "2025-02-26",
		"value": "16.00"
		},
		{
		"date": "2025-02-25",
		"value": "16.00"
		},
		{
		"date": "2025-02-24",
		"value": "17.00"
		},
		{
		"date": "2025-02-23",
		"value": "16.00"
		},
		{
		"date": "2025-02-22",
		"value": "16.00"
		},
		{
		"date": "2025-02-21",
		"value": "17.00"
		},
		{
		"date": "2025-02-20",
		"value": "17.00"
		},
		{
		"date": "2025-02-19",
		"value": "20.00"
		},
		{
		"date": "2025-02-18",
		"value": "20.00"
		},
		{
		"date": "2025-02-17",
		"value": "20.00"
		},
		{
		"date": "2025-02-16",
		"value": "19.00"
		},
		{
		"date": "2025-02-15",
		"value": "46.00"
		},
		{
		"date": "2025-02-14",
		"value": "46.00"
		},
		{
		"date": "2025-02-13",
		"value": "45.00"
		},
		{
		"date": "2025-02-12",
		"value": "46.00"
		},
		{
		"date": "2025-02-11",
		"value": "48.00"
		},
		{
		"date": "2025-02-10",
		"value": "49.00"
		},
		{
		"date": "2025-02-09",
		"value": "48.00"
		},
		{
		"date": "2025-02-08",
		"value": "49.00"
		},
		{
		"date": "2025-02-07",
		"value": "49.00"
		},
		{
		"date": "2025-02-06",
		"value": "49.00"
		},
		{
		"date": "2025-02-05",
		"value": "50.00"
		},
		{
		"date": "2025-02-04",
		"value": "51.00"
		},
		{
		"date": "2025-02-03",
		"value": "63.00"
		},
		{
		"date": "2025-02-02",
		"value": "72.00"
		},
		{
		"date": "2025-02-01",
		"value": "73.00"
		},
		{
		"date": "2025-01-31",
		"value": "102.00"
		},
		{
		"date": "2025-01-30",
		"value": "86.00"
		},
		{
		"date": "2025-01-29",
		"value": "102.00"
		},
		{
		"date": "2025-01-28",
		"value": "96.00"
		},
		{
		"date": "2025-01-27",
		"value": "71.00"
		},
		{
		"date": "2025-01-26",
		"value": "65.00"
		},
		{
		"date": "2025-01-25",
		"value": "65.00"
		},
		{
		"date": "2025-01-24",
		"value": "105.00"
		},
		{
		"date": "2025-01-23",
		"value": "104.00"
		},
		{
		"date": "2025-01-22",
		"value": "129.00"
		},
		{
		"date": "2025-01-21",
		"value": "147.00"
		},
		{
		"date": "2025-01-20",
		"value": "57.00"
		},
		{
		"date": "2025-01-19",
		"value": "73.00"
		},
		{
		"date": "2025-01-18",
		"value": "73.00"
		},
		{
		"date": "2025-01-17",
		"value": "139.00"
		},
		{
		"date": "2025-01-16",
		"value": "133.00"
		},
		{
		"date": "2025-01-15",
		"value": "163.00"
		},
		{
		"date": "2025-01-14",
		"value": "150.00"
		},
		{
		"date": "2025-01-13",
		"value": "124.00"
		},
		{
		"date": "2025-01-12",
		"value": "75.00"
		},
		{
		"date": "2025-01-11",
		"value": "77.00"
		},
		{
		"date": "2025-01-10",
		"value": "148.00"
		},
		{
		"date": "2025-01-09",
		"value": "152.00"
		},
		{
		"date": "2025-01-08",
		"value": "171.00"
		},
		{
		"date": "2025-01-07",
		"value": "138.00"
		},
		{
		"date": "2025-01-06",
		"value": "89.00"
		},
		{
		"date": "2025-01-05",
		"value": "49.00"
		},
		{
		"date": "2025-01-04",
		"value": "50.00"
		},
		{
		"date": "2025-01-03",
		"value": "103.00"
		},
		{
		"date": "2025-01-02",
		"value": "109.00"
		},
		{
		"date": "2025-01-01",
		"value": "51.00"
		},
		{
		"date": "2024-12-31",
		"value": "358.00"
		},
		{
		"date": "2024-12-30",
		"value": "428.00"
		},
		{
		"date": "2024-12-29",
		"value": "338.00"
		},
		{
		"date": "2024-12-28",
		"value": "339.00"
		},
		{
		"date": "2024-12-27",
		"value": "185.00"
		},
		{
		"date": "2024-12-26",
		"value": "185.00"
		},
		{
		"date": "2024-12-25",
		"value": "110.00"
		},
		{
		"date": "2024-12-24",
		"value": "117.00"
		},
		{
		"date": "2024-12-23",
		"value": "219.00"
		},
		{
		"date": "2024-12-22",
		"value": "116.00"
		},
		{
		"date": "2024-12-21",
		"value": "344.00"
		},
		{
		"date": "2024-12-20",
		"value": "427.00"
		},
		{
		"date": "2024-12-19",
		"value": "469.00"
		},
		{
		"date": "2024-12-18",
		"value": "463.00"
		},
		{
		"date": "2024-12-17",
		"value": "449.00"
		},
		{
		"date": "2024-12-16",
		"value": "488.00"
		},
		{
		"date": "2024-12-15",
		"value": "349.00"
		},
		{
		"date": "2024-12-14",
		"value": "348.00"
		},
		{
		"date": "2024-12-13",
		"value": "439.00"
		},
		{
		"date": "2024-12-12",
		"value": "456.00"
		},
		{
		"date": "2024-12-11",
		"value": "477.00"
		},
		{
		"date": "2024-12-10",
		"value": "487.00"
		},
		{
		"date": "2024-12-09",
		"value": "492.00"
		},
		{
		"date": "2024-12-08",
		"value": "346.00"
		},
		{
		"date": "2024-12-07",
		"value": "345.00"
		},
		{
		"date": "2024-12-06",
		"value": "433.00"
		},
		{
		"date": "2024-12-05",
		"value": "480.00"
		},
		{
		"date": "2024-12-04",
		"value": "457.00"
		},
		{
		"date": "2024-12-03",
		"value": "472.00"
		},
		{
		"date": "2024-12-02",
		"value": "468.00"
		},
		{
		"date": "2024-12-01",
		"value": "350.00"
		},
		{
		"date": "2024-11-30",
		"value": "345.00"
		},
		{
		"date": "2024-11-29",
		"value": "351.00"
		},
		{
		"date": "2024-11-28",
		"value": "351.00"
		},
		{
		"date": "2024-11-27",
		"value": "457.00"
		},
		{
		"date": "2024-11-26",
		"value": "476.00"
		},
		{
		"date": "2024-11-25",
		"value": "465.00"
		},
		{
		"date": "2024-11-24",
		"value": "345.00"
		}
	]

	$: geoData = 'realData'

	export let data
</script>

<Page>
	<PageTransitionWrapper>
	<PageBody
		size="full"
		styles={['max-width: 1440px', 'margin: auto']}
	>
		<div class="header">
			<h1>Charts</h1>
		</div>
		<div class="chart-container">
			<div class="simple-v-bar">
				<Chart
					tooltipId="simple-v"
					type="bar"
					vertical
					sort="descending"
					title="Simple Vertical Bar Chart"
					titleTooltip={{ content: 'This is a tooltip that will probably wrap. Maybe even twice.' }}
					data={barData}
					domain="x"
					range="value"
					valueOneLabel="Date"
					valueTwoLabel="Value"
					domainLabel="Blue"
					rangeLabel="Big Measure"
					barColors={['var(--secondary-base']}
					rule="avg"
					seriesKey="series"
				/>
			</div>

			<!-- <div class="table-chart">
				<Chart 
					title="Table Chart"
					type="table"
					data={tableData}
					titleButton={{
						text: 'See More',
						url: '/'
					}}
					tableColumns={tableColumns}
				/>
			</div> -->

			<!-- <div class="simple-h-bar">
				<Chart
					tooltipId="simple-h"
					type="bar"
					horizontal
					title="Simple Horizontal Bar Chart"
					data={barData}
					domain="value"
					range="x"
				/>
			</div> -->
			<div class="stacked-v-bar">
				<Chart
					tooltipId="stacked-v"
					type="bar"
					vertical
					stacked={true}
					data={stackedBarData}
					title="Stacked Vertical Bar Chart"
					domain="x"
					range="value"
					valueOneLabel="x"
					valueTwoLabel="value"
					labelKey="name"
					seriesKey="name"
					lineColors={['var(--primary-700)', 'var(--primary-base)', 'var(--primary-300)']}
					areaColors={['var(--primary-trans-700)', 'var(--primary-trans-500)', 'var(--primary-trans-300)']}
				/>
			</div>
			<!-- <div class="stacked-h-bar">
				<Chart
					tooltipId="stacked-h"
					type="bar"
					horizontal
					stacked
					data={stackedBarData}
					title="Stacked Horizontal Bar Chart"
					domain="value"
					range="x"
					,
					labelKey="name"
					seriesKey="name"
				/>
			</div> -->
			<div class="simple-area-chart">
				<Chart
					tooltipId="area"
					type="area"
					data={scatterData}
					title="Simple Area Chart"
					domain="date"
					range="value"
					currency
					yearOnly
					valueOneLabel="date"
					valueTwoLabel="value"
					seriesKey="series"
				>
					<div
						slot="chart-header"
						style="margin-top: var(--spacing09);margin-bottom: var(--spacing09)"
					>
						<SelectorInput
							id="bar-selector"
							label="Random Selector"
							defaultOptionName={'realData'}
							defaultOptionValue={'realData'}
							optionList={['citData']}
							bind:selectedValue={geoData}
						/>
					</div>
					<div
						slot="chart-footer"
						style="margin-top: var(--spacing09)"
					>
						<SelectorInput
							id="bar-selector"
							label="Random Selector"
							defaultOptionName={'realData'}
							defaultOptionValue={'realData'}
							optionList={['secondGeoData']}
							bind:selectedValue={geoData}
						/>
					</div>
				</Chart>
			</div>
			<div class="stacked-area-chart">
				<Chart
					tooltipId="stacked-area"
					type="area"
					data={realStacked}
					title="Stacked Area Chart"
					domain="date"
					range="value"
					seriesKey="name"
					labelKey="name"
					valueOneLabel="date"
					valueTwoLabel="value"
					yearOnly
					stacked
				/>
			</div>
			<div class="pie-chart">
				<Chart
					tooltipId="pie"
					type="pie"
					data={pieData}
					title="Pie Chart"
					domain="name"
					range="value"
					seriesKey="name"
					sort="descending"
				/>
			</div>
			<div class="ring-chart">
				<Chart
					tooltipId="ring"
					type="pie"
					data={pieData}
					title="Ring Chart"
					domain="name"
					range="value"
					seriesKey="name"
					valueOneLabel="Count"
					valueTwoLabel="Percentage"
					ring
				/>
			</div>
			<div class="scatterplot-chart">
				<Chart
					tooltipId="scatter"
					data={scatterData}
					title="Scatterplot Chart"
					type="scatter"
					domain="date"
					range="value"
					seriesKey="series"
					valueOneLabel="date"
					valueTwoLabel="value"
					monthDay
				/>
			</div>
			<!-- <div class="geo-chart">
				<Chart
					title="Map With Multiple Markers"
					type="geo"
					mapId="first-map"
					pillText="Active Children"
					pillKey="count"
					addressKey="full_address"
					contentKey="zip"
					data={realData}
					geoJSON={null}
				/>
			</div> -->
			<div class="geo-chart">
				<Chart 
					title="Map With Multiple Markers"
					type="geo"
					mapId="second-map"
					pillText="Total Number of Claims"
					pillKey="count"
					addressKey="full_address"
					infoTitleKey="name"
					markers={markers}
					geoJSON={null}
					data={newGeoData}
				/>
			</div>
		</div>
	</PageBody>
	</PageTransitionWrapper>
</Page>

<style>
	.header {
		margin-left: 50px;
		padding-top: 100px;
	}
	.chart-container {
		width: 100%;
		min-height: 100vh;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: var(--spacing15);
	}
	.simple-v-bar,
	.simple-h-bar,
	.stacked-v-bar,
	.stacked-h-bar,
	.simple-area-chart,
	.stacked-area-chart,
	.pie-chart,
	.ring-chart,
	.scatterplot-chart,
	.geo-chart {
		width: 100%;
		height: 650px;
		margin: auto;
		margin-bottom: var(--spacing13);

		& .headline-s-m {
			margin-bottom: var(--spacing09);
		}

		& details {
			padding-top: var(--spacing04);
		}
	}
	.table-chart {
		height: fit-content;
	}
	.simple-h-bar {
		height: 50vh;
	}
	.geo-chart {
		height: 800px;
	}
</style>
