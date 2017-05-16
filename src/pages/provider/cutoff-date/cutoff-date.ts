import { Component } from '@angular/core';
import { ProviderService } from '../../../services/provider-service';
import { UtilProvider } from '../../../providers/util-provider';

@Component({
	selector: 'page-cutoff-date',
	templateUrl: 'cutoff-date.html'
})
export class CutoffDatePage {

	private loading: any;
	public next_payment: number = 0;
	public before_payment: number = 0;

	constructor(
		public providerService: ProviderService,
		public util: UtilProvider,
	) {
		this.getPayment('next', (data) => this.next_payment = data.proximo_pago);
		this.getPayment('before', (data) => this.before_payment = parseInt(data.recaudado));
	}

	public getPayment(state: string, callback: any) {
		this.loading = this.util.loading();
		this.providerService.getPayment(state).subscribe(
			response => {
				if(response != undefined && response.length > 0){
					callback(response[0]);
				}
				this.util.loadingDismiss();
			},
			error => {
				this.util.presentToast(this.util.strings.error_connection);
				this.util.loadingDismiss();
			});
	}
}