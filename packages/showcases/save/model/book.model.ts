import { ImageSource } from '../assets/images';

export interface Book {
  name: string;
  author: string;
  categories: string[];
  price: number;
  currency: string;
  rating: number;
  description: string;
  preview: ImageSource;
}