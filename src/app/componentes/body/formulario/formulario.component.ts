import { Component ,Output, EventEmitter} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  dataArray:any=[]=[];
  @Output() onEnviarDatos =  new EventEmitter();

  agregarDatos(nombre:string, apellido:string, edad:string){
    //this.dataArray.push(nom:nombre,String(apellido),String(edad));
    this.dataArray.push({
      "nom": nombre, "ape":apellido,"edad":edad
    })
    this.onEnviarDatos.emit(this.dataArray);
    Swal.fire({
      icon: 'success',
      title: 'Datos Registrados',
    })
  }
}