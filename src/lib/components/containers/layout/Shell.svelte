<script>
	export let styles = []
</script>

<div 
	class="shell" 
	style={styles.join(';')}
>
	<slot />
</div>

<style>
	.shell {
		box-sizing: border-box;
		display: flex;
		height: 100%;
		overflow: hidden;
		width: 100%;
	}
</style>
