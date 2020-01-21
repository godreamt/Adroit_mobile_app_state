import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/shared/services/data.service';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-my-vendors',
  templateUrl: './my-vendors.page.html',
  styleUrls: ['./my-vendors.page.scss'],
})
export class MyVendorsPage implements OnInit {
  vendorList;
  filteredVendorList: Observable<any[]>;
  searchBar = new FormControl('');
  imgUrl=environment.imageUrl;
  constructor(public _serv: DataService) { 
    
  }

  ngOnInit() {
    this.getVendorList();
  }

  getVendorList() {
    this._serv.url = "active-vendor-list";
    this._serv.get().subscribe(response => {
      this.vendorList = response;
      this.filteredVendorList = of([...this.vendorList] as any[]);
      this.filteredVendorList = this.searchBar.valueChanges.pipe(
        startWith(''),
        map(value => value ? this.filterResult(value) : this.vendorList)
      )
    })
  }

  filterResult(value) {
    return this.vendorList.filter(vendor => (vendor.firstName + " " + ((vendor.lastName)?vendor.lastName:"")).toLowerCase().includes(value.toLowerCase()));
  }

}
