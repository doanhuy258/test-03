export interface OrderFormState {
  fullName: string;
  phoneNumber: string;
  address: string;
  quantity: number;
}

export interface ProductConfig {
  price: number;
  currency: string;
  sheetId: string;
}

export interface PaymentConfig {
  account: string;
  bank: string;
  template: string;
}
