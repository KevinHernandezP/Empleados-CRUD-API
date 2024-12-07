import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';
import { EmpleadosComponent } from './empleados/empleados.component';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [provideServerRoutesConfig(serverRoutes)],
  bootstrap: [EmpleadosComponent],
})
export class AppServerModule {}
