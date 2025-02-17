<script>
    import { CardGrid, SSOCard, FooterBar, AscendLoginBackground } from "$lib/index.js"

    export let data
</script>

<div class="sso-landing-page">
    <div class="sso-hero-image neutral-shadow-l" style={`background: center/cover url(${AscendLoginBackground})`}>
        <h1 class="headline-l-xxl">Ascend Suite</h1>
        <p class="body-l">Access your Ascend apps & dashboards, all in one place.</p>
    </div>
    <div class="sso-sections-container">
        {#if !data.has_apps}
        {:else}
            {#if data.dashboards?.length}
            <div class="sso-section">
                <h2 class="headline-l-l sso-landing-headline">Your Dashboards</h2>
                <CardGrid>
                    {#each data.dashboards as dashboard (dashboard.name)}
                        <SSOCard
                            data={dashboard}
                        />
                    {/each}
                </CardGrid>

            </div>
            {/if}
            {#if data.apps?.length}
            <div class="sso-section">
                <h2 class="headline-l-l sso-landing-headline">Your Apps</h2>
                <CardGrid>
                    {#each data.apps as app (app.name)}
                        <SSOCard
                            data={app}
                        />
                    {/each}
                </CardGrid>
            </div>
            {/if}
            {#if data.admin}
                <div class="sso-section">
                    <h2 class="headline-l-l sso-landing-headline">Accounts & Permissions</h2>
                    <CardGrid>
                        <SSOCard
                            data={data.admin}
                        />
                    </CardGrid>
                </div>
            {/if}
        {/if}
    </div>
</div>

<FooterBar />
