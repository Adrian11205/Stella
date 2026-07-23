export interface RegisterDto {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
}

export interface RegisterResponse {
  accessToken: string;
  refreshToken: string;
}

export interface UserResponse {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  role: string;
}

export enum OrderEnum{
  ASC = "ASC",
  DESC = "DESC"
}

export interface PaginationDto {
  order?: OrderEnum
  page?: number
  take?: number
}
 
export interface CreateProductDto {
  name: string;
  price: number;
  category: string
}
export type UpdateProfileType = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
};

 export interface Product {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  name: string;
  price: number;
  category: string;
}

 export interface Meta {
  page: string;
  take: string;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
export interface ProductsResponse {
  data:Product[];
  meta: Meta
}