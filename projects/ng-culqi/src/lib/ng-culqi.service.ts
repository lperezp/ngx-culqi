import { Injectable } from '@angular/core';

import { ICulqiOptions, ICulqiSettings } from './models/culqi.model';

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

  generateToken(
    culqiSettings: ICulqiSettings,
    culqiOptions?: ICulqiOptions
  ): void {
    Culqi.settings(culqiSettings);
    const culqiOptionsAux: ICulqiOptions = {
      lang: 'auto',
      modal: true,
      installments: false,
      customButton: '',
    };
    culqiOptions ? Culqi.options(culqiOptions) : Culqi.options(culqiOptionsAux);
    Culqi.options();
    Culqi.open();
  }
}
