var globalDx = 1;
var globalDy = 1;
var globalArary = [];

function updateX() {
    var dx = document.getElementById("dx").value;
    globalDx  = dx;
    updateChart()
}

function updateY() {
    var dy = document.getElementById("dy").value;
    globalDy  = dy;
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
                data: globalArary
                //data: [[5, 2], [6, 3], [8, 2], [9, 4]]
            }]
        });
    });
}

function toArray(csv) {
    $.csv.toArrays(csv);
}


function readTextFile(file) {
    file = document.getElementById("fileName").value;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;

                processData(allText);
            }
        }
    };
    rawFile.send(null);
}


function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = new Array();


    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            lines[i-1] = new Array(2)
            lines[i-1][0] = Number(data[0])
            lines[i-1][1] = Number(data[1])
        }
    }
    globalArary = lines
    updateChart()
    alert('Sucess with load the file');
}

