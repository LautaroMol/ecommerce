export interface Product {
  id: number;
  title: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {rate: number; count: number};
}

export interface ProductItemCart {
  product: Product;
  quantity: number;
}
