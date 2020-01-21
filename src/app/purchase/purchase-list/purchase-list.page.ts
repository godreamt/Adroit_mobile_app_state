import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/shared/services/data.service';
import { startWith, map } from 'rxjs/operators';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.page.html',
  styleUrls: ['./purchase-list.page.scss'],
})
export class PurchaseListPage implements OnInit {
  @ViewChildren('purchaseList') purchaseList: IonInfiniteScroll;
  orderList=[];
  paginationData;
  searchBar = new FormControl('');
  imgUrl=environment.imageUrl;
  page=0;
  constructor(public _serv: DataService) { 
    
  }

  ngOnInit() {
    this.loadData();
    this.searchBar.valueChanges.subscribe(response => {
      this.filterData();
    })
  }

  // getVendorList() {
  //   this._serv.url = "active-vendor-list";
  //   this._serv.get().subscribe(response => {
  //     this.vendorList = response;
  //     this.filteredVendorList = of([...this.vendorList] as any[]);
  //     this.filteredVendorList = this.searchBar.valueChanges.pipe(
  //       startWith(''),
  //       map(value => value ? this.filterResult(value) : this.vendorList)
  //     )
  //   })
  // }

  // filterResult(value) {
  //   console.log(value);
    
  //   return this.vendorList.filter(vendor => (vendor.firstName + " " + ((vendor.lastName)?vendor.lastName:"")).toLowerCase().includes(value.toLowerCase()));
  // }

  loadData(event=null) {
    this.page++;
    this._serv.url="orders?searchText="+this.searchBar.value+"&pageNumber="+this.page;
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


