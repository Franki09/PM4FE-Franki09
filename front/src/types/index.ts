export interface ICategory {
  id: number;
  name: string;
  products: IProduct[];
}

enum eStatusOrder {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}

export interface IOrder {
  id: number;
  status: eStatusOrder;
  date: Date;
  user: IUser;
  products: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

enum eRole {
  ADMIN = "admin",
  USER = "user",
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: eRole;
  // credentials & orders
}

//! DTOs

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

//! Para el User Detail
export type Params = Promise<{ slug: string }>;
export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
