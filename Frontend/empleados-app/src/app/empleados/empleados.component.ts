import { Component, OnInit } from '@angular/core';
import { EmpleadosServiceService } from '../empleados-service.service'; 

@Component({
  selector: 'app-root',
  standalone: false,
  
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent implements OnInit {

  empleados: any[] = [];  // Lista de empleados
  nuevoEmpleado = {
    id: null,
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    empresa: '',
    sexo: true,  // Establece un valor predeterminado
    fechaNacimiento: '',
    curp: '',
    rfc: ''
  };

  constructor(private empleadosService: EmpleadosServiceService) {}

  ngOnInit(): void {
    this.obtenerEmpleados();  // Obtener la lista de empleados al iniciar
  }

  // Función para obtener la lista de empleados (GET)
  obtenerEmpleados() {
    this.empleadosService.getEmpleados().subscribe(
      (data: any[]) => {
        this.empleados = data;
      },
      (error) => {
        console.error('Error al obtener empleados:', error);
      }
    );
  }

  // Función para agregar o editar un empleado (POST o PUT)
  agregarEmpleado() {
    if (this.nuevoEmpleado.id) {
      // Si tiene id, actualizamos el empleado
      this.empleadosService.updateEmpleado(this.nuevoEmpleado).subscribe(
        (data) => {
          console.log('Empleado actualizado:', data);
          this.obtenerEmpleados();  // Refresca la lista de empleados después de actualizar
          this.resetFormulario();  // Limpiar el formulario
        },
        (error) => {
          console.error('Error al actualizar empleado:', error);
        }
      );
    } else {
      // Si no tiene id, lo agregamos
      this.empleadosService.createEmpleado(this.nuevoEmpleado).subscribe(
        (data) => {
          console.log('Empleado agregado:', data);
          this.obtenerEmpleados();  // Refresca la lista de empleados después de agregar
          this.resetFormulario();  // Limpiar el formulario
        },
        (error) => {
          console.error('Error al agregar empleado:', error);
        }
      );
    }
  }

  // Función para editar un empleado
  editarEmpleado(empleado: any) {
    this.nuevoEmpleado = { ...empleado };  // Copia los datos del empleado a nuevoEmpleado
  }

  // Función para eliminar un empleado
  eliminarEmpleado(id: number) {
    this.empleadosService.deleteEmpleado(id).subscribe(
      () => {
        console.log('Empleado eliminado');
        this.obtenerEmpleados();  // Refresca la lista después de eliminar
      },
      (error) => {
        console.error('Error al eliminar empleado:', error);
      }
    );
  }

  // Función para resetear el formulario
  resetFormulario() {
    this.nuevoEmpleado = {
      id: null,
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      empresa: '',
      sexo: true,
      fechaNacimiento: '',
      curp: '',
      rfc: ''
    };
  }
}