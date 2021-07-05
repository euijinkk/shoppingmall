import { atom } from 'recoil';
import { IEmail, IProduct, IProductData } from '../types';

export const productDataState = atom({
  key: 'productDataState',
  default: {} as IProductData | undefined,
});

export const userProductDataState = atom({
  key: 'userProductDataState',
  default: [] as IProduct[] | undefined,
});

export const loginMailState = atom({
  key: 'loginMailState',
  default: '' as string,
});
