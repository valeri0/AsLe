$(document).ready(function () {


    $('#share-area-chart-button').click(function () {

            FB.ui({
                display: 'popup',
                method: 'share',
                href: area_chart_uri,
            }, function (response) {});

    });

});
