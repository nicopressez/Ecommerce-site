import { createContext } from "react";

type ClothesItem = {
  name:string;
  img: any;
  gender: string;
  price: string;
  type: string;
  brand: string;
  color?: string;
  description?: string;
  size?: string;
  quantity?:number
};


interface CartContextType {
  cart: ClothesItem[]; 
  products: number;
  subtotal: number;
  addItem: (item: ClothesItem, size:number) => void;
  showCart: boolean; 
  removeItem: (item: ClothesItem ) => void;
  editQuantity: (item:ClothesItem, newQuantity:number) => void;
  setCart: React.Dispatch<React.SetStateAction<ClothesItem[]>>
  setSubtotal: React.Dispatch<React.SetStateAction<number>>
  setProducts: React.Dispatch<React.SetStateAction<number>>
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  products: 0,
  subtotal: 0,
  addItem: () => {},
  showCart: false,
  removeItem: () => {},
  editQuantity: () => {},
  setCart: () => {},
  setSubtotal: () => {},
  setProducts: () => {},
});
