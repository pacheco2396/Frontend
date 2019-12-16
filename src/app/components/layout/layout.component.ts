import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers : [UserService]
})
export class LayoutComponent implements OnInit {
  public usuariologeado = false;
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(){
    if (this.userService.getUser()) {
      this.usuariologeado = true;
    }
  }

  singOut() {
    console.log('entras');
    this.usuariologeado = false;
    this.userService.deleteUser();
    this.router.navigate(['login']);
  }

}
