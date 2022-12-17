let menuVisible = false;
//Funcion para mostrar u ocultar menu
function mostrarOcultarMen(){
    if(menuVisible){
        document.getElementById("#nav").classList="";
        menuVisible =false;
    }else{
        document.getElementById("#nav").classList="responsive";
        menuVisible=true;
    }
}
function seleccionar(){
    document.getElementById("#nav").classList="";
    menuVisible = false;
}
