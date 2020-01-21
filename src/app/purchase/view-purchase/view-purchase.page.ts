import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.page.html',
  styleUrls: ['./view-purchase.page.scss'],
})
export class ViewPurchasePage implements OnInit {
  orderData;
  constructor(private route:ActivatedRoute, private router: Router, private _serv: DataService, private alert: AlertService) {
    this.route.data.subscribe(data => {
      this.orderData = data['order'];
    })
   }

  ngOnInit() {
  }

}
