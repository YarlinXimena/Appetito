$(function(){
  $('.btnAgregar').on('click', function () {
    var seleccion= $(this).attr('alt');
    var $ulLista;
    //si la lista html no existe entonces la agregamos
    if(!$('#divLista').find('ul').length) $('#divLista').append('<ul/>');

    	$ulLista=$('#divLista').find('ul');
      var $liNuevoNombre=$('<li/>').html('<a class="clsEliminarElemento">&nbsp;</a>'+ seleccion);
      $ulLista.prepend($liNuevoNombre);
  });
  $('.clsEliminarElemento').live('click',function(){
    //buscamos la lista
    var $ulLista=$('#divLista').find('ul');
    //buscamos el padre del boton (el tag li en el que se encuentra)
    var $liPadre=$($(this).parents().get(0));

    //eliminamos el elemento
    $liPadre.remove();
    //si la listaesta vacia entonces la eliminamos del dom
    if($ulLista.find('li').length==0) $ulLista.remove();
});
});
