import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@NgModule({
  declarations: [
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [EmpleadosComponent]
})
export class AppModule { }
