import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  constructor(private activatedRoute: ActivatedRoute) {
    // tslint:disable-next-line:no-shadowed-variable
    this.activatedRoute.data.subscribe(value => this.posts = value.dataRequestPosts);
    // console.log(activatedRoute.data);
  }

  ngOnInit(): void {
  }

}
