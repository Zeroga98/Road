import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

/** Componentes */
import { Road } from './app.component';
import { MenuHeaderComponent } from '../components/menu-header/menu-header';

/** Modulos */
import { UserModule } from '../pages/user/user.module';
import { VehicleModule } from '../pages/vehicle/vehicle.module';

/** Servicios */
import { ApiService } from '../providers/api-service';
import { AuthService } from '../providers/auth-service';
import { TokenService } from '../providers/token-service';
import { VehicleService } from '../providers/vehicle-service';
import { UserService } from '../providers/user-service';
import { MenuService } from '../providers/menu-service';


@NgModule({
  declarations: [
    Road,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Road),
    HttpModule,
    UserModule,
    VehicleModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Road,
    MenuHeaderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    AuthService,
    TokenService,
    VehicleService,
    UserService,
    MenuService,
    { provide: ErrorHandler, 
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}
