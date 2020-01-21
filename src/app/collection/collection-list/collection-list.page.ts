import { Component, OnInit, ViewChildren } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.page.html',
  styleUrls: ['./collection-list.page.scss'],
})
export class CollectionListPage implements OnInit {
  @ViewChildren('collectionListLoader') collectionListLoader: IonInfiniteScroll;
  collectionList=[];
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
    this._serv.url="collections?searchText="+this.searchBar.value+"&pageNumber="+this.page;
    this._serv.get().subscribe(response => {
      this.paginationData = response;
      this.collectionList = [...this.collectionList, ...response['data']];
      if(event != null)
        event.target.complete();
      if(event!=null && (this.paginationData.to == this.paginationData.total || this.paginationData.total < this.paginationData.per_page)){
        event.target.disabled = true;
      }
    })
  }

  filterData() {
    this.page=0;
    this.collectionList=[];
    this.loadData();
  }

}


