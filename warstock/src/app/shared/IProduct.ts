export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription?: string;
  imagePath?: string[];
  price: number;
}