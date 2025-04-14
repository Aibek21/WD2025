import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {POSTS} from "../../fake-db";
import {Post} from "../../models";
import {Location} from "@angular/common";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post | undefined

  constructor(private router: ActivatedRoute,
              private location: Location,
              private postService: PostsService) {
  }

  ngOnInit(): void {
    // let id = +this.router.snapshot.params['id'];
    // this.post = POSTS.find((post) => post.id === id);

    this.router.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.getPost(id);
    })
  }

  getPost(id: number) {
    this.postService.getPost(id).subscribe((post) => {
      this.post = post;
    })
  }

  goBack() {
    this.location.back();
  }
}


