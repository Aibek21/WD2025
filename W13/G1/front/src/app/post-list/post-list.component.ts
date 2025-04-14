import {Component, OnInit} from '@angular/core';
import {POSTS} from 'src/fake-db';
import {Post} from "../../models";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  newPost: Post = {} as Post;
  loaded: boolean = false;

  constructor(private postsService: PostsService) {
    this.newPost.userId = 5;
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((baseResponse) => {
      this.posts = baseResponse.posts;
      this.loaded = true;
    });
  }

  addPost() {
    this.postsService.addPost(this.newPost).subscribe((post) => {
      this.posts.unshift(post)
    })
  }
}
