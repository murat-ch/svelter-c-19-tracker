import format from "./format";
function usStats(data) {
    const [usStatRaw] = data;
    return {
        cases: format.number(usStatRaw.positive),
        deathes: format.number(usStatRaw.death),
        recovered: format.number(usStatRaw.recovered),
        ventilator: format.number(usStatRaw.onVentilatorCurrently),
        hospitalized: format.number(usStatRaw.hospitalized),
        icu: format.number(usStatRaw.inIcuCurrently),
        tested: format.number(usStatRaw.totalTestResults),
        updated: format.number(usStatRaw.lastModified)
    }
}

export default {
    usStats,
};