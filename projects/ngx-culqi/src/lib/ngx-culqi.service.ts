import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICulqiOptions, ICulqiSettings, IOrderCulqi, IOrderCulqiResponse } from './models/culqi.model';
export declare let Culqi: any;

@Injectable({
  providedIn: 'root'
})
export class NgxCulqiService {
  tokenCreatedSubject = new BehaviorSubject<string | null>(null);
  tokenCreated$ = this.tokenCreatedSubject.asObservable();

  orderCreatedSubject = new BehaviorSubject<string | null>(null);
  orderCreated$ = this.orderCreatedSubject.asObservable();

  apiKeyCulqi: string | null = null;

  constructor(private http: HttpClient) {
    (window as any).culqi = this.culqi.bind(this);
  }

  /**
    * @param {value} value of the token created by Culqi for backend
    */
  setTokenCreated(value: string): void {
    this.tokenCreatedSubject.next(value);
  }

  /**
    * @param {value} value of the order id created by Culqi
    */
  setOrderCreated(value: string): void {
    this.orderCreatedSubject.next(value);
  }

  /**
    * @param {tokenCulqi} token offered by Culqi
    */
  initCulqi(tokenCulqi: string): void {
    Culqi.publicKey = tokenCulqi;
  }

  /**
    * @param {tokenCulqi} token offered by Culqi
    * @param {apiKeyCulqi} apiKey offered by Culqi
    */
  loadScriptCulqi(tokenCulqi: string, apiKeyCulqi: string): void {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://checkout.culqi.com/js/v4';
    script.onload = () => {
      this.initCulqi(tokenCulqi);
      this.apiKeyCulqi = apiKeyCulqi;
    };
    document.head.appendChild(script);
  }

  /**
    * @param {order} order to be created for generate a payment
    * @returns returns the order created by Culqi API
    */
  generateOrder(order: IOrderCulqi): Observable<Partial<IOrderCulqiResponse>> {
    return this.http.post('https://api.culqi.com/v2/orders', order, {
      headers: {
        Authorization: `Bearer ${this.apiKeyCulqi}`
      }
    });
  }

  /**
    * @param {culqiSettings} e-commerce setup
    * @param {culqiOptions} payment pop up configuration
    */
  generateToken(culqiSettings: ICulqiSettings, culqiOptions?: ICulqiOptions): void {
    if (Culqi) {
      Culqi.settings(culqiSettings);
      const options: ICulqiOptions = {
        lang: "es",
        installments: false,
        paymentMethods: {
          tarjeta: true,
          yape: true,
          bancaMovil: true,
          agente: true,
          billetera: true,
          cuotealo: true,
        },
        ...culqiOptions
      };
      Culqi.options(options);
      Culqi.open();
    }
  }

  /**
    * function for open Culqi payment pop up
    */
  culqi(): void {
    if (Culqi.token) {
      const token = Culqi.token.id;
      this.setTokenCreated(token);
    } else if (Culqi.order) {
      const order = Culqi.order;
      this.setOrderCreated(order);
    } else {
      throw new Error('Culqi has not been loaded correctly.', Culqi.error);
    }
  }

  /**
    * function for close Culqi payment pop up
    */
  closeCulqi(): void {
    Culqi.close();
    this.tokenCreatedSubject.unsubscribe();
    this.orderCreatedSubject.unsubscribe();
  }
}
