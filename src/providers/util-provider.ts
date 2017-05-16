import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from 'ionic-angular';
import { StringsProvider } from './strings-provider'

@Injectable()
export class UtilProvider {

	public strings: StringsProvider;
	private loader: any = undefined;
	private loader_cont: number=0;
	constructor(
		private alertCtrl: AlertController,
		private loadingCtrl: LoadingController,
		private toastCtrl: ToastController,
		private stringsProvider: StringsProvider
	) {
		this.strings = stringsProvider;
	}

	public presentToast(message: string) {
		let toast = this.toastCtrl.create({
			message: message,
			duration: 3000,
			position: 'bottom'
		});
		toast.present();
	}

	public loading(): any {
		this.loader_cont++;	
		if (this.loader == undefined) {
			this.loader = this.loadingCtrl.create({
				content: "Cargando",
				dismissOnPageChange: false
			});
			this.loader.present();
		}
		return this.loader;
	}
	public loadingDismiss() {
		this.loader_cont--;		
		if (this.loader_cont == 0) {
			this.loader.dismiss();
			this.loader = undefined;
		}

	};

	public showError(title: string, text: string) {
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: text,
			buttons: ['OK']
		});

		alert.present(prompt);
	}
}