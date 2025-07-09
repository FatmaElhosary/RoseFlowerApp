import { Metadata } from '../../../interfaces/products';
import { ErrorResponseDTO } from './error';

export interface Occasion {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isSuperAdmin: boolean;
  productsCount: number;
}

export interface OccasionResponseInterface {
  message: string;
  metadata: Metadata;
  occasions: Occasion[];
  error: ErrorResponseDTO;
}
