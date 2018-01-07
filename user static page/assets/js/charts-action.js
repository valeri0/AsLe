google.charts.load('visualization', '1.0', {
    'packages': ['corechart']

});



google.charts.setOnLoadCallback(initialize);




function initialize() {


    var area_chart_uri = '';
    var donut_char_uri = '';
    var line_chart_uri = '';

    var user_stats = '';

    firebase.auth().onAuthStateChanged(onAuthStateChange);

    function onAuthStateChange(user) {
        if (user) {

            // in caz ca este logat

            var userId = user.uid;
            user_uid = userId;

            // vom face apel la baza de date pentru a prelua datele despre acesta

            firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {

                user_stats = snapshot.val().stats;

                // pentru donut_chart
                function getTotalNumberOfLettersDrawn(user_stats){

                    var count = 0;
                    for(var key in user_stats.lessons_progress){
                        count += user_stats.lessons_progress[key].number_of_letters_drawn;
                    }

                    return count;
                }

                // pentru area_chart
                function getArrayOfScorePerDay(user_stats){

                    var array = [['Day','Score']];

                    for(var day in user_stats.per_day){

                        array.push([day,user_stats.per_day[day].score])

                    }

                    /*
                        in caz ca nu avem date destule pentru grafic, il vom initializa cu o valoare dummy
                     */

                    if(array.length == 1){
                        array.push(['No data',0]);
                    }
                    return array;

                }

                // pentru line_chart
                function getArrayOfTotalTriesAndSuccessesPerDay(user_stats){
                    var array = [['Day','Tries','Successes']];

                    for(var day in user_stats.per_day){
                        array.push([day,user_stats.per_day[day].number_of_tries,user_stats.per_day[day].number_of_successes])
                    }

                    /*
                         in caz ca nu avem date destule pentru grafic, il vom initializa cu o valoare dummy
                    */

                    if(array.length == 1){
                        array.push(['No data', 0,0]);
                    }

                    return array;
                }

                // Begin Data


                var data_for_area_chart = google.visualization.arrayToDataTable(getArrayOfScorePerDay(user_stats));



                var data_for_donut_chart = google.visualization.arrayToDataTable([
                    ['Task', 'Hours per Day'],
                    ['Drawn', getTotalNumberOfLettersDrawn(user_stats)],
                    ['Remaining', 8]
                ]);



                var data_for_line_chart = google.visualization.arrayToDataTable(getArrayOfTotalTriesAndSuccessesPerDay(user_stats));

                // End Data

                // Begin Options
                var options_area_chart = {
                    title: 'Total score per day',
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

                };

                var options_line_chart = {
                    title: 'Tries and successes per day',
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



                drawChart();

            });
        }
        else
        {
            // in cazul in care iese din aplicatie, va fi redirectionat la pagina de start

            window.location = '../Start.html';
        }
    }





}
