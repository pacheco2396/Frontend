import { RouterModule, Routes} from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {TimeAgoPipe} from 'time-ago-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LayoutComponent } from './components/layout/layout.component';

import { LoginComponent } from './components/login/login.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { RegisterComponent } from './components/register/register.component';

import { AlertComponent } from './components/alerts/alerts.component';

const routes: Routes = [
  { path: 'proyectos', component: ProyectosComponent},
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'tareas/:id', component: TareasComponent},
  { path: 'proyectos/:id', component: TareasComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    LayoutComponent,
    LoginComponent,
    TareasComponent,
    TimeAgoPipe,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
