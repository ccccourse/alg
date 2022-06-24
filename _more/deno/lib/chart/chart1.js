import QuickChart from "https://deno.land/x/quickchart/mod.ts";

const myChart = new QuickChart();

myChart.setConfig({
  type: 'bar',
  data: { labels: ['Hello world', 'Foo bar'], datasets: [{ label: 'Foo', data: [1, 2] }] },
});

console.log(myChart.getUrl());
