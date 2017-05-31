var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProviderService } from '../../../services/provider-service';
import { UtilProvider } from '../../../providers/util-provider';
var ContractDetailPage = (function () {
    function ContractDetailPage(navCtrl, providerService, navParams, util) {
        this.navCtrl = navCtrl;
        this.providerService = providerService;
        this.navParams = navParams;
        this.util = util;
        this.payment = undefined;
    }
    ContractDetailPage.prototype.ionViewDidLoad = function () {
        this.contract_id = this.navParams.get('contract_id');
        this.getHistoryPayment();
    };
    ContractDetailPage.prototype.getHistoryPayment = function () {
        var _this = this;
        this.util.loading();
        this.providerService.getHistoryPayment(this.contract_id)
            .subscribe(function (data) {
            _this.payment = [];
            if (data != undefined) {
                for (var i = 0; i < data.length; i++) {
                    _this.payment.push(data[i]);
                }
            }
            _this.util.loadingDismiss();
        }, function (error) {
            _this.util.loadingDismiss();
            _this.payment = [];
            console.log(error);
        });
    };
    return ContractDetailPage;
}());
ContractDetailPage = __decorate([
    Component({
        selector: 'page-contract-detail',
        templateUrl: 'contract-detail.html',
    }),
    __metadata("design:paramtypes", [NavController,
        ProviderService,
        NavParams,
        UtilProvider])
], ContractDetailPage);
export { ContractDetailPage };
//# sourceMappingURL=contract-detail.js.map