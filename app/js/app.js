// Site statistic chart section

let usersColor = "rgba(246, 187, 66, 0.8)";
let salesColor = "rgba(31, 181, 172, 0.8)";
let months = ['January', 'February', 'March', 'April', 'May', 'June'];
let usersData = [0, 550, 150, 300, 200, 300];
let salesData = [0, 400, 200, 300, 150, 320];

let siteStatisticChart = document.getElementById('site-statistic-сhart').getContext('2d');

let myChart = new Chart(siteStatisticChart, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'Sale',
            data: salesData,
            fill: true,
            backgroundColor: salesColor,
            borderColor: salesColor,
            borderWidth: 1,
            tension: 0.3,
            pointRadius: 0
        },
        {
            label: 'Users',
            data: usersData,
            fill: true,
            backgroundColor: usersColor,
            borderColor: usersColor,
            borderWidth: 1,
            tension: 0.3,
            pointRadius: 0
        }]
    },
    options: {
        scales: {
            y: {
                min: 0,
                max: 800,
                ticks: {
                    stepSize: 100
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
                align: 'right',
                labels: {
                    boxWidth: 12,
                    padding: 6
                }
            }
        },
        layout: {
            padding: {
                top: 10,
                right: 20,
                bottom: 10,
                left: 10
            }
        }
    }
});

// Yearly Sales chart section

let yearsData = ['2014', '2015', '2016', '2017', '2018', '2019', '2020'];
let yearSalesData = [20, 50, 30, 40, 45, 35, 50];

let yearSalesDiv = document.getElementById('yearly-sales-chart').getContext('2d');

var yearSalesChart = new Chart(yearSalesDiv, {
    type: 'line',
    data: {
        labels: yearsData,
        datasets: [{
            label: 'Yearly Sales',
            data: yearSalesData,
            fill: false,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            pointBorderColor: 'rgba(255, 255, 255, 1)',
            pointBorderWidth: 2
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    color: 'rgba(0, 0, 0, 0)',
                    drawBorder: false,
                    drawOnChartArea: true
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 1)'
                }
            },
            y: {
                min: 0,
                max: 60,
                ticks: {
                    color: 'rgba(255, 255, 255, 1)',
                    stepSize: 10
                },
                grid: {
                    color: 'rgba(0, 0, 0, 1)'
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'rgba(255, 255, 255, 1)'
                },
                display: false
            }
        },

    }
});
// Site Calendar section
let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),
    container = document.getElementsByClassName('month-calendar')[0],
    monthContainer = container.getElementsByClassName('month-name')[0],
    yearContainer = container.getElementsByClassName('year-name')[0],
    daysContainer = container.getElementsByClassName('days')[0],
    prev = container.getElementsByClassName('prev')[0],
    next = container.getElementsByClassName('next')[0],
    monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days;


let curDate = nowDate.setMonth(nowDate.getMonth() - 1);

function setMonthCalendar(year, month) {
    let monthDays = new Date(year, month + 1, 0).getDate(),
        monthPrefix = new Date(year, month, 1).getDay(),
        monthDaysText = '';

    monthContainer.textContent = monthName[month];
    yearContainer.textContent = year;
    daysContainer.innerHTML = '';

    if (monthPrefix > 0) {
        for (let i = 1; i <= monthPrefix; i++) {
            monthDaysText += '<li></li>';
        }
    }

    for (let i = 1; i <= monthDays; i++) {
        monthDaysText += '<li>' + i + '</li>';
    }

    daysContainer.innerHTML = monthDaysText;

    if (month == nowMonth && year == nowYear) {
        days = daysContainer.getElementsByTagName('li');
        days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
    }
}

setMonthCalendar(nowYear, nowMonth);

prev.onclick = function () {
    let curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() - 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear, curMonth);
}

next.onclick = function () {
    let curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() + 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear, curMonth);
}
//Collapse nav
const collapseButton = document.getElementById('collapse');
const siteStatisticChartCollapsed = document.getElementById('site-statistic-сhart');
const containerMain = document.querySelector('.container');
const sectionMain = document.querySelector('.sectionMain');
const sidebar = document.getElementById('sidebar');

collapseButton.addEventListener('click', function () {
    sidebar.classList.toggle('collapsed');
    containerMain.classList.toggle('collapsed');
    sectionMain.classList.toggle('collapsed');
    myChart.resize(620, 310);
    yearSalesChart.resize(290, 120);
    dataGraphChart.resize(240,50);
    if (sidebar.classList.contains('collapsed')) {
        yearSalesChart.options.layout.padding.bottom = 10;
        myChart.options.layout.padding.bottom = 10;
    }
    else{
        yearSalesChart.options.layout.padding.bottom = 0;
        myChart.options.layout.padding.bottom = 0;

    }
});


// ---------Data graph chart-----------

let dataGraphX = [2, 3, 5, 7, 8, 10, 11];
let dataGraphY = [1, 3, 2, 4, 3, 5, 3];
const dataGraphChartId = document.getElementById('data-graph-chart').getContext('2d');
const dataGraphChart = new Chart(dataGraphChartId, {
    type: 'line',
        data: {
            labels: dataGraphX, 
            datasets: [{
                data: dataGraphY, 
                fill: false,
                borderColor: 'white',
                borderWidth: 2,
                pointBackgroundColor: 'white',
                pointBorderColor: 'white',
                pointRadius: 5,
                pointHoverRadius: 5,
            }]
        },
        options: {
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
});


//--------data-graph-bar-chart section-------------

let graphBarX = ['1', '2', '3', '4', '5', '6', '7'];
let graphBarY = [7, 5, 6, 4, 5, 3, 2];
const graphBarId = document.getElementById('data-graph-bar-chart').getContext('2d');
const graphBarChart = new Chart(graphBarId, {
    type: 'bar',
    data: {
        labels: graphBarX,
        datasets: [{
            data: graphBarY,
            backgroundColor: 'rgba(153, 114, 181, 1)',
            borderColor: 'rgba(153, 114, 181, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                beginAtZero: true,
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});