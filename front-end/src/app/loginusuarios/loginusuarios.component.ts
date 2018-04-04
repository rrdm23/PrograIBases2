import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { Profesor } from '../profesor';
import { DataService } from '../data.service';

@Component({
  selector: 'app-loginusuarios',
  templateUrl: './loginusuarios.component.html',
  styleUrls: ['./loginusuarios.component.css'],
  providers: [DataService]
})
export class LoginusuariosComponent implements OnInit {

  constructor(private dataService: DataService) { }

    estudiantes: Estudiante[];
    profesores: Profesor[];

    listarEstudiantes(){
      this.dataService.listarEstudiantes().subscribe( ests => {
          this.estudiantes = ests;
          //console.log(this.estudiantes);
	  });
	}
	
	listarProfesores(){
		this.dataService.listarProfesores().subscribe( profs => {
			this.profesores = profs;
			//console.log(this.profesores);
		});
	}
	
	validarUsuario(form){
		console.log(form.value.tipo);
		if (form.value.tipo == "1"){
			for (var i = 0; i < this.estudiantes.length; i++){
				console.log("i="+this.estudiantes[i].carnet+"vs."form.value.carnet);
				if (this.estudiantes[i].carnet == form.value.carnet && this.estudiantes[i].password == form.value.password){
					console.log("Estudiante existe")
				}
			}
		}
		else{
			for (var i = 0; i < this.profesores.length; i++){
				if (this.profesores[i].carnetprof == form.value.carnet && this.profesores[i].password == form.value.password){
					console.log("Profesor existe")
				}
			}			
		}
		console.log("Fuera");
	}

  
  ngOnInit() {
	  this.listarEstudiantes();
	  this.listarProfesores();
  }

}
