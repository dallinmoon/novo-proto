import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GSheetService } from '../../services/gsheet.service';
import { Chart } from 'chart.js';

@Component({
  templateUrl: 'rules.component.html'
})
export class RulesComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;
  //modalRef: BsModalRef;

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

  public barChartData:Array<any> = [
		{data: [18, 15, 12, 10, 8, 5, 3], label: 'Building A'}
	];
	public barChartLabels:Array<any> = ['Santa Monica', 'Santa Clarita', 'Huntington Beach', 'Mission Viejo', 'Long Beach', 'Anaheim'];
	public barChartOptions:any = {
		responsive: true
	};
	public barChartColors:Array<any> = [
		{ // building
			backgroundColor: 'rgba(220,53,69,0.5)',
			borderColor: 'rgba(220,53,69,1)',
			pointBackgroundColor: 'rgba(220,53,69,1)',
			pointBorderColor: 'rgba(255,255,255,1)',
			pointHoverBackgroundColor: 'rgba(255,255,255,1)',
			pointHoverBorderColor: 'rgba(220,53,69,0.5)'
		}
	];
	public barChartLegend:boolean = true;
	public barChartType:string = 'horizontalBar';

  

  dataReady: boolean = false;

  ngOnInit(): void {

    this.chart = new Chart('chartUsageHistory', {
      type: 'bar',
      data: {
        labels: ["Feb18", "Jan18", "Dec17", "Nov17", "Oct17", "Sep17", "Aug17", "Jul17", "Jun17", "May17", "Apr17", "Mar17", "Feb17"],
        datasets: [
          {
            type: 'bar',
            data: [1,2,3,4,5,6,7,8,9,10,11,12],
            borderColor: 'rgb(220,53,69)',
            borderWidth: 1,
            backgroundColor: 'rgba(220,53,69,0.5)',
            label: 'Usage History'
          },
          {
            data: [1,2,3,4,5,6,7,8,9,10,11,12],
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

  }


}
