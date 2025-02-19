import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../models";
import {PostsService} from "../posts.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(private postsService: PostsService,
              private router: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    // let id = +this.router.snapshot.params["id"];
    // this.post = POSTS.find((post) => post.id === id);

    this.getPost();
  }


  getPost() {
    this.router.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.postsService.getPost(id).subscribe((post) => {
        this.post = post;
      });
    })
  }

  goBack(){
      this.location.back();
  }


}
