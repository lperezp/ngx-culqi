export interface ICulqi {
  settings: ICulqiSettings;
}

export interface ICulqiSettings {
  title: string;
  currency: string;
  description: string;
  amount: number;
}

export interface ICulqiOptions {
  lang: string;
  modal: boolean;
  installments: boolean;
  customButton: string;
  style?: {
    logo: string;
    maincolor: string;
    buttontext: string;
    maintext: string;
    desctext: string;
  };
}
export interface IGetOptions {
  customButton: string;
  head: boolean;
  installments: boolean;
  lang: string;
  modal: boolean;
  onlyInputs: boolean;
  style: object;
}

export interface IGetSettings {
  amount: number;
  currency: string;
  description: string;
  title: string;
  version: number;
}

export interface IPaymentEvent {
  bubbles: boolean;
  cancelBubble: boolean;
  cancelable: boolean;
  composed: boolean;
  currentTarget: null;
  defaultPrevented: boolean;
  detail: string;
  eventPhase: number;
  isTrusted: boolean;
  path: any[];
  returnValue: boolean;
  srcElement: any;
  target: any;
  timeStamp: number;
  type: string;
}
