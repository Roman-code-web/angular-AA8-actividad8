import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { TablaComponent } from './body/tabla/tabla.component';
import { FormularioComponent } from './body/formulario/formulario.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    TablaComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ]
})
export class ComponentesModule { }
