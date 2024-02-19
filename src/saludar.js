import esmayor from "./esmayor";
import corroborarGenero from "./corroborarGenero";
import saberLaHora from "./saberLaHora";

function saludar(nombre, edad, genero, idioma){
    mensaje = saberLaHora(idioma);
    genero = corroborarGenero(genero, idioma);
    if(esmayor(edad) == true){
        return mensaje + genero + nombre;
    }
    else{
        return mensaje + " " + nombre;
    } 
}

export default saludar;