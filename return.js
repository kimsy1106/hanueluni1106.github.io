/*import ChartDataLabels from './chartjs-plugin-datalabels';
Chart.plugins.unregister(ChartDataLabels);
Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
    color: '#FE777B'
});*/

var scores = document.getElementById('scores').innerHTML.split(' ');
//context = document.getElementById('topChart').getContext('2d');
//var max = Math.max(scores[0], scores[1], scores[2], scores[3], scores[4]);
//var min = Math.min(scores[0], scores[1], scores[2], scores[3], scores[4]);
/*
const chartData = [{
    "label": "한타",
    "value": 1
}, {
    "label": "시야",
    "value": 1.3
}, {
    "label": "라인전",
    "value": 2
}, {
    "label": "이니시",
    "value": 0.2
}, {
    "label": "생존",
    "value": 4
}];

const chartConfig = {
    type: 'radar',
    renderAt: 'topChart',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "yAxisMaxValue": "4",
            "yAxisMinValue": "0",
            "caption": "5 radar chart",
            "subCaption": "Current month",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "data": chartData
    }
}
FusionCharts.ready(function () {
    var fusioncharts = new FusionCharts(chartConfig);
    fusioncharts.render();
});

*/
function getABC(score) {
    if (score >= 4.0) {
        return "A"
    } else if (score >= 3.5) {
        return "B+"
    } else if (score >= 3.0) {
        return "B"
    } else if (score >= 2.5) {
        return "C+"
    } else if (score >= 2.0) {
        return "C"
    } else if (score >= 1.5) {
        return "D+"
    } else if (score >= 1.0) {
        return "D"
    } else {
        return "F"
    }
}

new Chart('topChart', {
    type: 'radar',
    data: {
        labels: [[getABC(scores[0] * 4).toString(), "한타"], [getABC(scores[1] * 4).toString(), "시야"], [getABC(scores[2] * 4).toString(), "라인전"], [getABC(scores[3] * 4).toString(), "이니시"], [getABC(scores[4] * 4).toString(), "생존"]],
        datasets: [
            {
                fill: true,
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                data: [scores[0] * 4, scores[1] * 4, scores[2] * 4, scores[3] * 4, scores[4] * 4]
            }
        ]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true,
        scale: {
            pointLabels: {
                display: true,
                fontSize: 12
            },

            angleLines: {
                display: false
            },
            ticks: {
                beginAtZero: true,
                max: 5,
                stepSize: 1,
                display: false
            }
        },
        legend: {
            display: false
        },
        plugins: {

            legend: {
                display: false
            }
        }
    }
});



//context = document.getElementById('jungleChart').getContext('2d');

new Chart('jungleChart', {

    type: 'radar',
    data: {
        labels: [[getABC(scores[5] * 4).toString(), "한타"], [getABC(scores[6] * 4).toString(), "시야"], [getABC(scores[7] * 4).toString(), "라인전"], [getABC(scores[8] * 4).toString(), "이니시"], [getABC(scores[9] * 4).toString(), "생존"]],
        datasets: [
            {
                fill: true,
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                data: [scores[5] * 4, scores[6] * 4, scores[7] * 4, scores[8] * 4, scores[9] * 4]
            }
        ]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true,
        scale: {
            pointLabels: {
                display: true,
                fontSize: 12
            },

            angleLines: {
                display: false
            },
            ticks: {
                beginAtZero: true,
                max: 5,
                stepSize: 1,
                display: false
            }
        },
        legend: {
            display: false
        },
        plugins: {

            legend: {
                display: false
            }
        }
    }
});




//var context = document.getElementById('midChart').getContext('2d');
//max = Math.max(scores[10], scores[11], scores[12], scores[13], scores[14]);
//min = Math.min(scores[10], scores[11], scores[12], scores[13], scores[14]);

new Chart('midChart', {
    type: 'radar',
    data: {
        labels: [[getABC(scores[10] * 4).toString(), "한타"], [getABC(scores[11] * 4).toString(), "시야"], [getABC(scores[12] * 4).toString(), "라인전"], [getABC(scores[13] * 4).toString(), "이니시"], [getABC(scores[14] * 4).toString(), "생존"]],
        datasets: [
            {
                fill: true,
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                data: [scores[10] * 4, scores[11] * 4, scores[12] * 4, scores[13] * 4, scores[14] * 4]
            }
        ]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true,
        scale: {
            pointLabels: {
                display: true,
                fontSize: 12
            },

            angleLines: {
                display: false
            },
            ticks: {
                beginAtZero: true,
                max: 5,
                stepSize: 1,
                display: false
            }
        },
        legend: {
            display: false
        },
        plugins: {

            legend: {
                display: false
            }
        }
    }
});



//context = document.getElementById('onedealChart').getContext('2d');
//max = Math.max(scores[15], scores[16], scores[17], scores[18], scores[19]);
//min = Math.min(scores[15], scores[16], scores[17], scores[18], scores[19]);

//if (onedealChart !== null || onedealChart !== undefined) {
//    onedealChart.destroy();
//}

new Chart('onedealChart', {
    type: 'radar',
    data: {
        labels: [[getABC(scores[15] * 4).toString(), "한타"], [getABC(scores[16] * 4).toString(), "시야"], [getABC(scores[17] * 4).toString(), "라인전"], [getABC(scores[18] * 4).toString(), "이니시"], [getABC(scores[19] * 4).toString(), "생존"]],
        datasets: [
            {
                fill: true,
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                data: [scores[15] * 4, scores[16] * 4, scores[17] * 4, scores[18] * 4, scores[19] * 4]
            }
        ]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true,
        scale: {
            pointLabels: {
                display: true,
                fontSize: 12
            },

            angleLines: {
                display: false
            },
            ticks: {
                beginAtZero: true,
                max: 5,
                stepSize: 1,
                display: false
            }
        },
        legend: {
            display: false
        },
        plugins: {

            legend: {
                display: false
            }
        }
    }
});



//context = document.getElementById('supporterChart').getContext('2d');
//max = Math.max(scores[20], scores[21], scores[22], scores[23], scores[24]);
//min = Math.min(scores[20], scores[21], scores[22], scores[23], scores[24]);

new Chart('supporterChart', {
    type: 'radar',
    data: {
        labels: [[getABC(scores[20] * 4).toString(), "한타"], [getABC(scores[21] * 4).toString(), "시야"], [getABC(scores[22] * 4).toString(), "라인전"], [getABC(scores[23] * 4).toString(), "이니시"], [getABC(scores[24] * 4).toString(), "생존"]],
        datasets: [
            {
                fill: true,
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                data: [scores[20] * 4, scores[21] * 4, scores[22] * 4, scores[23] * 4, scores[24] * 4]
            }
        ]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true,
        scale: {
            pointLabels: {
                display: true,
                fontSize: 12
            },

            angleLines: {
                display: false
            },
            ticks: {
                beginAtZero: true,
                max: 5,
                stepSize: 1,
                display: false
            }
        },
        legend: {
            display: false
        },
        plugins: {

            legend: {
                display: false
            }
        }
    }
});