export interface IVendorForm {
  name: string;
  description: string;
  price: number;
  email: string;
}

export interface IFormStatus {
  message: string;
  type: string;
}

export interface IFormStatusProps {
  [key: string]: IFormStatus;
}

export interface IFleaItem {
  id: number;
  name: string;
  price: number;
  condition: string;
  category: string;
  description: string;
  email: string;
}
