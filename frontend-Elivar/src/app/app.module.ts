import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { Routes, RouterModule, Router} from '@angular/router'

import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { FormEstudianteComponent } from './estudiantes/form-estudiante.component';

const routes:Routes = [
  {path:'', redirectTo:'/estudiantes', pathMatch:'full'},
  {path:'estudiantes', component:EstudiantesComponent},
  {path:'estudiantes/form', component:FormEstudianteComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    FormEstudianteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
