import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/Classes/Client';
import { ClientService } from 'src/Servises/client.service';
import { SickService } from 'src/Servises/sick.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private clientService:ClientService,
    private myRouter:Router,
    private sickService:SickService) { }

  listClients:Client[]=[]
  succesDelete:boolean = false;
  listCountSick!:number[]
  month:number = new Date().getMonth();


  ngOnInit(): void {
    this.GetAllClients()
    console.log(this.listClients)
    this.GetCountSick();
    this.CountNotVaccin();
  }

  GetAllClients()
  {
    this.clientService.GetListClients().subscribe((data:Client[])=>
    {
      this.listClients = data;
      console.log(data);
      console.log(this.listClients)
      this.clientService.clientList = this.listClients;
    }

    )
  }

  Details(id:number)
  {
    this.myRouter.navigate(['/'+id]);
  }

  DeleteClient(identityClient:string){
    this.clientService.DeleteClient(identityClient).subscribe(data=>
      {
        this.succesDelete = data;
        alert("Customer successfully Deleted")
        this.ngOnInit();
      })
      
  }

  UpdateClient(updateClient:Client)
  {
    console.log(updateClient)
    this.clientService.clientUpdate = updateClient;
    this.myRouter.navigate(['/Update-Client']);
  }

  GetCountSick()
  {
    this.sickService.GetCountSick().subscribe(data=>
      {
        this.listCountSick = data;
        console.log(this.listCountSick);
      })
  }

  countNotVaccin!:number

  CountNotVaccin()
  {
    this.clientService.CountNotVaccin().subscribe(data=>
      {
         this.countNotVaccin= data;
        console.log(this.listCountSick);
      })
  }

// GetGrafh(){
//   var lineChartData = {
//     labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
//     datasets: [{
//         fillColor: "rgba(220,220,220,0)",
//         strokeColor: "rgba(220,180,0,1)",
//         pointColor: "rgba(220,180,0,1)",
//         data: [20, 30, 80, 20, 40, 10, 60]
//     }, {
//         fillColor: "rgba(151,187,205,0)",
//         strokeColor: "rgba(151,187,205,1)",
//         pointColor: "rgba(151,187,205,1)",
//         data: [60, 10, 40, 30, 80, 30, 20]
//     }]

// }

// Chart.defaults.global.animationSteps = 50;
// Chart.defaults.global.tooltipYPadding = 16;
// Chart.defaults.global.tooltipCornerRadius = 0;
// Chart.defaults.global.tooltipTitleFontStyle = "normal";
// Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
// Chart.defaults.global.animationEasing = "easeOutBounce";
// Chart.defaults.global.responsive = true;
// Chart.defaults.global.scaleLineColor = "black";
// Chart.defaults.global.scaleFontSize = 16;

//var ctx = document.getElementById("canvas").getContext("2d");
// var LineChartDemo = new Chart(ctx).Line(lineChartData, {
//     pointDotRadius: 10,
//     bezierCurve: false,
//     scaleShowVerticalLines: false,
//     scaleGridLineColor: "black"
// });
//}
}