<script>
    import { Tag } from "$lib/index.js"
    export let data, styles
</script>

<a 
    href={data.link}
    class="sso-link"
>
    <div 
        class="sso-card neutral-shadow-s"
        style={styles?.join(';')}
    >
        <div class="sso-icon">
            <img src={data.icon} alt="">
        </div>
        <div class="sso-card-body">
            <h4 class="headline-l-m">{data.name}</h4>
            <p class="body-m">{data.description}</p>
            <Tag content={data.role} type="neutral-subtle" />
        </div>
    </div>
</a>