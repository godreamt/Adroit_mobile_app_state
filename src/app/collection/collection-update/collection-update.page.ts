import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DataService } from 'src/app/shared/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection-update',
  templateUrl: './collection-update.page.html',
  styleUrls: ['./collection-update.page.scss'],
})
export class CollectionUpdatePage implements OnInit {
  form: FormGroup;
  orderId;
  constructor(private fb: FormBuilder, private alert: AlertService, private _serv: DataService, private router: Router, private route: ActivatedRoute) {
    this.orderId = this.route.snapshot.params.id;
    this.form = this.fb.group({
      order_id: [this.orderId],
      collectionAmount: ['', [Validators.required]],
      paymentMethod: ['cash', [Validators.required]],
      relatedInfo: [''],
      comments: [''],
    })
   }

  ngOnInit() {
  }

  makeNewCollection(){
    if(this.form.invalid)return;
    this._serv.url="collection";
    this._serv.create(this.form.value).subscribe(response => {
      this.alert.success(response[0]);
      this.router.navigate(['/collection-list']);
    }, error => {
      this.alert.showApiError(error); 
    })
  }

}
