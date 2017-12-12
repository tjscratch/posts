import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  postid: any;
  comments: any = [];
  emptyUsername: any;
  emptyUserComment: any;

  PostComment(value) {
    const addedComment = {author: value.userName, body: value.userComment, postId: this.postid };
    this._PostsService.PostComment(addedComment).subscribe(
      data => {this.comments.push(data);
      }
    );
    this.emptyUsername = '';
    this.emptyUserComment = '';
  }
  constructor(private _PostsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postid = this.route.snapshot.params['id'];
    this._PostsService.getComments(this.postid).subscribe(data => {
    this.comments = data;
    });
  }

}
