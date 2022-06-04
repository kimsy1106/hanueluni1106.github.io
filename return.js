var scores = document.getElementById('scores').innerHTML.split(' ');
//context = document.getElementById('topChart').getContext('2d');
//var max = Math.max(scores[0], scores[1], scores[2], scores[3], scores[4]);
//var min = Math.min(scores[0], scores[1], scores[2], scores[3], scores[4]);

new Chart('topChart', {
    type: 'radar',
    data: {
        labels: ["한타", "시야", "라인전", "이니시", "생존"],
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
        responsive: true,
        maintainAspectRatio: false,
        scales: {



            pointLabels: {
                display: true // Hides the labels around the radar chart 
            },
            r: {
                min: -1,
                max: 4,
                beginAtZero: true,
                angleLines: {
                    display: false
                },
                ticks: {
                    display: false,
                    stepSize: 1,

                }
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
        labels: ["한타", "시야", "라인전", "이니시", "생존"],
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
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {

                pointLabels: {
                    display: true // Hides the labels around the radar chart 
                },
                ticks: {
                    display: false, // Hides the labels in the middel (numbers)
                    beginAtZero: true,
                    max: 4,
                    min: 0,
                    stepSize: 1
                }
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
        labels: ["한타", "시야", "라인전", "이니시", "생존"],
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
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {

                pointLabels: {
                    display: true // Hides the labels around the radar chart 
                },
                ticks: {
                    display: false, // Hides the labels in the middel (numbers)
                    beginAtZero: true,
                    max: 4,
                    min: 0,
                    stepSize: 1
                }
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
        labels: ["한타", "시야", "라인전", "이니시", "생존"],
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
        responsive: true,
        maintainAspectRatio: false,
        scales: {

            pointLabels: {
                display: true // Hides the labels around the radar chart 
            },
            ticks: {
                display: false, // Hides the labels in the middel (numbers)
                beginAtZero: true,
                max: 4,
                min: 0,
                stepSize: 1
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
        labels: ["한타", "시야", "라인전", "이니시", "생존"],
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
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {

                pointLabels: {
                    display: true // Hides the labels around the radar chart 
                },
                ticks: {
                    display: false, // Hides the labels in the middel (numbers)
                    beginAtZero: true,
                    max: 4,
                    min: 0,
                    stepSize: 1
                }
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