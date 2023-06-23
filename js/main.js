function circulo(){
    const figura=document.getElementById("figura");
    figura.classList.toggle("circulo");
}
function rectangulo(){
    const elemento=document.getElementById("figura");
    elemento.classList.toggle("rectangulo");
}
function panel_lateral(){
    const elemento = document.getElementById("panel-lateral");

    elemento.classList.toggle("activo");
    elemento.classList.toggle("close")
}
function panel_superior(){
    const elemento = document.getElementById("panel-superior");

    elemento.classList.toggle("activo");
    elemento.classList.toggle("close");
}

function fondo(){
    const elemento = document.getElementById("body");

    elemento.classList.toggle("fondo");
}