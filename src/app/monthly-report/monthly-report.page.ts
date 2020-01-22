import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { DataService } from '../shared/services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-monthly-report',
  templateUrl: './monthly-report.page.html',
  styleUrls: ['./monthly-report.page.scss'],
})
export class MonthlyReportPage implements OnInit {
  targetReached=0;
  report;
  userId;
  constructor(private storage: Storage, private _serv:DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.userId;
  }
  
  
  changeDate(event){
    let date = new Date(event.target.value);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    this.storage.get('userId').then(response => {
      if(!this.userId) {
        this.userId = response;
      }
      this._serv.url="monthly-targets";
      this._serv.getByParam("user_id="+this.userId+"&month="+month+"&year="+year).subscribe(data => {
        console.log(data['data']);
        let stat = data['data'];
        if(stat.length > 0){
          this.report = stat[0];
          this.report['salesPerc'] = (parseFloat(this.report.salesTarget) > 0)?(parseFloat(this.report.salesTargetReached) * 100) / parseFloat(this.report.salesTarget):100;
          this.report['collectionPerc'] = (parseFloat(this.report.collectionTarget) > 0)?(parseFloat(this.report.collectionTargetReached) * 100) / parseFloat(this.report.collectionTarget):100;
        }
      })
    })
    
  }

}
