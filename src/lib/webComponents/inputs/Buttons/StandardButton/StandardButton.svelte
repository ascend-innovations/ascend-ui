<script>
	//import {StandardButton} from "./StandardButton.js"
	import { onMount } from 'svelte';

  	export let bottomIcon,
    classes,
    disabled,
    leftIcon,
    loading,
    rightIcon,
    styles = [],
    text,
    topIcon;

  let mounted = false;

  onMount(async () => {
    if (!customElements.get('standard-button')) {
      await import('./StandardButton.js');
    }
    mounted = true;
  });
</script>

{#if mounted}
  <standard-button
    text={text}
    classes={classes}
    styles={styles}
    lefticon={leftIcon}
    righticon={rightIcon}
    topicon={topIcon}
    bottomicon={bottomIcon}
    loading={loading}
    disabled={disabled}
  />
{/if}
