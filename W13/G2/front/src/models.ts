export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}


export interface BaseResponse {
  posts: Post[];
}


export interface AuthModel {
  username: string;
  password: string;
}


export interface Token {
  refresh: string;
  access: string;
}


export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
