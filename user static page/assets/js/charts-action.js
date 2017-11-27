google.charts.load('visualization', '1.0', {
    'packages': ['corechart']

});



google.charts.setOnLoadCallback(initialize);

function initialize() {

    var area_chart_uri = '';
    var donut_char_uri = '';
    var line_chart_uri = '';


    // Begin Data
    var data_for_area_chart = google.visualization.arrayToDataTable([
        ['Day', 'Letters drawn correct'],
        [1, 4],
        [2, 2],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 7],
        [7, 9],
        [8, 10],
        [9, 1]

    ]);


    var data_for_donut_chart = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Drawn', 15],
          ['Remaining', 200]
        ]);



    var data_for_line_chart = google.visualization.arrayToDataTable([
          ['Week', 'Tries ', 'Successes'],
          ['1', 200, 7],
          ['2', 54, 2]
        ]);

    // End Data

    // Begin Options
    var options_area_chart = {
        title: 'Number of letters drawn correct per day',
        is3D: true,
        backgroundColor: {
            fill: 'transparent'
        },
        height: 220,
        animation: {
            "startup": true,
            duration: 1300,
            easing: 'out'
        }
    };


    var options_donut_chart = {
        title: 'Total number of symbols drawn',
        height: 250,
        backgroundColor: {
            fill: 'transparent'
        },
        pieHole: 0.4,
        chartArea: {
            left: 0,
            top: 25,
            width: "100%",
            height: "100%"
        },

        animation: {
            "startup": true,
            duration: 1300,
            easing: 'out'
        }

    }

    var options_line_chart = {
        title: 'Tries and successes per week',
        is3D: true,
        backgroundColor: {
            fill: 'transparent'
        },
        height: 250,
        curveType: 'function',
        animation: {
            "startup": true,
            duration: 1300,
            easing: 'out'
        }
    };

    // End Options

    // Begin Instantiation
    var area_chart = new google.visualization.AreaChart(document.getElementById('area_chart'));


    var donut_chart = new google.visualization.PieChart(document.getElementById('donut_chart'));

    var line_chart = new
    google.visualization.LineChart(document.getElementById('line_chart'));

    // End Instantiation


    // Get images uri for share

    var area_chart_div = document.getElementById('area_chart');
    var donut_chart_div = document.getElementById('donut_chart');
    var line_chart_div = document.getElementById('line_chart');



    function drawChart() {


        var a_chart = new google.visualization.AreaChart(area_chart_div);
        var d_chart = new google.visualization.PieChart(donut_chart_div);
        var l_chart = new google.visualization.LineChart(line_chart_div);

        google.visualization.events.addListener(a_chart, 'ready', function () {

            let area_chart_uri = a_chart.getImageURI();
        });

        google.visualization.events.addListener(d_chart, 'ready', function () {

            var donut_chart_uri = d_chart.getImageURI();
            $('#share_donut_chart_button').attr('href', 'https://www.facebook.com/sharer.php?u=' + donut_char_uri);

            console.log(donut_chart_uri);

        });

        google.visualization.events.addListener(l_chart, 'ready', function () {

            line_chart_uri = l_chart.getImageURI();

        });


        // Begin Drawing
        area_chart.draw(data_for_area_chart, options_area_chart);
        donut_chart.draw(data_for_donut_chart, options_donut_chart);
        line_chart.draw(data_for_line_chart, options_line_chart);
        // End Drawing


        // Load charts URI for share

    }

    $('#test_change_charts_values_button').click(function () {

        data_for_area_chart = google.visualization.arrayToDataTable([
        ['Day', 'Letters drawn correct'],
        [1, 4],
        [2, 2],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 7],
        [7, 9],
        [8, 10],
        [9, 1],
        [10, 1],
        [11, 9],
        [12, 1],
        [13, 4],
        [14, 2]

        ]);


        data_for_donut_chart = google.visualization.arrayToDataTable([
              ['Task', 'Hours per Day'],
              ['Drawn', 25],
              ['Remaining', 200]
            ]);



        data_for_line_chart = google.visualization.arrayToDataTable([
              ['Week', 'Tries ', 'Successes'],
              ['1', 200, 7],
              ['2', 54, 2],
              ['3', 70, 20]
            ]);


        drawChart();

    });


    drawChart();


}
