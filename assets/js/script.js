const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//Ocultar card
$(document).ready(function(){
   
    $("#clc").click(function(){
     
      $("#ocultado").toggle();
    });
  });

  $(document).ready(function(){
   
    $("#clc2").click(function(){
     
      $("#ocultado2").toggle();
    });
  });
  
  $(document).ready(function(){
   
    $("#clc3").click(function(){
     
      $("#ocultado3").toggle();
    });
  });
  
  $(document).ready(function(){
   
    $("#clc4").click(function(){
     
      $("#ocultado4").toggle();
    });
  });
  

  //Boton para mostrar cards ocultas

  $(document).ready(function(){
    $("#mostrarBoton").click(function(){
      $("#ocultado").toggle();
    });
  });
  $(document).ready(function(){
    $("#mostrarBoton").click(function(){
      $("#ocultado2").toggle();
    });
  });
  $(document).ready(function(){
    $("#mostrarBoton").click(function(){
      $("#ocultado3").toggle();
    });
  });

  $(document).ready(function(){
    $("#mostrarBoton").click(function(){
      $("#ocultado4").toggle();
    });
  });


//Modal
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  
