<script context="module">
    import request from "../data/request";

    export async function preload() {
        try {
            const usStats = await request.usStat();
            return { usStats };
        } catch (e) {
            this.error(500, "Something went wrong. Please try again later");
        }
    }
</script>
<script>
    import CovidStat from '../components/CovidStat.svelte';
    import CovidChart from '../components/CovidChart.svelte';
    import TableContainer from '../components/TableContainer.svelte';
    export let usStats;
</script>

<svelte:head>
    <title>Covid-19 Tracker</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid-19</h1>
    </div>
</div>


<CovidStat {...usStats}/>
<CovidChart />
<TableContainer />
