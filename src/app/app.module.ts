import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TOKEN_KEY } from './shared/services/auth.service';
import { Camera } from '@ionic-native/camera/ngx';


export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Clone the request to add the new header
    const clonedRequest = req.clone({ headers: req.headers.set('Content-Type', 'application/json').set('Authorization', 'Bearer '+localStorage.getItem(TOKEN_KEY)) });

    // Pass the cloned request instead of the original request to the next handle.set('Accept', 'application/json')
    return next.handle(clonedRequest);
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    },
    Camera 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

