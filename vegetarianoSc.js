$(document).on("ready", inicio);
function inicio(){
  $('#container img').on("click", abrirFull);
  $('#imgFull').on("click", cerrarFull);
}
function abrirFull(){
  //alert($(this).attr('alt'));
  var nombre = $(this).attr('alt') + "_full";
  var direccion = "images/" +  nombre + ".jpg";

  $('#imgFull').attr('src', direccion);
  $('#previa').fadeIn();
  $('#previa').on('click',function(){
    $(this).fadeOut();
});﻿
}
function cerrarFull(){
  $('#previa').fadeOut();
}
