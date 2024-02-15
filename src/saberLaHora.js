function saberLaHora(){
    // Crear un objeto de fecha
    var fechaActual = new Date();

    // Obtener horas, minutos y segundos
    var horas = fechaActual.getHours();

    if(horas >= "00" && horas < "12"){
        return "Buenos dias ";
    }
    else if(horas >= 12 && horas < "18"){
        return "Buenas tardes ";
    }
    else{
        return "Buenas noches ";
    }
}

export default saberLaHora;