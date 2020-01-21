import { Component, OnInit, ViewChildren } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.page.html',
  styleUrls: ['./expense-list.page.scss'],
})
export class ExpenseListPage implements OnInit {
  @ViewChildren('expenseListLoader') expenseListLoader: IonInfiniteScroll;
  expenseList=[];
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

  loadData(event=null) {
    this.page++;
    this._serv.url="expenses?searchText="+this.searchBar.value+"&pageNumber="+this.page;
    this._serv.get().subscribe(response => {
      this.paginationData = response;
      this.expenseList = [...this.expenseList, ...response['data']];
      if(event != null)
        event.target.complete();
      if(event!=null && (this.paginationData.to == this.paginationData.total || this.paginationData.total < this.paginationData.per_page)){
        event.target.disabled = true;
      }
    })
  }

  filterData() {
    this.page=0;
    this.expenseList=[];
    this.loadData();
  }

}


