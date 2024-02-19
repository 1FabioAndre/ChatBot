function saberLaHora(idioma){
    // Crear un objeto de fecha
    var fechaActual = new Date();

    // Obtener horas, minutos y segundos
    var horas = fechaActual.getHours();

    if(horas >= "00" && horas < "12"){
        if(idioma == "Esp"){
            return "Buenos dias ";
        } 
        else{
            return "Good morning ";
        }
    }
    else if(horas >= 12 && horas < "18"){
        if(idioma == "Esp"){
            return "Buenas tardes ";
        } 
        else{
            return "Good afternoon ";
        }
    }
    else{
        if(idioma == "Esp"){
            return "Buenas noches ";
        } 
        else{
            return "Good night ";
        }
    }
}

export default saberLaHora;