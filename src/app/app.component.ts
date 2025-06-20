import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ChartsService } from './charts.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ChartsProject';
  charts:[]=[];
  labels:any=[];
  population:any=[];
// barChart varaiables
  info:any=[];
  laabels:any=[];
  visits:any=[];
//pieChart variables



   public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
    ],
    datasets: [
      {
        data: [ ],
        label: '',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  
  constructor(private service:ChartsService) {

    //Line Chart code

    this.service.getData().subscribe((data)=>{
      console.log(data);
      this.charts=data.data;
      console.log(this.charts);

    this.labels=this.charts.map((value:any)=>{return value.Year })    
    this.population=this.charts.map((value:any)=>{return value.Population })

    this.lineChartData= {
    labels: this.labels,
    datasets: [
      {
        data: this.population,
        label: 'Population',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };

    })

//Bar Chart code

    this.service.getInfo().subscribe((data)=>{
      console.log(data);
      this.info=data;
      this.laabels=this.info.map((value:any)=>{return value.country})
      this.visits=this.info.map((value:any)=>{return value.visits})
      console.log(this.visits);
     
    this.barChartData={
        labels: this.laabels,
    datasets: [{ data:this.visits, label: 'People' }, ]
    }
    
//PieChart code

     this.pieChartLabels =  this.laabels
  
     this.pieChartDatasets = [ {
    data: this.visits
  } ];

  console.log(this.pieChartLabels,this.pieChartDatasets,'sdvxsvszxsvzxs');
    
    })
  }

//BarChart outside code

 public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ ],
    datasets: [
      { data: [ ], label: '' },
      { data: [ ], label: '' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

//pieChart outside code

 public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [  ];
  public pieChartDatasets = [ {
    data: [ ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

}
