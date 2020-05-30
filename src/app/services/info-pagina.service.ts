import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada = false;
  equipo: any[] = [];

constructor( private http: HttpClient){
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo(){
      this.http.get('assets/data/data-pagina.json')
      .subscribe( resp => {
        this.cargada = true;
        this.info = resp;
      });
   }
   private cargarEquipo(){
    this.http.get('https://curso-angular-fe3e7.firebaseio.com/Equipo.json')
    .subscribe( (resp: any[]) => {
      this.equipo = resp;
     // console.log(resp);
    });
   }


}
