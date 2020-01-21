import { DataService } from 'src/app/shared/services/data.service';
import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class CollectionResolver implements Resolve<any> {
  constructor(private _serv: DataService) {}

  resolve(route:ActivatedRouteSnapshot) {
      
      let collectionId = route.params.id;
      this._serv.url = "collection/"+collectionId;
      return this._serv.get();
  }
}