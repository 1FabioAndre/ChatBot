function saludar(nombre, edad){
    mensaje = "Hola";
    if(edad > 30){
        return mensaje + " Señor " + nombre;
    }
    else{
        return mensaje + " " + nombre;
    }
}

export default saludar;