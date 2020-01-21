import { Component, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-my-vendors',
  templateUrl: './view-my-vendors.page.html',
  styleUrls: ['./view-my-vendors.page.scss'],
})
export class ViewMyVendorsPage implements OnInit {
  vendorData;
  @ViewChildren('purchaseList') purchaseList: IonInfiniteScroll;
  orderList=[];
  paginationData;
  searchBar = new FormControl('');
  imgUrl=environment.imageUrl;
  page=0;
  constructor(private route: ActivatedRoute, private router: Router, private _serv:DataService) { 
    this.route.data.subscribe(data => {
      this.vendorData = data['vendor'];
    })
  }

  ngOnInit() {
    this.loadData();
    this.searchBar.valueChanges.subscribe(response => {
      this.filterData();
    })
  }

  loadData(event=null) {
    this.page++;
    this._serv.url="orders?searchText="+this.searchBar.value+"&pageNumber="+this.page+"&vendor_id="+this.vendorData.id;
    this._serv.get().subscribe(response => {
      this.paginationData = response;
      this.orderList = [...this.orderList, ...response['data']];
      if(event != null)
        event.target.complete();
      if(event!=null && (this.paginationData.to == this.paginationData.total || this.paginationData.total < this.paginationData.per_page)){
        event.target.disabled = true;
      }
    })
  }

  filterData() {
    this.page=0;
    this.orderList=[];
    this.loadData();
  }

}
