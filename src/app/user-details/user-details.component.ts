import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userid: any;
  usersPosts: any = [];

  navigateToUser(userid) {
    this.router.navigate(['/user', userid]);
  }
  navigateToPost(postid) {
    this.router.navigate(['/post', postid]);
  }
  constructor(private _PostsService: PostsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userid = this.route.snapshot.params['id'];
    this._PostsService.getUserPosts(this.userid).subscribe(data => {
    this.usersPosts = data;
    });
  }

}
