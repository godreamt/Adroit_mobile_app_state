import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  form: FormGroup;
  subCategoryList: any;
  categoryList: any[];
  productList: any;
  constructor(public modalController: ModalController, private fb: FormBuilder, private _serv: DataService) { 
    this.form = this.fb.group({
      category_id: [''],
      category_name: [''],
      sub_category_id: [''],
      sub_category_name: [''],
      product_id: ['', [Validators.required]],
      product_name: ['', [Validators.required]],
      price: ['0'],
      total: ['0'],
      quantity: ['0', Validators.required]
    })
  }

  ngOnInit() {
    this.getCategory();
  }

  dismiss() {
    this.modalController.dismiss(false);
  }
  getCategory() {
    this._serv.url="category/list";
    this._serv.get().subscribe(response => {
      this.categoryList = response as any[];
    })
  }
  
  getSubCategory(event) {
    let value = event.target.value;
    this.categoryList.forEach(elem => {
      if(elem.id == value) {
        this.form.get('category_name').setValue(elem.title);
      }
    })
    this.subCategoryList=[];
    this.form.patchValue({sub_category_id:""});
    this._serv.url="sub-category/category/"+value;
    this._serv.get().subscribe(response => {
      this.subCategoryList = response as any[];
    })
  }
  
  getProducts(event) {
    let value = event.target.value;
    this.subCategoryList.forEach(elem => {
      if(elem.id == value) {
        this.form.get('sub_category_name').setValue(elem.title);
      }
    })
    this.productList=[];
    this._serv.url = "product/list?subCategory="+value;
    this._serv.get().subscribe(response => {
      this.productList = response as any[];
    })
  }
  
  getProductDetail(event) {
    let product;
    let product_id = event.target.value;
    if(product_id) {
      this.productList.forEach(elem => {
        if(elem.id == product_id) {
          product = elem;
          return;
        }
      })
    }
    
    this.form.get('price').setValue(product.regularPrice);
    this.form.get('product_name').setValue(product.title);
    this.calculateTotalPrice();
  }
  
  calculateTotalPrice() {
    setTimeout(()=>{
      
      let value = {...this.form.value};
      value.quantity = (isNaN(parseInt(value.quantity)))?0:parseInt(value.quantity);
      value.price = (isNaN(parseFloat(value.price)))?0:parseFloat(value.price);
      this.form.get('total').setValue((value.quantity * value.price).toString());
    }, 200);
  }

  addProduct() {
    this._serv.markFormGroupTouched(this.form);
    if(this.form.invalid)return;
    this.modalController.dismiss(this.form.value)
  }

}
