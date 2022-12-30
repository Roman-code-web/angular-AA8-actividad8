import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  dataArray:any=[]=[];
  agregarDatos(nombre:string, apellido:string, edad:string){
    this.dataArray.push(String(nombre),String(apellido),String(edad))
    console.log(this.dataArray);
  }
}
