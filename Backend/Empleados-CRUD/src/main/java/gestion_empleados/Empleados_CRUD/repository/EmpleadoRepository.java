package gestion_empleados.Empleados_CRUD.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gestion_empleados.Empleados_CRUD.model.Empleado;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
    // agregar métodos adicionales si es necesario, como búsqueda por nombre
}
