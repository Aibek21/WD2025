import {Injectable} from '@angular/core';
import {POSTS} from "../fake-db";
import {HttpClient} from "@angular/common/http";
import {BaseResponse, Post} from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private client: HttpClient) {
  }

  getPosts() {
    // return POSTS;
    return this.client.get<BaseResponse>('https://dummyjson.com/posts');
  }

  getPost(id: number) {
    // return POSTS.find((post) => post.id === id);
    return this.client.get<Post>(`https://dummyjson.com/posts/${id}`);
  }

  addPost(post: Post) {
    return this.client.post<Post>('https://dummyjson.com/posts/add', post);
  }
}
