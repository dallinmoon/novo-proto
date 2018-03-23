import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GSheetService } from '../../services/gsheet.service';
import { Chart } from 'chart.js';

declare var Plotly: any;

interface DataResponse {
  rows: any;
  site: string;
  address: string;
  usage1: string;
}

@Component({
  templateUrl: 'utility.component.html'
})
export class UtilityComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;
  //modalRef: BsModalRef;

  myData: any;
  gs: any;
  gsSiteInfo: any;
  gsMeters: any;
  gsCalc: any;
  chart = [];
  
  constructor(private router: Router, private http: HttpClient, private _gsheet: GSheetService) {
  }

  dataReady: boolean = false;

  ngOnInit(): void {

    this._gsheet.gSheetSiteInfo().subscribe(res => {
      this.gsSiteInfo = res;
    });

    this._gsheet.gSheetMetersCalc().subscribe(res => {
      this.gsCalc = res;

      this.chart = new Chart('chartPeak', {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              res.rows[0].onpeakusage,
              res.rows[0].offpeakusage
            ],
            backgroundColor: [
              '#008FE0',
              '#CCCCCC'
            ],
            label: 'Dataset 1'
          }],
          labels: [
            'On Peak',
            'Off Peak'
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      })

      this.chart = new Chart('chartMisc', {
        type: 'pie',
        data: {
          datasets: [{
            data: [
              res.rows[0].tax,
              res.rows[0].riders,
              res.rows[0].fuel,
              res.rows[0].distfacchg,
              res.rows[0].other
            ],
            backgroundColor: [
              '#008FE0',
              '#e05100',
              '#e0c100',
              '#ff701f',
              '#701fff'
            ],
            label: 'Dataset 1'
          }],
          labels: [
            'Tax',
            'Riders',
            'Fuel',
            'Dist Fac Chg',
            'Other'
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      })

      this.chart = new Chart('projectedBudget', {
        type: 'bar',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23", "Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30"],
          datasets: [
            {
              type: 'bar',
              data: [1500, -500, 1000, 500, 2473],
              borderColor: '#008FE0',
              borderWidth: 1,
              backgroundColor: 'rgba(0,143,224,0.5)',
              label: 'Over/Under Daily Budget'
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: false,
            text: 'Usage',
            position: 'top'
          },
          title: {
            display: false,
            text: 'Usage History'
          },
          scales: {
            xAxes: [
              {
                display: false,
                gridLines: {
                  display:false
                }
              }
            ],
            yAxes: [
              {
                display: true,
                gridLines: {
                  display:true,
                  color: "rgba(255,255,255,0)",
                  zeroLineColor: "rgb(225,225,225)"
                }
              }
            ]
          }
        }
      })

      this.chart = new Chart('projectedUsage', {
        type: 'bar',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23", "Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30"],
          datasets: [
            {
              type: 'bar',
              data: [-2500, 500, -3000, -3685, 500 ],
              borderColor: '#008FE0',
              borderWidth: 1,
              backgroundColor: 'rgba(0,143,224,0.5)',
              label: 'Over/Under Daily Budget'
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: false,
            text: 'Usage',
            position: 'top'
          },
          title: {
            display: false,
            text: 'Usage History'
          },
          scales: {
            xAxes: [
              {
                display: false,
                gridLines: {
                  display:false
                }
              }
            ],
            yAxes: [
              {
                display: true,
                gridLines: {
                  display:true,
                  color: "rgba(255,255,255,0)",
                  zeroLineColor: "rgb(225,225,225)"
                }
              }
            ]
          }
        }
      })

      this.chart = new Chart('budgetProjection', {
        type: 'bar',
        data: {
          labels: ["Feb", "Mar", "Apr"],
          datasets: [
            {
              type: 'bar',
              data: [250000, 275000, 254000],
              borderColor: '#AAAAAA',
              borderWidth: 1,
              backgroundColor: 'rgba(0,0,0,0.2)',
              label: '2017'
            },
            {
              type: 'bar',
              data: [275000, 300000, 280000],
              borderColor: '#4dbd74',
              borderWidth: 1,
              backgroundColor: 'rgba(77,189,116,0.5)',
              label: '2018'
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: true,
            position: "top"
          },
          title: {
            display: false,
            text: 'Usage History'
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  min: 0
                }
              }
            ]
          }
        }
      })

      this.chart = new Chart('consumptionProjection', {
        type: 'bar',
        data: {
          labels: ["Feb", "Mar", "Apr"],
          datasets: [
            {
              type: 'bar',
              data: [2750000, 3000000, 2800000],
              borderColor: '#AAAAAA',
              borderWidth: 1,
              backgroundColor: 'rgba(0,0,0,0.2)',
              label: '2017'
            },
            {
              type: 'bar',
              data: [2500000, 2750000, 2540000],
              borderColor: '#f57f01',
              borderWidth: 1,
              backgroundColor: 'rgba(245,127,1,0.5)',
              label: '2018'
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: true,
            position: "top"
          },
          title: {
            display: false,
            text: 'Usage History'
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  min: 0
                }
              }
            ]
          }
        }
      })

      /*var timeFormat = 'MM/DD/YYYY HH:mm';

      this.chart = new Chart('timeSeries1', {
        type: 'line',
        data: {
          labels: ["03/18/2018 0:00", "03/18/2018 8:03", "03/18/2018 10:33", "03/18/2018 12:15", "03/18/2018 14:08", "03/18/2018 18:30", "03/18/2018 20:39", "03/18/2018 23:59"],
          datasets: [
            {
              type: 'line',
              steppedLine: true,
              data: [0, 1, 0, 1, 0, 1, 0, 0],
              borderColor: '#008FE0',
              pointBorderWidth: "0",
              pointBackgroundColor: "rgba(0,0,0,0)",
              pointBorderColor: "rgba(0,0,0,0)",
              borderWidth: 1,
              backgroundColor: 'rgba(0,143,224,0.5)',
              label: 'Equipment Enabled'
            }
          ]
        },
        options: {
          title: {
            text: 'Chart.js Combo Time Scale'
          },
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          tooltip: {
            enabled: false
          },
          scales: {
            xAxes: [{
              type: 'time',
              display: true,
              ticks: {
                maxRotation: 0
              },
              time: {
                format: timeFormat,
                unit: 'hour'
              }
            }],
            yAxes: [{
              display: false
            }]
          },
        }
      })

      this.chart = new Chart('timeSeries2', {
        type: 'line',
        data: {
          labels: ["03/18/2018 0:00", "03/18/2018 4:03", "03/18/2018 8:53", "03/18/2018 9:15", "03/18/2018 12:18", "03/18/2018 14:30", "03/18/2018 15:15", "03/18/2018 18:45", "03/18/2018 22:15", "03/18/2018 23:59"],
          datasets: [
            {
              type: 'line',
              steppedLine: true,
              data: [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
              borderColor: '#008FE0',
              pointBorderWidth: "0",
              pointBackgroundColor: "rgba(0,0,0,0)",
              pointBorderColor: "rgba(0,0,0,0)",
              borderWidth: 1,
              backgroundColor: 'rgba(0,143,224,0.5)',
              label: 'Equipment Enabled'
            }
          ]
        },
        options: {
          title: {
            text: 'Chart.js Combo Time Scale'
          },
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          tooltip: {
            enabled: false
          },
          scales: {
            xAxes: [{
              type: 'time',
              display: true,
              ticks: {
                maxRotation: 0
              },
              time: {
                format: timeFormat,
                unit: 'hour'
              }
            }],
            yAxes: [{
              display: false
            }]
          },
        }
      })*/

    });

    this._gsheet.gSheet1()
      .subscribe(res => {
        this.gs = res;
        this.dataReady = true;
        console.log(this.dataReady);

        let usage1 = res.rows[0].usage1;
        let usage2 = res.rows[0].usage2;
        let usage3 = res.rows[0].usage3;
        let usage4 = res.rows[0].usage4;
        let usage5 = res.rows[0].usage5;
        let usage6 = res.rows[0].usage6;
        let usage7 = res.rows[0].usage7;
        let usage8 = res.rows[0].usage8;
        let usage9 = res.rows[0].usage9;
        let usage10 = res.rows[0].usage10;
        let usage11 = res.rows[0].usage11;
        let usage12 = res.rows[0].usage12;
        let usage1month = res.rows[1].usage1;
        let usage2month = res.rows[1].usage2;
        let usage3month = res.rows[1].usage3;
        let usage4month = res.rows[1].usage4;
        let usage5month = res.rows[1].usage5;
        let usage6month = res.rows[1].usage6;
        let usage7month = res.rows[1].usage7;
        let usage8month = res.rows[1].usage8;
        let usage9month = res.rows[1].usage9;
        let usage10month = res.rows[1].usage10;
        let usage11month = res.rows[1].usage11;
        let usage12month = res.rows[1].usage12;
        let usageAvg = res.rows[0].usageavg;
        let offPkUsageCurrent = res.rows[0].offpkusagecurrent;
        let onPkUsageCurrent = res.rows[0].onpkusagecurrent;
        let miscTax = res.rows[0].misctax;
        let miscLate = res.rows[0].misclate;
        let miscOther = res.rows[0].miscother;

      })

  }

  lineChart(){
    //console.log(usage1);

    const element = this.el.nativeElement;

    const chartData = [{
      x: [1,2,3,4,5,6],
      y: [1,2,3,4,5,6]
    }]

    const style = {
      margin: { t: 0 }
    }

    Plotly.plot( element, chartData, style )
  }


}
