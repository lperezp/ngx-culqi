import { Injectable } from '@angular/core';

declare let Culqi;

@Injectable({
  providedIn: 'root'
})
export class NgCulqiService {
  API_KEY: string;
  settingsCulqi : object;
  token_id : string;
  constructor() {
    document.addEventListener ('payment_event', (token: any) => {
    this.token_id = token.detail;
   // if print console token is OK
    console.log(this.token_id)
  });
}
  
  configCulqi(API_KEY : string,commerce : string,currency : string){
    Culqi.publicKey = API_KEY;
    this.settingsCulqi = {title : commerce,currency : currency}
  }
  
  optionCulqi(lang: string,modal:boolean,installments: string){
    Culqi.options({
      lang: lang,
      modal: modal,
      installments: installments,
      customButton:"",
      style: {
        logo: 'https://image-club-app.web.app/assets/img/brand/logo.png',
        maincolor: '#e5b1b6',
        buttontext: '#ffffff',
        maintext: '#4A4A4A',
        desctext: '#4A4A4A'
      }
  });
  }

  openPayment(description: string,amount: number){
    Culqi.settings({
      title: this.settingsCulqi["title"],
      currency: this.settingsCulqi["currency"],
      description: description,
      amount: amount*100
    })
    Culqi.open();
  }
}