import {Component, OnInit} from '@angular/core';
import {Post} from 'src/models';
import {POSTS} from "../../fake-db";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = []
  loaded: boolean = false;
  newPost: Post = {} as Post;

  constructor(private postService: PostsService) {
    this.newPost.userId = 5;
  }

  ngOnInit(): void {
    this.getPosts()

  }

  getPosts() {
    this.postService.getPosts().subscribe((baseResponse) => {
      this.posts = baseResponse.posts;
      this.loaded = true;
    });
  }

  addPost() {
    this.postService.addPost(this.newPost).subscribe((post) => {
      this.posts.unshift(post);
    })
  }
}
