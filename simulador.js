const idsSimulaciones = [];
const listaNegra = ["Bobo","Tonto","Apestoso","Banana"];


function validarUser() {
    var nombre = document.getElementById("inputNombre").value;
    var apellido = document.getElementById("inputApellido").value;
    var edad = parseFloat(document.getElementById("inputEdad").value);

    if (edad < 18) {
        alert("Por favor ingrese una edad válida!");
        return false;
    } else if (nombre === "" || apellido === "") {
        alert("Ingrese un dato en el nombre o apellido");
        return false;
    } else if (listaNegra.includes(nombre)){
            alert("Nombre no permitido!!" )
    } else {
        alert("Bienvenido " + nombre);
        document.getElementById("datosUser").style.display = "none";
        document.getElementById("datosPrestamo").style.display = "block";

        return false; 
    }
}

function calcularCuota(prestamo, tasaInteres, plazo) {
    const tasaMensual = tasaInteres / 12 / 100;
    const cuotaMensual = (prestamo * tasaMensual) + (prestamo / plazo);
    return cuotaMensual.toFixed(2);
}

function validarPrestamo() {
    var montoPrestamo = parseInt(document.getElementById("inputMonto").value);
    var tasaInteresAnual = parseInt(document.getElementById("inputPlazo").value);
    var plazoEnMeses = parseInt(document.getElementById("inputInteres").value);

    const cuotaMensual = calcularCuota(montoPrestamo, tasaInteresAnual, plazoEnMeses);

    const solicitudId = generarIdUnico();
        idsSimulaciones.push(solicitudId);
        alert("Su cuota mensual es de " + cuotaMensual + " y su id es " + solicitudId);

   
}

function generarIdUnico() {
    return Math.random();
}





const msjUsuarios = [];
    class MsjUser {

constructor(nombre, apellido, correo, mensaje) {

        this.nombre = nombre.toLowerCase();

this.apellido = apellido.toLowerCase();

this.correo = correo; 

        this.mensaje = mensaje;

    }

}

function obtenerDatos() {

const nombres = document.getElementById("nombres").value;

const apellidos = document.getElementById("apellidos").value;

   const correo = document.getElementById("correo").value;

const mensaje = document.getElementById("mensaje").value; 

const nuevoMensaje = new MsjUser(nombres, apellidos, correo, mensaje); 

msjUsuarios.push(nuevoMensaje);

alert("Datos ingresados:\nNombre: " + nombres + "\nApellido: " + apellidos + "\nMensaje: " + mensaje);

return false; 

}



    
    
