import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  dataArray:any=[]=[];
  agregarDatos(nombre:string, apellido:string, edad:string){
    //this.dataArray.push(nom:nombre,String(apellido),String(edad));
    this.dataArray.push({
      "nom": nombre, "ape":apellido,"edad":edad
    })
    console.log(this.dataArray);
  }
}
