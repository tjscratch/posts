import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any = [];
  date = new Date();
  show = 10;

  navigateToUser(userid) {
    this.router.navigate(['/user', userid]);
}
  navigateToPost(postid) {
    this.router.navigate(['/post', postid]);
  }
  onClick(event:any) {
    event.srcElement.classList.toggle('avatar-clicked');
  }

  constructor(private _PostsService: PostsService, private router: Router) { }

  ngOnInit() {
     // this._PostsService.getPosts().subscribe(data => {console.log(data); });
    this._PostsService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
