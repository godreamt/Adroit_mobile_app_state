import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-update',
  templateUrl: './expense-update.page.html',
  styleUrls: ['./expense-update.page.scss'],
})
export class ExpenseUpdatePage implements OnInit {
  base64Image;
  picture;
  form: FormGroup;

  constructor(private camera: Camera, private fb: FormBuilder, private alert: AlertService, private _serv: DataService, private router: Router) { 
    this.form = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      description: [''],
      expenseAmount: ['', [Validators.required]],
      documentImage: ['']
    });
  }

  ngOnInit() {
  }

  AccessCamera(){

    this.camera.getPicture({
    targetWidth:512,
    targetHeight:512,
    correctOrientation:true,
    sourceType: this.camera.PictureSourceType.CAMERA,
    destinationType: this.camera.DestinationType.DATA_URL
      }).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64,'+imageData;
        this.picture = imageData;
            }, (err) => {
        console.log(err);
      });
   }
   
   AccessGallery(){
    this.camera.getPicture({
       sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
       destinationType: this.camera.DestinationType.DATA_URL
      }).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64,'+imageData;
        this.picture = imageData;
           }, (err) => {
        console.log(err);
      });
   }

   saveFormData() {
    if(!this.base64Image){
      this.alert.showApiError(["Please select an image of document"]);
      return;
    }
    this.form.get('documentImage').setValue(this.base64Image);
    this.form.markAllAsTouched();
     if(this.form.invalid)return;
     this._serv.url="expense";
    this._serv.create(this.form.value).subscribe(response => {
      this.alert.showSuccess(response[0]);
      this.router.navigateByUrl('/expense-list');
    }, error => {
      this.alert.showApiError(error);
    })
   }

}
