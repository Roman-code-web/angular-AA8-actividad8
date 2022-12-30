import { Component ,Output, EventEmitter} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  verificacion!:boolean;
  disabled=false;
  colorclass!:string;
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
  
  /*
  validacion(campo:HTMLInputElement){
    if(campo.tagName=="nombre" || campo==null || campo==undefined){
      this.colorclass="is-invalid";
      this.verificacion=false;
      this.disabled=true;
    }else{
      this.colorclass="is-valid";
      this.verificacion=true;
      this.disabled=false;
  }
  */

}