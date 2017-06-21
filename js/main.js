$(document).ready(function(){
  console.log("foi");
  // material kit
  // Init Material scripts for buttons ripples, inputs animations etc, more info on the next link https://github.com/FezVrasta/bootstrap-material-design#materialjs
  $.material.init();

  $("#form").on("submit", function(e){
    e.preventDefault();
    $("#sub").attr("disabled", true);
    console.log("foi");
    var nome = $("#nome").val();
    var message = $("#message").val();
    var email = $("#email").val();
    $.ajax({
      url: "http://formspree.io/ricardoferreirapariz@gmail.com",
      method: "POST",
      data: {message: message, name: nome, email: email, _subject: "Portifolio"},
      dataType: "json",
      complete: function(){
        iziToast.success({
          title: 'Ok',
          message: "Mensagem enviada, aguarde a resposta",
          icon: "fa fa-check"
        });
        $("#sub").attr("disabled", false);
        $("#form").each(function() {
          this.reset();
        });
      }
    });
  });
});
