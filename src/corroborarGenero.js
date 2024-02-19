
function corroborarGenero(genero, idioma){
    if(idioma == "Esp"){
        if(genero == "M"){
            return " Sr. "
        }
        else{
            return " Sra. "
        }
    } else {
        if(genero == "M"){
            return " Mr. "
        }
        else{
            return " Miss "
        }
    }
    
}

export default corroborarGenero;
