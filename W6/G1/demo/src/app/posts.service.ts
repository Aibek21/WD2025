import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BaseResponse, Post} from "../models";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private client: HttpClient) {
  }

  getPosts() {
    return this.client.get<BaseResponse>('https://dummyjson.com/posts');
  }

  getPost(id: number) {
    return this.client.get<Post>(`https://dummyjson.com/posts/${id}`)
    // return of(POSTS.find((post) => post.id === id));
  }

  addPost(post: Post) {
    return this.client.post<Post>('https://dummyjson.com/posts/add', post)
  }
}
