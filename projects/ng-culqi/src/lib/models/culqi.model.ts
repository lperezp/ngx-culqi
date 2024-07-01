export interface ICulqiSettings {
    title: string;
    currency: string;
    amount: number;
    order: string | undefined;
    xculqirsaid: string;
    rsapublickey: string;
}
export interface ICulqiOptions {
    lang?: string;
    installments?: boolean;
    paymentMethods?: PaymentMethods;
    style?: Style
}

export interface PaymentMethods {
    tarjeta: boolean;
    yape: boolean;
    bancaMovil: boolean;
    agente: boolean;
    billetera: boolean;
    cuotealo: boolean;
}

export interface Style {
    logo: string;
    bannerColor?: string;
    buttonBackground?: string;
    menuColor?: string;
    linksColor?: string;
    buttonText?: string;
    buttonTextColor?: string;
    priceColor?: string;
}

export interface IOrderCulqi {
    amount: number;
    currency_code: string;
    description: string;
    order_number: number;
    client_details: ClientDetails;
    expiration_date: number;
    confirm: boolean;
}

export interface ClientDetails {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
}

export interface IOrderCulqiResponse {
    object: string;
    id: string;
    amount: number;
    payment_code: null;
    currency_code: string;
    description: string;
    order_number: string;
    state: string;
    total_fee: null;
    net_amount: null;
    fee_details: null;
    creation_date: number;
    expiration_date: number;
    updated_at: number;
    paid_at: null;
    available_on: null;
    metadata: null;
    qr: null;
    cuotealo: null;
    url_pe: null;
}
