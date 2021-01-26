import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/resolves/user-resolve.service';
import { UserComponent } from './components/user/user.component';
import { FullUserComponent } from './components/full-user/full-user.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { FullPostComponent } from './components/full-post/full-post.component';
import {PostResolveService} from './services/resolves/post-resolve.service';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { FullCommentComponent } from './components/full-comment/full-comment.component';
import {CommentResolveService} from './services/resolves/comment-resolve.service';

const routes: Routes = [
  {path: 'users', component: UsersComponent, resolve: {dataRequestUsers: UserResolveService},
  children: [
    {path: ':id', component: FullUserComponent}
  ]
  },                                         //'prefix'
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {  path: 'posts', component: PostsComponent, resolve: {dataRequestPosts: PostResolveService},
  children: [
    {path: ':id', component: FullPostComponent}
  ]
  },
  // {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'comments', component: CommentsComponent, resolve: {dataRequestComments: CommentResolveService},
  children: [
    {path: ':id', component: FullCommentComponent}
  ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent,
    PostComponent,
    PostsComponent,
    FullPostComponent,
    CommentsComponent,
    CommentComponent,
    FullCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
