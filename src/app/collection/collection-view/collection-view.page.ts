import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-collection-view',
  templateUrl: './collection-view.page.html',
  styleUrls: ['./collection-view.page.scss'],
})
export class CollectionViewPage implements OnInit {
  collectionId;
  collectionData;
  vendorData;
  collectedUserData;
  orderDetails;

  constructor(private _serv: DataService, private fb: FormBuilder, private route: ActivatedRoute, private alert: AlertService, private router: Router) {
    this.collectionId = this.route.snapshot.params.id;
    this.route.data.subscribe(response => {
      this.collectionData = response.collection;
      this.getVendorDetails()
      this.getCollectionUserData();
      this.getOrderDetails();

    })
    // this.getCollectionDetails();
  }
  ngOnInit() {
  }

  getCollectionDetails() {
    this._serv.url="collection/"+this.collectionId;
    this._serv.get().subscribe(response => {
      this.collectionData = response;
      this.getVendorDetails()
      this.getCollectionUserData();
      this.getOrderDetails();
    })
  }

  getOrderDetails() {
    this._serv.url="order/"+this.collectionData.order_id;
    this._serv.get().subscribe(response => {
      this.orderDetails = response;
    })
  }

  getVendorDetails() {
    this._serv.url="user/"+this.collectionData.vendor_id;
    this._serv.get().subscribe(response => {
      this.vendorData = response;
    })
  }

  getCollectionUserData() {
    this._serv.url="user/"+this.collectionData.collect_by;
    this._serv.get().subscribe(response => {
      this.collectedUserData = response;
    })
  }
}
