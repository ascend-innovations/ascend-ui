<script>
    import { fade, fly } from 'svelte/transition'
</script>

<div
    in:fly={{ y: 50, duration: 1000, delay: 500 }}
    out:fade={{ duration: 500 }}
    on:outroend={() => window.scrollTo(0, 0)}
>
    <slot />
</div>