import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../models";
import {POSTS} from "../../fake-db";
import {Location} from "@angular/common";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private postsService: PostsService) {
  }

  ngOnInit(): void {
    // let id = Number(this.route.snapshot.params["id"]);
    // this.post = POSTS.find((post) => post.id === id);

    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get("id"));
      this.postsService.getPost(id).subscribe((post) => {
        this.post = post;
      });
      //some logic
    })
  }

  goBack() {
    this.location.back();
  }

}
