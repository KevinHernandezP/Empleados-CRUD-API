package gestion_empleados.Empleados_CRUD.model;

import jakarta.persistence.*;
import java.util.Date;
import java.util.concurrent.atomic.AtomicInteger;

@Entity
public class Empleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String numeroEmpleado;

    private String nombre;
    private String apellidoPaterno;
    private String apellidoMaterno;
    private String empresa;
    
    private String sexo;
    private Date fechaNacimiento;
    private String curp;
    private String rfc;

    // Definir una variable estática para manejar el contador
    private static final AtomicInteger contador = new AtomicInteger(0);

    // Método que se ejecuta antes de persistir la entidad
    @PrePersist
    public void generarNumeroEmpleado() {
        // Generamos el número de empleado con el formato EXXXX, incrementando en 10
        int numero = contador.addAndGet(10);
        String numeroEmpleado = String.format("E%04d", numero);  // Ejemplo: E0010
        this.numeroEmpleado = numeroEmpleado;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumeroEmpleado() {
        return numeroEmpleado;
    }

    public void setNumeroEmpleado(String numeroEmpleado) {
        this.numeroEmpleado = numeroEmpleado;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidoPaterno() {
        return apellidoPaterno;
    }

    public void setApellidoPaterno(String apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }

    public String getApellidoMaterno() {
        return apellidoMaterno;
    }

    public void setApellidoMaterno(String apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getCurp() {
        return curp;
    }

    public void setCurp(String curp) {
        this.curp = curp;
    }

    public String getRfc() {
        return rfc;
    }

    public void setRfc(String rfc) {
        this.rfc = rfc;
    }

    // Método toString para imprimir la entidad de manera legible
    @Override
    public String toString() {
        return "Empleado{" +
                "id=" + id +
                ", numeroEmpleado='" + numeroEmpleado + '\'' +
                ", nombre='" + nombre + '\'' +
                ", apellidoPaterno='" + apellidoPaterno + '\'' +
                ", apellidoMaterno='" + apellidoMaterno + '\'' +
                ", empresa='" + empresa + '\'' +
                ", sexo='" + sexo + '\'' +
                ", fechaNacimiento=" + fechaNacimiento +
                ", curp='" + curp + '\'' +
                ", rfc='" + rfc + '\'' +
                '}';
    }
}
