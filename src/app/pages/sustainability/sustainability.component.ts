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
  templateUrl: 'sustainability.component.html'
})
export class SustainabilityComponent implements OnInit {

  myData: any;
  gs: any;
  gsDashboard: any;
  gsMeters: any;
  gsCalc: any;
  chart = [];

  constructor(private router: Router, private http: HttpClient, private _gsheet: GSheetService) {
  }

  // social box charts

  /*public socialChartData1: Array<any> = [
    {
      data: [65, 59, 55, 55, 53, 55, 50],
      label: 'CO2e'
    }
  ];
  public socialChartData2: Array<any> = [
    {
      data: [500, 525, 475, 450, 440, 450, 425],
      label: 'Gallons'
    }
  ];
  public socialChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'LinkedIn'
    }
  ];
  public socialChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];

  public socialChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public socialChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public socialChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public socialChartLegend = false;
  public socialChartType = 'line';*/

  dataReady: boolean = false;

  ngOnInit(): void {

    this._gsheet.gDashboard().subscribe(res => {
      this.gsDashboard = res;
    });

    this._gsheet.gSheetMetersCalc().subscribe(res => {
      this.gsCalc = res;

      this.chart = new Chart('energyTrend', {
        type: 'line',
        data: {
          labels: ["Feb18", "Jan18", "Dec17", "Nov17", "Oct17", "Sep17", "Aug17", "Jul17", "Jun17", "May17", "Apr17", "Mar17", "Feb17"],
          datasets: [
            {
              type: 'line',
              data: [res.rows[0].usagehist0, res.rows[0].usagehist1, res.rows[0].usagehist2, res.rows[0].usagehist3, res.rows[0].usagehist4, res.rows[0].usagehist5, res.rows[0].usagehist6, res.rows[0].usagehist7, res.rows[0].usagehist8, res.rows[0].usagehist9, res.rows[0].usagehist10, res.rows[0].usagehist11, res.rows[0].usagehist12],
              borderColor: 'rgba(220,53,69,1)',
              borderWidth: 1,
              backgroundColor: 'rgba(220,53,69,0.5)',
              label: 'Energy Trend'
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: true,
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
                display: false
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      })

      this.chart = new Chart('materialDiversion', {
        type: 'bar',
        data: {
          labels: ["Feb18", "Jan18", "Dec17", "Nov17", "Oct17", "Sep17", "Aug17", "Jul17", "Jun17", "May17", "Apr17", "Mar17", "Feb17"],
          datasets: [
            {
              type: 'bar',
              data: [10, 7, 8, 9, 10, 11, 12, 11, 12, 14, 17, 17, 20],
              borderColor: 'rgba(0,143,224,1)',
              borderWidth: 1,
              backgroundColor: 'rgba(0,143,224,0.5)',
              label: '% Material Diversion'
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: true,
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
                display: false
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      })

    });

    this._gsheet.gSheet1()
      .subscribe(res => {
        this.gs = res;
        this.dataReady = true;        
      })

  }

}
