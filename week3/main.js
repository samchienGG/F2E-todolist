var app = new Vue({
    el: '.index',
    data: {
        filterData: ['Daily', 'Weekly', 'Monthly', 'Yearly', 'Custom'],
        filterDate: 'Daily'
    },
    methods: {
        chart: function () {
            var ctx = document.getElementById("myChart");
            var self = this;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["6JUN", "7JUN", "8JUN", "9JUN", "10JUN", "11JUN", "12JUN", "13JUN"],
                    datasets: [
                        {
                            label: 'REVENUE',
                            data: this.fakeData[0],
                            backgroundColor:
                                'rgba(0, 0, 0, 0)',
                            borderColor:
                                '#7ED321'
                            ,
                            borderWidth: 2
                        },
                        {
                            label: 'COST',
                            data:  this.fakeData[1],
                            backgroundColor:
                                'rgba(255, 99, 132, 0)'
                            ,
                            borderColor:
                                '#D0021B'
                            ,
                            borderWidth: 2
                        },
                        {
                            label: 'INCOME',
                            data:  this.fakeData[2],
                            backgroundColor:
                                'rgba(255, 99, 132, 0)'
                            ,
                            borderColor:
                                '#4A90E2'
                            ,
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    elements: {
                        line: {
                          tension: 0 
                        }
                      },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                
                }
            });
        }
    },
    mounted: function () {
        this.chart();
    },
    computed: {
        fakeData: function () {
            var priceArray = [];
            for (let n = 0; n < 3; n++) {
                var z = [];
                for (let i = 0; i < 8; i++) {
                    var fakePrice = faker.commerce.price() * 100;
                    z.push(fakePrice);
                }
                priceArray.push(z);
            }
            return priceArray;
        }
    }
})

