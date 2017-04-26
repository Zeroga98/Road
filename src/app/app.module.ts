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

/** Providers */
import { UtilProvider } from '../providers/util-provider';
import { StringsProvider } from '../providers/strings-provider';

/** Servicios */
import { ApiService } from '../services/api-service';
import { AuthService } from '../services/auth-service';
import { TokenService } from '../services/token-service';
import { VehicleService } from '../services/vehicle-service';
import { UserService } from '../services/user-service';
import { MenuService } from '../services/menu-service';


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
    UtilProvider,
    StringsProvider,
    { provide: ErrorHandler, 
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}
