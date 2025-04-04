<script>
	import { closeDialog, CloseDialogButton, Dialog } from '$lib/index.js'

	export let store,
		cancelCallback = cancel

	function cancel() {
		store = closeDialog(store)
	}
</script>

<Dialog bind:store>
	<div
		class="dialog-header-slot-contents"
		slot="header"
	>
		<div class="headline-l-l">Create an Account or Update Your Profile</div>
		<form method="dialog">
			<CloseDialogButton callback={cancelCallback} />
		</form>
	</div>
	<div
		class="dialog-body-slot-contents"
		slot="body"
	>
		<p>Get in touch with your point of contact at Ascend Innovations via email to request a new administrator account be created, remove an existing account, or to update account details.</p>
		<p>To add new users, include the user’s first and last name, email address, and whether they should be assigned the role of Supervisor or Editor. In order for requests to be completed, the request must come from a Supervisor-level user.</p>
	</div>
</Dialog>

<style>
	p {
		margin-top: 6px;
	}
</style>
