import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public toastController: ToastController) { }


  async success(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async error(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }


  async showSuccess(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }


  async showApiError(error) {
    let message ="";
    if(error){
      if(error.hasOwnProperty('error')) {
        error = error.error;
        if(error.hasOwnProperty('errors')) {
            error = error.errors;
            message = error[Object.keys(error)[0]]
        }else {
            message = error[0];
        }
      }else {
        message = error;
      }
    }
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

}
