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
import { ContractDetailPage } from '../../user/contract-detail/contract-detail';
var CutoffDatePage = (function () {
    function CutoffDatePage(providerService, nav, navParams, util) {
        var _this = this;
        this.providerService = providerService;
        this.nav = nav;
        this.navParams = navParams;
        this.util = util;
        this.next_payment = 0;
        this.before_payment = 0;
        this.contracts = undefined;
        this.getContracts();
        //this.getPayment('next', (data) => this.next_payment = parseInt(data.proximo_pago));
        this.getPayment('before', function (data) { return _this.before_payment = parseInt(data.recaudado); });
    }
    CutoffDatePage.prototype.getContracts = function () {
        var _this = this;
        this.util.loading();
        this.providerService.getContracts().subscribe(function (response) {
            _this.contracts = [];
            if (response != undefined && response.length > 0) {
                _this.contracts = response;
                console.log(_this.contracts);
            }
            _this.util.loadingDismiss();
        }, function (error) {
            _this.contracts = [];
            _this.util.presentToast(_this.util.strings.error_connection);
            _this.util.loadingDismiss();
        });
    };
    CutoffDatePage.prototype.getPayment = function (state, callback) {
        var _this = this;
        this.util.loading();
        this.providerService.getPayment(state).subscribe(function (response) {
            if (response != undefined && response.length > 0) {
                callback(response[0]);
            }
            _this.util.loadingDismiss();
        }, function (error) {
            _this.util.presentToast(_this.util.strings.error_connection);
            _this.util.loadingDismiss();
        });
    };
    CutoffDatePage.prototype.goToDetail = function (contract_id) {
        this.nav.push(ContractDetailPage, { contract_id: contract_id });
    };
    return CutoffDatePage;
}());
CutoffDatePage = __decorate([
    Component({
        selector: 'page-cutoff-date',
        templateUrl: 'cutoff-date.html'
    }),
    __metadata("design:paramtypes", [ProviderService,
        NavController,
        NavParams,
        UtilProvider])
], CutoffDatePage);
export { CutoffDatePage };
//# sourceMappingURL=cutoff-date.js.map