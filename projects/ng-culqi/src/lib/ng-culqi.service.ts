import { Injectable } from '@angular/core';

import { ICulqiSettings } from './models/culqi.model';

export declare let Culqi: any;
@Injectable({
  providedIn: 'root',
})
export class NgCulqiService {
  TOKEN_CULQI = '';

  constructor() {
    document.addEventListener('payment_event', (token: any) => {
      this.TOKEN_CULQI = token.detail;
      console.log(this.TOKEN_CULQI);
    });
  }

  initCulqi(CULQI_PUBLIC_KEY: string): void {
    Culqi.publicKey = CULQI_PUBLIC_KEY;
  }

  open(): void {
    Culqi.open();
  }

  payOrder(culqiSettings: ICulqiSettings): void {
    Culqi.settings(culqiSettings);

    Culqi.options({
      lang: 'auto',
      modal: true,
      installments: false,
      customButton: '',
    });
    Culqi.open();
  }
}
