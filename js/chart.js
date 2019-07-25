var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
        datasets: [{
            label: 'Grafik Order Project',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//myDoughnut

var ctx = document.getElementById('myDoughnut');
var myDoughnut = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Angular', 'Vue', 'React', 'Laravel'],
        datasets: [{
            label: 'Grafik Visited',
            data: [12, 19, 3, 5],
            backgroundColor: [
                '#C30E2E',
                '#41B883',
                '#06C7EA',
                '#F9503B'
            ],
            borderColor: [
                '#C30E2E',
                '#41B883',
                '#06C7EA',
                '#F9503B'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//myBarChart 

var ctx = document.getElementById('myBarChart ');
var myBarChart  = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Schmidt Ltd', 'Nienow PLC', 'Breitenberg Group', 'Abbott Ltd'],
        datasets: [{
            label: 'Number of users company',
            data: [70, 50, 50, 45],
            backgroundColor: [
                '#CE93D8',
                '#4884EE',
                '#5DE6DE',
                '#fff'
            ],
            borderColor: [
                '#CE93D8',
                '#4884EE',
                '#5DE6DE',
                '#fff'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
        }
    }
});
