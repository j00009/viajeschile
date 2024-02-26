$(document).ready(function(){
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//Ocultar card

   
    $("#clc").click(function(){
     
      $("#ocultado").toggle();
    });
 

 
   
    $("#clc2").click(function(){
     
      $("#ocultado2").toggle();
    });

  

    $("#clc3").click(function(){
     
      $("#ocultado3").toggle();
    });


   
    $("#clc4").click(function(){
     
      $("#ocultado4").toggle();
    });

  

  //Boton para mostrar cards ocultas


    $("#mostrarBoton").click(function(){
      $("#ocultado").toggle();
    });


    $("#mostrarBoton").click(function(){
      $("#ocultado2").toggle();
    });

  
    $("#mostrarBoton").click(function(){
      $("#ocultado3").toggle();
    });
 


    $("#mostrarBoton").click(function(){
      $("#ocultado4").toggle();
    });



//Modal
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  
       function verificarCampos() {
        var campo1Value = document.getElementById('nombre').value;
        var campo2Value = document.getElementById('asunto').value;
        var campo3Value = document.getElementById('mensaje').value;
        if (campo1Value.trim() !== '' && campo2Value.trim() !== ''&& campo3Value.trim() !== '') {
          document.getElementById('btnEnviar').disabled = false;
        } else {
          document.getElementById('btnEnviar').disabled = true;
        }
      }
      document.getElementById('nombre').addEventListener('input', verificarCampos);
      document.getElementById('asunto').addEventListener('input', verificarCampos);
      document.getElementById('mensaje').addEventListener('input', verificarCampos);

})