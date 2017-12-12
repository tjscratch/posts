import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ PostsService ]
})
export class AppComponent {
  title = 'app';
}
