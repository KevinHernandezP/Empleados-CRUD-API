import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // El servicio es inyectado a nivel global
})
export class EmpleadosServiceService {

  private apiUrl = 'http://localhost:8080/api/empleados';

  constructor(private http: HttpClient) { }

  // Obtener empleados
  getEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Crear empleado
  createEmpleado(empleado: any): Observable<any> {
    return this.http.post(this.apiUrl, empleado);
  }

  // Eliminar empleado
  deleteEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Actualizar empleado
  updateEmpleado(empleado: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${empleado.id}`, empleado);
  }
}
