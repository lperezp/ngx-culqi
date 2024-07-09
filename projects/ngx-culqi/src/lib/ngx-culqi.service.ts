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
    window.culqi = this.culqi.bind(this);
  }

  setTokenCreated(value: string): void {
    this.tokenCreatedSubject.next(value);
  }

  setOrderCreated(value: string): void {
    this.orderCreatedSubject.next(value);
  }

  initCulqi(tokenCulqi: string): void {
    Culqi.publicKey = tokenCulqi;
  }

  loadScriptCulqi(tokenCulqi: string, apiKeyCulqi: string): void {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://checkout.culqi.com/js/v4';
    script.onload = () => {
      console.log('Culqi loaded');
      this.initCulqi(tokenCulqi);
      this.apiKeyCulqi = apiKeyCulqi;
    };
    document.head.appendChild(script);
  }


  generateOrder(order: IOrderCulqi): Observable<Partial<IOrderCulqiResponse>> {
    return this.http.post('https://api.culqi.com/v2/orders', order, {
      headers: {
        Authorization: `Bearer ${this.apiKeyCulqi}`
      }
    });
  }

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

  closeCulqi(): void {
    Culqi.close();
    this.tokenCreatedSubject.unsubscribe();
    this.orderCreatedSubject.unsubscribe();
  }
}
