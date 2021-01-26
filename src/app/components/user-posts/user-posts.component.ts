import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {PostService} from '../../services/post/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  userId: number;
  username: string;
  posts: Post[];


  constructor(private userService: UserService, private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userId = +id;
      console.log({id});
    });
    this.userService.getUserById(this.userId).subscribe(({username}) => {
      this.username = username;
      console.log(username);
    })
    this.postService.getPostsOfSingleUser(this.userId).subscribe(value => this.posts = value);
  }

}
