<script context="module">
    import stateNames from "../data/stateNames";
    import request from "../data/request";


    export async function preload(page) {
        const state = page.params["state"];
        if (stateNames.find(s => s.abbreviation === state) === undefined) {
            this.error(404, 'State Not Found');
            return ;
        }
        try {
            const stats = await request.stateStats(state);
            return { state, stats}
        }catch (e) {
            this.error(500, "Something went wrong. Please try again later");
        }
    }
</script>
<script>
    import CovidStat from '../components/CovidStat.svelte';
    import CovidChart from '../components/CovidChart.svelte';
    export let state;
    export let stats;
</script>
<svelte:head>
    <title>Covid-19 - {state}</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid-19 - {state}</h1>
    </div>
</div>

<h1>{state}</h1>
<CovidStat {...stats}/>
<CovidChart />

<!--TODO: video 2.44.47-->
