import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.page.html',
  styleUrls: ['./vendor-list.page.scss'],
})
export class VendorListPage implements OnInit {
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
    console.log(value);
    
    return this.vendorList.filter(vendor => (vendor.firstName + " " + ((vendor.lastName)?vendor.lastName:"")).toLowerCase().includes(value.toLowerCase()));
  }

}
