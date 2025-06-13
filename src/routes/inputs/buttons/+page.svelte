<script>
	import { BackButton, CancelButton, ClearButton, CloseDialogButton, CloseToastButton, ContactUsButton, ContinueButton, ExportCSVButton, HomeButton, idReferenceCounter, LoginButton, LogoutButton/*, NavBarToggleButton*/, NextButton, OkButton, ProfileButton, SampleButton } from '$lib/index.js'

	const idCounter = idReferenceCounter();


</script>

<h1>Buttons</h1>
<div style="display:flex;flex-wrap:wrap">

<SampleButton name="BackButton">
	<BackButton id={idCounter.next()}/>
</SampleButton>
<SampleButton name="CancelButton">
	<CancelButton id={idCounter.next()}/>
</SampleButton>
<SampleButton name="ClearButton">
	<ClearButton id={idCounter.next()}/>
</SampleButton>
<SampleButton name="CloseDialogButton">
	<CloseDialogButton id={idCounter.next()}/>
</SampleButton>
<SampleButton name="CloseToastButton">
	<CloseToastButton  id={idCounter.next()}/>
</SampleButton>
<SampleButton name="ContactUsButton">
	<ContactUsButton id={idCounter.next()}/>
</SampleButton>
<SampleButton name="ContinueButton">
	<ContinueButton id={idCounter.next()}/>
</SampleButton>
<SampleButton name="ExportCSVButton">
	<ExportCSVButton id={idCounter.next()}/>
</SampleButton>
<SampleButton name="HomeButton">
	<HomeButton id={idCounter.next()}/>
</SampleButton>
<SampleButton name="LoginButton">
	<LoginButton id={idCounter.next()}/>
</SampleButton>
<SampleButton name="LogoutButton">
	<LogoutButton id={idCounter.next()}/>
</SampleButton>
<!-- <SampleButton name="NavBarToggleButton">
	<NavBarToggleButton />
</SampleButton> -->
<SampleButton name="NextButton">
	<NextButton id={idCounter.next()}/>
</SampleButton>
<SampleButton name="OkButton">
	<OkButton id={idCounter.next()}/>
</SampleButton>
<SampleButton name="ProfileButton">
	<ProfileButton id={idCounter.next()}/>
</SampleButton>
</div>
