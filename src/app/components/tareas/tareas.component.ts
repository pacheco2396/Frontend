import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tareas } from 'src/app/models/tareas';
import { TareasService } from 'src/app/services/tareas.service';
import { NgForm } from '@angular/forms';
import { } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
  providers : [TareasService]
})
export class TareasComponent implements OnInit {
  public idProyecto: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tareasService: TareasService,
    public userService: UserService
  ) { }

  ngOnInit() {
    if (!this.userService.getUser()) {
      this.router.navigate(['login']);
    }
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.idProyecto = params.get('id');
        console.log(this.idProyecto);
      }
    });
    this.getTareas();
  }

  getTareas() {
    this.tareasService.getTareas(this.idProyecto)
      .subscribe(res => {
        console.log(res);
        this.tareasService.tareas = res as Tareas[];
      });

  }

  addTarea(form: NgForm) {

    if (form.value._id) {
      this.tareasService.putTarea(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getTareas();
        });
    } else {
      this.tareasService.postTarea(this.idProyecto, form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getTareas();
        });
    }
  }

  deleteTarea(_id: string) {
    this.tareasService.deleteTarea(_id)
      .subscribe(res => {
        this.getTareas();
      });

  }
  editTarea(tarea: Tareas) {
    this.tareasService.selectedTarea = tarea;
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.tareasService.selectedTarea = new Tareas();

      this.route.paramMap.subscribe(params => {
        if (params.has('id')) {
          this.idProyecto = params.get('id');
          console.log(this.idProyecto);
        }
      });
    }
  }

}
