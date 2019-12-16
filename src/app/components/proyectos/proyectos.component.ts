import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';
import { NgForm } from '@angular/forms';
import { Proyectos } from 'src/app/models/proyectos';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
  providers : [ProyectosService, UserService],

})
export class ProyectosComponent implements OnInit {
  public usuario = '';
  constructor(private router: Router, private proyectosService: ProyectosService, private userService: UserService ) { }

  ngOnInit() {
    
    if (!this.userService.getUser()) {
      this.router.navigate(['login']);
    }
    this.usuario = this.userService.getUser();
    this.getProyectos();
  }

  addProyecto(form: NgForm) {

    if (form.value._id) {
      this.proyectosService.putProyecto(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getProyectos();
        });
    } else {
      this.proyectosService.postProyecto(form.value, this.usuario)
        .subscribe(res => {
          this.resetForm(form);
          this.getProyectos();
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.proyectosService.selectedProyecto = new Proyectos();
    }
  }

  getProyectos() {
    this.proyectosService.getProyectos(this.usuario)
      .subscribe(res => {
        this.proyectosService.proyectos = res as Proyectos[];
      });

  }

  editProyecto(proyecto: Proyectos) {
    this.proyectosService.selectedProyecto = proyecto;
  }

  deleteProyecto(_id: string) {
    this.proyectosService.deleteProyecto(_id)
      .subscribe(res => {
        this.getProyectos();
      });

  }

}
