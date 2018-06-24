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
  templateUrl: 'gas.component.html'
})
export class GasComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;
  //modalRef: BsModalRef;

  myData: any;
  gs: any;
  gsDashboard: any;
  gsMeters: any;
  gsCalc: any;
  chart = [];
  
  constructor(private router: Router, private http: HttpClient, private _gsheet: GSheetService) {
  }

  public brandPrimary = '#008FE0';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#00a3e4';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  // convert Hex to RGBA
  public convertHex(hex: string, opacity: number) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
    return rgba;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // mainChart2
  public mainChart2Elements = 12;
  public mainChart2Data1: Array<number> = [];
  public mainChart2Data3: Array<number> = [];

  public mainChart2Data: Array<any> = [
    {
      data: this.mainChart2Data1,
      label: 'Current'
    },
    {
      data: this.mainChart2Data3,
      label: 'Target'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  /* tslint:enable:max-line-length */
  public mainChart2Options: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
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
      display: true
    }
  };
  public mainChart2Colours: Array<any> = [
    { // brandInfo
      backgroundColor: this.convertHex(this.brandSuccess, 10),
      borderColor: this.brandSuccess,
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: this.brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChart2Legend = false;
  public mainChart2Type = 'line';

  public barChartData:Array<any> = [
		{data: [40, 30, 25, 25, 23, 15, 12, 11, 9, 9, 8.85, 8], label: 'Building A'}
	];
	public barChartLabels:Array<any> = ['Boatwright', 'Booker Hall', 'Burnet Hall', 'Cannon Memorial Chapel', 'Dennis Hall', 'Freeman Hall', 'Lora Robins Court', 'North Court', 'School of Law', 'Steam Plant', 'Whitehurst', 'Vineyards'];
	public barChartOptions:any = {
		responsive: true
	};
	public barChartColors:Array<any> = [
		{ // building
			backgroundColor: 'rgba(77,189,116,0.5)',
			borderColor: 'rgba(77,189,116,1)',
			pointBackgroundColor: 'rgba(77,189,116,1)',
			pointBorderColor: 'rgba(255,255,255,1)',
			pointHoverBackgroundColor: 'rgba(255,255,255,1)',
			pointHoverBorderColor: 'rgba(77,189,116,0.5)'
		}
	];
	public barChartLegend:boolean = true;
	public barChartType:string = 'horizontalBar';

  dataReady: boolean = false;

  ngOnInit(): void {

    this._gsheet.gDashboard().subscribe(res => {
      this.gsDashboard = res;
    });

    this._gsheet.gSheetMetersCalc().subscribe(res => {
      this.gsCalc = res;

      this.chart = new Chart('chartUsageHistory', {
        type: 'bar',
        data: {
          labels: ["Feb18", "Jan18", "Dec17", "Nov17", "Oct17", "Sep17", "Aug17", "Jul17", "Jun17", "May17", "Apr17", "Mar17", "Feb17"],
          datasets: [
            {
              type: 'bar',
              data: [res.rows[0].usagehist0, res.rows[0].usagehist1, res.rows[0].usagehist2, res.rows[0].usagehist3, res.rows[0].usagehist4, res.rows[0].usagehist5, res.rows[0].usagehist6, res.rows[0].usagehist7, res.rows[0].usagehist8, res.rows[0].usagehist9, res.rows[0].usagehist10, res.rows[0].usagehist11, res.rows[0].usagehist12],
              borderColor: 'rgb(77,189,116)',
              borderWidth: 1,
              backgroundColor: 'rgba(77,189,116,0.5)',
              label: 'Usage History'
            },
            {
              data: [res.rows[0].usagehistavg, res.rows[0].usagehistavg, res.rows[0].usagehistavg, res.rows[0].usagehistavg, res.rows[0].usagehistavg, res.rows[0].usagehistavg, res.rows[0].usagehistavg, res.rows[0].usagehistavg, res.rows[0].usagehistavg, res.rows[0].usagehistavg, res.rows[0].usagehistavg, res.rows[0].usagehistavg, res.rows[0].usagehistavg],
              type: 'line',
              borderColor: '#e05100',
              pointBorderWidth: 0,
              pointBorderColor: 'rgba(0,0,0,0)',
              pointBackgroundColor: 'rgba(0,0,0,0)',
              borderDash: [5, 5],
              fill: false,
              borderWidth: 1,
              backgroundColor: 'rgba(0,0,0,0)',
              label: 'Usage Average'
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
                display: true
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
