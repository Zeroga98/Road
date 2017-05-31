var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
/** Componentes */
import { Road } from './app.component';
import { MenuHeaderComponent } from '../components/menu-header/menu-header';
/*import { NotDataComponent } from '../components/not-data/not-data';*/
/** Modulos */
import { UserModule } from '../pages/user/user.module';
import { VehicleModule } from '../pages/vehicle/vehicle.module';
import { ProviderModule } from '../pages/provider/provider.module';
import { EmployeeModule } from '../pages/employee/employee.module';
import { AdminModule } from '../pages/admin/admin.module';
/** Providers */
import { UtilProvider } from '../providers/util-provider';
import { StringsProvider } from '../providers/strings-provider';
import { Network } from '@ionic-native/network';
/** Servicios */
import { ApiService } from '../services/api-service';
import { AuthService } from '../services/auth-service';
import { TokenService } from '../services/token-service';
import { VehicleService } from '../services/vehicle-service';
import { UserService } from '../services/user-service';
import { MenuService } from '../services/menu-service';
import { ProviderService } from '../services/provider-service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            Road,
            MenuHeaderComponent
            /*NotDataComponent*/
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(Road),
            HttpModule,
            UserModule,
            VehicleModule,
            ProviderModule,
            EmployeeModule,
            AdminModule
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            Road,
            MenuHeaderComponent
            /*NotDataComponent*/
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
            ProviderService,
            UtilProvider,
            Network,
            StringsProvider,
            { provide: ErrorHandler,
                useClass: IonicErrorHandler
            }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map