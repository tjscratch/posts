import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  emptyUsername: any;
  emptyCommentTitle: any;
  emptyUserComment: any;

  AddPost(value) {
    const addedPost = {author: value.userName, title: value.postTitle, text: value.userText, userId: 4 };
    this._PostsService.AddPost(addedPost).subscribe(
      data => {console.log(data);
        this.router.navigate(['/posts']);
      }
    );
    this.emptyUsername = '';
    this.emptyCommentTitle = '';
    this.emptyUserComment = '';
  }
  constructor(private _PostsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

}
