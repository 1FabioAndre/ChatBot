import esmayor from "./esmayor";
import corroborarGenero from "./corroborarGenero";

function saludar(nombre, edad, genero){
    mensaje = "Hola";
    genero = corroborarGenero(genero);

    if(esmayor(edad) == true){
        return mensaje + genero + nombre;
    }
    else{
        return mensaje + " " + nombre;
    }
}

export default saludar;