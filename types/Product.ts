export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
  brand: string;
  rating?: number;
  description?: string;
}