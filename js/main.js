$(function(){
  var SliderModule = (function(){
    var pb ={};
    pb.el = $('#slider');
    pb.items ={
      panel:pb.el.find('li')
    }
    //VARIABLES NECESARIAS
    var SliderInterval,
    currentSlider =0,
    nextSlider=1,
    lengthSlider=pb.items.panel.length;
    //INICIALIZAR
    pb.init=function(settings){
      this.settings = settings || {duration: 8000}
      var output='';
    //ACTIVAMOS NUESTRO slider
    SliderInit();
    for(var i = 0; i < lengthSlider; i++){
      if(i == 0){
        output +='<li class="active"></li>';
      }else {
        output +='<li></li>';

      }
    }


    //CONTROLES DEL SLIDER
    $('#slider-controls').html(output).on('click', 'li', function(e){
      var $this = $(this);
      if(currentSlider !== $this.index()){
      changePanel($this.index());
    };
    });
  }
    var SliderInit = function(){
      SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
      }
      pb.startSlider =function(){
        var panels =pb.items.panel,
        controls = $('#slider-controls li');
        if(nextSlider >= lengthSlider){
          nextSlider=0;
          currentSlider= lengthSlider-1;
        }
        //Efectos
        controls.removeClass('active').eq(nextSlider).addClass('active');
        panels.eq(currentSlider).fadeOut('slow');
        panels.eq(nextSlider).fadeIn('slow');

        //ACTUALZIAMOS NUESTROS DATOS
        currentSlider=nextSlider;
        nextSlider +=1;
      }
      //FUNCION PARA CONTROLES DEL Slider
      var changePanel =function(id){
        clearInterval(SliderInterval);
        var panels = pb.items.panel,
        controls =$('#slider-controls li');
        //COMPROBAMOS EL ID
        if(id >= lengthSlider){
          id=0;
        } else if (id < 0){
          id = lengthSlider-1;
        }
        //EFECTTOS
        controls.removeClass('active').eq(id).addClass('active');
        panels.eq(currentSlider).fadeOut('slow');
        panels.eq(id).fadeIn('slow');

        //ACTUALIZAMOS NUESTROS DATOS
        currentSlider= id;
        nextSlider=id+1;

//REACTIVAMOS SLIDER
SliderInit();
}


  return pb;
  }());
  SliderModule.init({duration: 3000});
});

//LOGINN

$(document).ready(function(){
  $('#login').hide();

  $('#open').click(function(){
    $('#login').slideToggle();
  })
});
