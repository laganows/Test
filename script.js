var globalDx = 1;
var globalDy = 1;
var globalArary = [];
var globalFile

var globalFromX = null
var globalToX = null
var globalFromY = null
var globalToY = null

function updateFile() {
    globalFile = document.getElementById("files").value
    globalFile = globalFile.split('\\')
    globalFile = globalFile[globalFile.length-1]
}

function updateX() {
    var dx = document.getElementById("dx").value;
    var fromX = document.getElementById("fromX").value;
    var toX = document.getElementById("toX").value;
    if (isNaN(dx) || dx <= 0) {
        alert("Wrong dx")
    } else if (isNaN(fromX)) {
        alert("Wrong \"from\" for Ox")
    } else if (isNaN(toX)) {
        alert("Wrong \"to\" for Ox")
    }
    else {
        updateFile()
        globalDx = dx;
        if (fromX) {
            globalFromX = Number(fromX);
        }
        if (toX) {
            globalToX = Number(toX);
        }
        readTextFile(globalFile)
        updateChart()
    }
}

function updateY() {
    var dy = document.getElementById("dy").value;
    var fromY = document.getElementById("fromY").value;
    var toY = document.getElementById("toY").value;
    if (isNaN(dy) || dy <= 0) {
        alert("Wrong dy")
    } else if (isNaN(fromY)) {
        alert("Wrong \"from\" for Ox")
    } else if (isNaN(toY)) {
        alert("Wrong \"to\" for Ox")
    }
    else {
        updateFile()
        globalDy = dy;
        if (fromY) {
            globalFromY = Number(fromY);
        }
        if (toY) {
            globalToY = Number(toY);
        }
        readTextFile(globalFile)
        updateChart()
    }
}

function updateChart() {
    /*Highcharts.setOptions({
        lang: {
            numericSymbols: ['e+3', 'e+6', 'e+9', 'T', 'P', 'E']//null //otherwise by default ['k', 'M', 'G', 'T', 'P', 'E']
        }
    });*/
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
                }],
                labels: {
                    formatter: function () {
                        return this.value / Math.pow(10, $("#presicionSelectDx").val());
                    }
                },
                min: globalFromX,
                max: globalToX
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
                }],
                labels: {
                    formatter: function () {
                        return this.value / Math.pow(10, $("#presicionSelectDy").val());
                    }
                },
                min: globalFromY,
                max: globalToY
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                //data: globalArary
                data: [[50, 2], [60, 3], [80, 2], [89, 4], [90, 2]]
            }]
        });
    });
}


function readTextFile(file) {
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
    //rawFile.send(null);
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
}

