import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  // constructor( ) { }

  public brandPrimary = '#008FE0';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#00a3e4';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  // dropdown buttons
  public status: { isopen } = { isopen: false };
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

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

  // mainChart1

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public mainChart1Elements = 12;
  public mainChart1Data1: Array<number> = [];
  public mainChart1Data3: Array<number> = [];

  public mainChart1Data: Array<any> = [
    {
      data: this.mainChart1Data1,
      label: 'Current'
    },
    {
      data: this.mainChart1Data3,
      label: 'Target'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  /* tslint:enable:max-line-length */
  public mainChart1Options: any = {
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
  public mainChart1Colours: Array<any> = [
    { // brandInfo
      backgroundColor: this.convertHex(this.brandInfo, 10),
      borderColor: this.brandInfo,
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
  public mainChart1Legend = false;
  public mainChart1Type = 'bar';

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
      backgroundColor: this.convertHex(this.brandInfo, 10),
      borderColor: this.brandInfo,
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
			backgroundColor: 'rgba(0,143,224,0.5)',
			borderColor: 'rgba(0,143,224,1)',
			pointBackgroundColor: 'rgba(0,143,224,1)',
			pointBorderColor: 'rgba(255,255,255,1)',
			pointHoverBackgroundColor: 'rgba(255,255,255,1)',
			pointHoverBorderColor: 'rgba(0,143,224,0.5)'
		}
	];
	public barChartLegend:boolean = true;
	public barChartType:string = 'horizontalBar';


  ngOnInit(): void {
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChart1Elements; i++) {
      this.mainChart1Data1.push(this.random(50, 200));
      this.mainChart1Data3.push(125);
    }

    for (let i = 0; i <= this.mainChart1Elements; i++) {
      this.mainChart2Data1.push(this.random(50, 200));
      this.mainChart2Data3.push(125);
    }
  }
}
