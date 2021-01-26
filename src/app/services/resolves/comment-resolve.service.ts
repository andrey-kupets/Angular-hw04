import { Injectable } from '@angular/core';
import {CommentService} from '../comment/comment.service';
import {Resolve} from '@angular/router';
import {Comment} from '../../models/Comment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<Comment[]>{

  constructor(private commentService: CommentService) { }

  resolve(): Observable<Comment[]> | Promise<Comment[]> | Comment[] {
    return this.commentService.getComments();
  }
}

