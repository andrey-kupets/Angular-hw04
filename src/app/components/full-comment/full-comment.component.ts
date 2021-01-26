import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-full-comment',
  templateUrl: './full-comment.component.html',
  styleUrls: ['./full-comment.component.css']
})
export class FullCommentComponent implements OnInit {

  comment: Comment;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.comment = this.router.getCurrentNavigation().extras.state as Comment
    })
    // console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void {
  }

}
