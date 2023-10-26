let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive"
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("figma");
        habilidades[3].classList.add("excel");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("templanza");
        habilidades[7].classList.add("responsable");
        habilidades[8].classList.add("proactiva");
        habilidades[9].classList.add("ingeniosa");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}
