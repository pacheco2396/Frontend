import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers : [UserService]
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.deleteUser();
  }

  validarUser(form: NgForm) {
    this.userService.postValidUser(form.value)
        .subscribe(res => {
          if (res === 1) {
            this.userService.setUser(form.value.email);
            this.router.navigate(['proyectos']);
          }
        });
  }

}
