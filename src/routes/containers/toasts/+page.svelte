<script>
	import { Page, ToastArea } from '$lib/index.js'

	const toastList = [
		// {
		// 	body: 'Yay!',
		// 	category: 'dismiss',
		// 	id: 0,
		// 	purpose: 'success',
		// 	title: 'Success!',
		// },
		// {
		// 	body: 'Oh no, what now?',
		// 	category: 'action',
		// 	id: 1,
		// 	purpose: 'error',
		// 	title: 'Error!',
		// },
		// {
		// 	body: 'Something else?',
		// 	category: 'action',
		// 	id: 2,
		// 	purpose: 'error',
		// 	title: 'Error!',
		// },
		{
			id: 2,
			category: 'dismiss',
			title: 'Copied to Clipboard',
			body: '',
			purpose: 'copy'
		},
		{
			body: 'More problems!',
			category: 'action',
			id: 4,
			purpose: 'error',
			title: 'Error!',
		},
		{
			category: 'action',
			id: 3,
			purpose: 'success',
			title: 'Success!',
		},
	]
</script>

<Page>
	<h1>Toasts</h1>
	<pre>
		<code>
		{`
			const toastList = [
				{
					body: 'Yay!',
					category: 'dismiss',
					id: 0,
					purpose: 'success',
					title: 'Success!',
				},
				{
					body: 'Oh no, what now?',
					category: 'action',
					id: 1,
					purpose: 'error',
					title: 'Error!',
				}
			]
		`}
		</code>
	</pre>
	<ToastArea {toastList} />
</Page>
