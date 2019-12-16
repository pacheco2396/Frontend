import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers : [UserService]
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  addUser(form: NgForm) {
    if (form.value.password === form.value.conPassword) {
    this.userService.postUser(form.value)
        .subscribe(res => {
          this.router.navigate(['login']);
        });
  }
}

}
