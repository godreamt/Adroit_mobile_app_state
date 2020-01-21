import { DataService } from 'src/app/shared/services/data.service';
import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class ExpenseResolver implements Resolve<any> {
  constructor(private _serv: DataService) {}

  resolve(route:ActivatedRouteSnapshot) {
      
      let expense = route.params.expenseId;
      this._serv.url = "expense/"+expense;
      return this._serv.get();
  }
}