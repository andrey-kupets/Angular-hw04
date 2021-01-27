import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.css']
})
export class SelectedPostComponent implements OnInit {

  @Input()
  post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
