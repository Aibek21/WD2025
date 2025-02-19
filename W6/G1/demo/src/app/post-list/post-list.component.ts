import {Component, OnInit} from '@angular/core';
import {Post} from 'src/models';
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  newPost: Post;

  constructor(private postsService: PostsService) {
    this.posts = [];
    this.newPost = {} as Post;
    this.newPost.userId = 5;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe((baseResponse) => {
      this.posts = baseResponse.posts;
    });
  }


  addPost(){
    this.postsService.addPost(this.newPost).subscribe((post) => {
      console.log(post)
      this.posts.unshift(post);
    })
  }

}
