import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dashStat;
  targetReached = 0;
  @ViewChild("doughnutCanvas", {static:true}) doughnutCanvas: ElementRef;
  private doughnutChart: Chart;
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(response => {
      this.dashStat = response.stat;
      
      this.targetReached = (this.dashStat.target.collectionTarget == 0)?100:(this.dashStat.target.collectionTargetReached * 100 )/this.dashStat.target.collectionTarget;
      console.log(this.targetReached);
    })
  }

  ngOnInit() {
    // this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
    //   type: "doughnut",
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [
    //       {
    //         label: "# of Votes",
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           "rgba(255, 99, 132, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 0.2)",
    //           "rgba(255, 159, 64, 0.2)"
    //         ],
    //         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
    //       }
    //     ]
    //   }
    // });
  }

}
