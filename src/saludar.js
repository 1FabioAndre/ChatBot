import esmayor from "./esmayor";
import corroborarGenero from "./corroborarGenero";
import saberLaHora from "./saberLaHora";

function saludar(nombre, edad, genero){
    mensaje = saberLaHora();
    genero = corroborarGenero(genero);
    saberLaHora();
    if(esmayor(edad) == true){
        return mensaje + genero + nombre;
    }
    else{
        return mensaje + " " + nombre;
    }
}

export default saludar;