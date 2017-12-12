import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddPostComponent } from './add-post/add-post.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: HomeComponent  },
  { path: 'post/:id', component: PostDetailsComponent  },
  { path: 'add-post', component: AddPostComponent  },
  { path: 'user/:id', component: UserDetailsComponent  },
];

export const appRoutes = RouterModule.forRoot(APP_ROUTES, { useHash: true });
