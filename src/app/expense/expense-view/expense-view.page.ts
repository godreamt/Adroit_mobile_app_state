import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-expense-view',
  templateUrl: './expense-view.page.html',
  styleUrls: ['./expense-view.page.scss'],
})
export class ExpenseViewPage implements OnInit {
  expenseData;
  imgUrl = environment.imageUrl;
  constructor(private route: ActivatedRoute) { 
    this.route.data.subscribe(data => {
      this.expenseData = data.expense;
      console.log(this.expenseData);
      
    })
  }

  ngOnInit() {
  }

}
