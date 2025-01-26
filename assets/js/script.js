$(document).ready(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));



  $("#mostrarBoton").click(() => {

    $("#ocultado").toggleClass("d-none");
    $("#ocultado2").toggleClass("d-none");
    $("#ocultado3").toggleClass("d-none");
    $("#ocultado4").toggleClass("d-none");


    const isHidden = $("#ocultado").hasClass("d-none");
    if (isHidden) {


      $("#mostrarBoton").html('<i class="fa-solid fa-eye-slash"></i>');
    } else {

      $("#mostrarBoton").html('<i class="fa-solid fa-eye"></i>');
    }
  });

  $('#myModal').on('shown.bs.modal', () => {
    $('#myInput').trigger('focus');
  });


  const verificarCampos = () => {
    const campo1Value = document.getElementById('nombre').value;
    const campo2Value = document.getElementById('asunto').value;
    const campo3Value = document.getElementById('mensaje').value;
    document.getElementById('btnEnviar').disabled = !(campo1Value.trim() && campo2Value.trim() && campo3Value.trim());
  };

  document.getElementById('nombre').addEventListener('input', verificarCampos);
  document.getElementById('asunto').addEventListener('input', verificarCampos);
  document.getElementById('mensaje').addEventListener('input', verificarCampos);


  $("#form").submit((event) => {
    event.preventDefault();
    $('#exampleModal').modal('show');


 
    $('#nombre').val('');
    $('#asunto').val('');
    $('#mensaje').val('');

    $('#btnEnviar').prop('disabled', true);
  });


});
