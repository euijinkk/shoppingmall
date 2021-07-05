export interface IProductData {
  [index: string]: IEmail;
  'gytks4@naver.com': IEmail;
  'euijinkk97@gmail.com': IEmail;
}

export interface IEmail {
  product: IProduct[];
  cart: ICart[];
}

export interface IProduct {
  [index: string]: string | number | string[];
  id: number;
  title: string;
  img: string;
  description: string;
  price: string;
  delivery: string;
  category: string;
  review: string[];
}

export interface ICart {
  id: number;
  title: string;
  img: string;
  description: string;
  price: string;
  delivery: string;
  category: string;
}
