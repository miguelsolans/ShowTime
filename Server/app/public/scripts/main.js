require.config({
    "baseUrl": '/scripts',
    "paths": {

        /**
         * Application External Libraries
         */
        // jQuery & Plguins
        "jquery": "external/jquery/3.4.1/jquery",

        // Bootstrap
        "bootstrap": "external/bootstrap/4.4.1/bootstrap.bundle",
        // "popper": "external/bootstrap/popper",

        // Highcharts 8.0.4
        "highcharts-base8": "external/highcharts/8.0.4/highcharts",
        "highcharts8": "external/highcharts/8.0.4/highcharts-more",

        // Highcharts 6.1.1
        'highcharts-base': 'https://code.highcharts.com/6.1.1/highcharts',
        'highcharts': 'https://code.highcharts.com/6.1.1/highcharts-more',
        'highcharts-exporting': 'https://code.highcharts.com/6.1.1/modules/exporting',
        'highcharts-wordcloud': 'https://code.highcharts.com/6.1.1/modules/wordcloud',
        'highcharts-sunburst': 'https://code.highcharts.com/6.1.1/modules/sunburst',
        'highcharts-annotations': 'https://code.highcharts.com/6.1.1/modules/annotations',
        'highcharts-streamgraph': 'https://code.highcharts.com/6.1.1/modules/streamgraph',
        'highcharts-serieslabel': 'https://code.highcharts.com/6.1.1/modules/series-label',

        /**
         * Application Utils
         */
    },

    /**
     * Shim Libraries
     */
    "shim": {
        // Bootstrap
        "bootstrap": {
            "deps": [
                'jquery'
                // 'popper'
            ]
        },
        // Highcharts
        "highcharts": {
            exports: "Highcharts",
            deps: ['jquery', 'highcharts-base']
        },
        "highcharts-base": {
            deps: ['jquery']
        }
    },

    scriptType: 'text/javascript'

});

require([
    'jquery',
    'bootstrap',
], () => {
    console.log("Common modules loaded");
});