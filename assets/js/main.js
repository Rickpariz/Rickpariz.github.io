$(document).ready(function() {
  $("#form").on("submit", function(e) {
    e.preventDefault();
    $("#sub").attr("disabled", true);
    var name = $(this).find("input[name='name']").val();
    var email = $(this).find("input[name='email']").val();
    var message = $(this).find("textarea[name='message']").val();
    // $.ajax({
    //   url: "http://formspree.io/ricardoferreirapariz@gmail.com",
    //   method: "POST",
    //   data: {message: message, name: name, email: email, _subject: "Portifolio"},
    //   dataType: "json",
    //   complete: function(response){
    //     console.log(response);
    //     iziToast.success({
    //       title: 'Ok',
    //       message: "Mensagem enviada, aguarde a resposta",
    //       icon: "fa fa-check"
    //     });
    //     $("#sub").attr("disabled", false);
    //     $("#form").each(function() {
    //       this.reset();
    //     });
    //   }
    // });

    $.post("https://formspree.io/ricardoferreirapariz@gmail.com", {
      message: message,
      name: name,
      email: email,
      _subject: "Portifolio"
    }).done(function(response) {
      console.log(response);
      iziToast.success({title: 'Ok', message: "Mensagem enviada, aguarde a resposta", icon: "fa fa-check"});
      $("#sub").attr("disabled", false);
      $("#form").each(function() {
        this.reset();
      });
    });

  });
});
