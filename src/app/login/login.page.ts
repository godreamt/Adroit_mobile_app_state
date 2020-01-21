import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form:FormGroup;
  constructor(private authService: AuthService, public menuCtrl: MenuController, private fb:FormBuilder) { 
    
    this.form = this.fb.group ( {
      email: ['sales@me.com' , Validators.compose ( [ Validators.required, Validators.email ] )] , 
      password: ['1234567' , Validators.compose ( [ Validators.required ] )]
    } );
  }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    if(this.form.invalid)return;
    this.authService.login(this.form.value);
  }
}
