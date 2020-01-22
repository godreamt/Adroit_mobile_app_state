import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataService } from '../shared/services/data.service';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-under-users',
  templateUrl: './under-users.page.html',
  styleUrls: ['./under-users.page.scss'],
})
export class UnderUsersPage implements OnInit {
  userList;
  filteredUserList: Observable<any[]>;
  searchBar = new FormControl('');
  imgUrl=environment.imageUrl;
  constructor(public _serv: DataService) { 
    
  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this._serv.url = "users/no-pagination";
    this._serv.get().subscribe(response => {
      this.userList = response;
      this.filteredUserList = of([...this.userList] as any[]);
      this.filteredUserList = this.searchBar.valueChanges.pipe(
        startWith(''),
        map(value => value ? this.filterResult(value) : this.userList)
      )
    })
  }

  filterResult(value) {
    return this.userList.filter(vendor => (vendor.firstName + " " + ((vendor.lastName)?vendor.lastName:"")).toLowerCase().includes(value.toLowerCase()));
  }

}
