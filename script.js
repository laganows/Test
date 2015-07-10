var globalDx = 1
var globalDy = 1

function updateX() {
    var dx = document.getElementById("dx").value
    globalDx  = dx
    updateChart()
}

function updateY() {
    var dy = document.getElementById("dy").value
    globalDy  = dy
    updateChart()
}

function updateChart() {
    $(function () {
        $('#container').highcharts({
            title: {
                text: 'Chart',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: Example data',
                x: -20
            },
            xAxis: {
                title: {
                    text: 'x'
                },
                tickInterval: Number(globalDx), //$("#dx").value,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            yAxis: {
                title: {
                    text: 'y'
                },
                tickInterval: Number(globalDy),
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                data: [[5, 2], [6, 3], [8, 2], [9, 4]]
            }]
        });
    });
}

/*
function zad1() {
    $(document).ready(function() {
        var dx = 2
        var dy = 1

        $("input#submitButtonDx").click(function(){
            var valueToCheck = document.getElementById("dx").value;
            var naturalNumbersPattern = /^[1-9][0-9]*$/
            var realNumbersPattern = /^[0-9]+[.][0-9]*$/
            if (realNumbersPattern.test(valueToCheck) || naturalNumbersPattern.test(valueToCheck)) {
                dx = valueToCheck
                alert("Good number");
            } else {
                alert("Wrong number");
                return
            }

        });

        $("input#submitButtonDy").click(function(){
            alert("button");
        });



        $(function () {
            $('#container').highcharts({
                title: {
                    text: 'Chart',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Source: Example data',
                    x: -20
                },
                xAxis: {
                    title: {
                        text: 'x'
                    },
                    tickInterval: document.getElementById("dx").value,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                yAxis: {
                    title: {
                        text: 'y'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    data: [[5, 2], [6, 3], [8, 2], [9, 4]]
                }]
            });
        });

    });
}
*/
