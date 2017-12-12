import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get('http://localhost:3000/posts?_sort=id,views&_order=desc');
    // return this.http.get('https://eptest-d3f1c.firebaseio.com/posts.json');
  }
  getUserPosts(userid) {
    return this.http.get('http://localhost:3000/posts?userId=' + userid );
  }
  getPost(postid) {
    return this.http.get('http://localhost:3000/posts/' + postid );
  }
  getComments(postid) {
    return this.http.get('http://localhost:3000/posts/' + postid + '/comments' );
  }
  PostComment(addedComment) {
    return this.http.post('http://localhost:3000/comments/', addedComment);
      }
  AddPost(addedPost) {
    return this.http.post('http://localhost:3000/posts/', addedPost);
  }
}
