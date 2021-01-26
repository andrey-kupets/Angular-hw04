import { Component, OnInit } from '@angular/core';
import {Comment} from '../../models/Comment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.comments = value.dataRequestComments);
    console.log(activatedRoute);
  }

  ngOnInit(): void {
  }

}
