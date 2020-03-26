define([
    'jquery',
    'highcharts',
], ( $, Highcharts ) => {

    $.ajax({
        type: "GET",
        url: "http://localhost:3210/api/concert/drilldown/genre",
        success: data => {
            console.log(data);

            // Create the chart
            Highcharts.chart('drilldown', {
                chart: {
                    type: 'column'
                },
                credits: false,
                title: {
                    text: 'Concerts by Genre'
                },
                xAxis: {
                    type: 'category'
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        color: '#343a40',
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> concerts<br/>'
                },
                series: [
                    {
                        name: "Concert by Genre",
                        data: data[0]
                    },

                ]
            });

        },
        error: err => {
            console.log(err)
        }
    });






});