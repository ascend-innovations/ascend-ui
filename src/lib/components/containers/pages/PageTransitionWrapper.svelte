<script>
    import { fade, fly } from 'svelte/transition'
    export let styles = [], delayIn = true
</script>

<div
    class="animation"
    in:fly={{ y: 50, duration: 1000, delay: delayIn ? 500 : 0 }}
    out:fade={{ duration: 500 }}
    on:outroend={() => window.scrollTo(0, 0)}
    style={styles.join(';')}
>
    <slot />
</div>

<style>
    .animation {
        width: 100%;
    }
</style>