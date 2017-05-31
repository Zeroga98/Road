var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login/login';
import { SignUpPage } from './signup/signup';
import { ProfilePage } from './profile/profile';
import { ListReservePage } from './list-reserve/list-reserve';
import { ReserveDetailPage } from './reserve-detail/reserve-detail';
//import { CutoffDatePage } from '../provider/cutoff-date/cutoff-date';
import { ContractDetailPage } from './contract-detail/contract-detail';
import { aboutPage } from './about/about';
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    NgModule({
        imports: [IonicPageModule],
        declarations: [
            LoginPage,
            SignUpPage,
            ProfilePage,
            ListReservePage,
            ReserveDetailPage,
            //CutoffDatePage,
            ContractDetailPage,
            aboutPage
        ],
        entryComponents: [
            LoginPage,
            SignUpPage,
            ProfilePage,
            ListReservePage,
            ReserveDetailPage,
            //CutoffDatePage,
            ContractDetailPage,
            aboutPage
        ]
    })
], UserModule);
export { UserModule };
//# sourceMappingURL=user.module.js.map