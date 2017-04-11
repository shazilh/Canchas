var canchaFutbol=document.getElementById('ponerCanchaFut');
var canchaBasquet=document.getElementById('ponerCanchaBasquet');
var canchaTenis=document.getElementById("ponerCanchaTenis");

var botonFutbol=document.getElementById("botonFut");
var botonTenis=document.getElementById('botonTenis');
var botonBasquet=document.getElementById('botonBasquet');

var botonReiniciar=document.getElementById('botonReiniciar');

botonFutbol.addEventListener("click",mostrarFutbol);
botonTenis.addEventListener("click",mostrarTenis);
botonBasquet.addEventListener("click",mostrarBasquet);

botonReiniciar.addEventListener("click",reiniciar);


function mostrarFutbol(){
  canchaFutbol.hidden=false;
  canchaBasquet.hidden=true;
  canchaTenis.hidden=true;
}

function mostrarBasquet(){
  canchaFutbol.hidden=true;
  canchaBasquet.hidden=true;
  canchaTenis.hidden=false;
}

function mostrarTenis(){
  canchaFutbol.hidden=true;
  canchaBasquet.hidden=false;
  canchaTenis.hidden=true;
}

function reiniciar(){
  canchaFutbol.hidden=true;
  canchaBasquet.hidden=true;
  canchaTenis.hidden=true;
}
