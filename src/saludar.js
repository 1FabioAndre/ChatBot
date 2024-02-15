import esmayor from "./esmayor";

function saludar(nombre, edad){
    mensaje = "Hola";
    if(esmayor(edad) == true){
        return mensaje + " Sr " + nombre;
    }
    else{
        return mensaje + " " + nombre;
    }
}

export default saludar;