import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  user: User;
  userId: number;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {

    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation().extras.state as User;
      // console.log(this.router.getCurrentNavigation().extras.state);
      // console.log(history.state);
    })

  }

  showPostsOfUser(): void {
    console.log(this.user.id);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.userId = +value.id;
      // this.user = null;
      this.userService.getUserById(this.userId).subscribe(singleUser => this.user = singleUser)

    })
  }

}
