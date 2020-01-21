import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddProductPage } from './add-product/add-product.page';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/shared/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.page.html',
  styleUrls: ['./new-purchase.page.scss'],
})
export class NewPurchasePage implements OnInit {
userRole = localStorage.getItem('roles');
loginId = localStorage.getItem('userId');

form:FormGroup;
imageUrl = environment.imageUrl;
user_id;
userData;
categoryList: any[];
subCategoryList: any[] = [];
productList: any[] = [];
totalOrderPrice=0;
constructor(private _serv: DataService, private fb: FormBuilder, private route: ActivatedRoute, private alert: AlertService, private router: Router, public modalController: ModalController) {
  this.user_id = this.route.snapshot.params.vendorId;

  this.route.data.subscribe(response => {
      this.userData = response['user'];
  })

  this.form = this.fb.group( {
    vendor_id: [''],
    comments: [''],
    items: this.fb.array([])
  })
}
ngOnInit() {
}

addItem(category_id, category_name, sub_category_id, sub_category_name, product_id, product_name, price, total, quantity) {
  return this.fb.group({
    category_id: [category_id],
    category_name: [category_name],
    sub_category_id: [sub_category_id],
    sub_category_name: [sub_category_name],
    product_id: [product_id, [Validators.required]],
    product_name: [product_name, [Validators.required]],
    productPrice: [price],
    total: [total],
    quantity: [quantity, Validators.required]
  })
}

get items() {
  return this.form.get('items') as FormArray;
}

// addProduct() {
//   this.items.push(this.addItem())
// }


removeProduct(i){
  this.items.removeAt(i);
}

getTotalOrderPrice() {
  let value = this.items.value;
  this.totalOrderPrice=0;
  value.forEach(elem => {
    this.totalOrderPrice += parseFloat(elem.total);
  })
}

makeOrder() {
  this._serv.url="order";
  let data = this.form.value;
  data.vendor_id = this.user_id;
  this._serv.create(data).subscribe(response => {
    this.alert.showSuccess(response[0]);
    this.router.navigateByUrl('/purchase-list');
  }, error => {
    this.alert.showApiError(error);
  })
}


  async presentModal() {
    const modal = await this.modalController.create({
      component: AddProductPage
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    if(data!=false)
    this.items.push(this.addItem(data.category_id, data.category_name, data.sub_category_id, data.sub_category_name, data.product_id, data.product_name, data.price, data.total, data.quantity));
    console.log(this.items.value);
    
    this.getTotalOrderPrice();
    
  }
}





//   constructor(public modalController: ModalController) { }

//   ngOnInit() {
//   }

//   async presentModal() {
//     const modal = await this.modalController.create({
//       component: AddProductPage
//     });
//     return await modal.present();
//   }

//   removeProduct() {
//     alert(1)
//   }


// }
