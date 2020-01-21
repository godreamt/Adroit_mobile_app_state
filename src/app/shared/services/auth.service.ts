import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertService } from './alert.service';
import { environment } from 'src/environments/environment';

export const TOKEN_KEY = 'sha_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url;
  authenticationState = new BehaviorSubject(false);
 
  constructor(private storage: Storage, private plt: Platform, private http: HttpClient, private alert: AlertService) { 
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }

  
  login(data){
    let token = { headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})}
    this.http.post(this.url+'login', data, {}).subscribe(response => {
      if(response['status'] == 'success' ){
        const helper = new JwtHelperService();
        let decoded = helper.decodeToken(response['token']);
        if(decoded.roles == 'state_head'){
          localStorage.setItem(TOKEN_KEY, response['token']);
          this.storage.set('roles', decoded.roles);
          this.storage.set('userId', decoded.userId);
          this.storage.set(TOKEN_KEY, response['token']).then(() => {
            this.authenticationState.next(true);
          });
        }else {
          this.alert.error("You are not a state head.");
        }
      }
    }, error => {    
      this.alert.error("Unauthorised user.")
    })
  }
 
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }
 
}