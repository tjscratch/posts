import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postid: any;
  post: any = [];
  constructor(private _PostsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postid = this.route.snapshot.params['id'];
    this._PostsService.getPost(this.postid).subscribe(data => {
    this.post = data;
    });
  }

}
