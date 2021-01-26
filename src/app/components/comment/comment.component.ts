import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/Comment';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Comment;
  constructor(private router: Router, private activatedroute: ActivatedRoute) { }

  goTo(): void {
    this.router.navigate([this.comment.id], {relativeTo: this.activatedroute, state: this.comment})
  }

  ngOnInit(): void {
  }

}
