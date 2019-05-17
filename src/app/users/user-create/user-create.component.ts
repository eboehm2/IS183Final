import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router,  ActivatedRoute} from '@angular/router';

@Component({
  selector: 'user-create',
  templateUrl: './beverage-create.component.html',
  styleUrls: ['./beverage-create.component.css']
})

export class UserCreateComponent implements OnInit {

  user: Object = {};

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }



ngOnInit() {
  this.user = {};
}

async createUser(user: Object) {
  const resp = await this.userService.addUser(user);
  if (resp) {
    this.router.navigate(['/users']);
  }
}

}
