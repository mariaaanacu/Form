$(document).ready(function() {
  // Animarea titlului paginii
  $('.title').addClass('animate__animated animate__fadeInDown');

  // Adăugarea animațiilor la formular
  $('.user-details').addClass('animate__animated animate__fadeInLeft');
  $('.gender-details').addClass('animate__animated animate__fadeInRight');
  $('.button').addClass('animate__animated animate__fadeInUp');

  // Validarea formularului
  $('form').submit(function(e) {
    e.preventDefault(); // Opriți trimiterea formularului
    // Verificați dacă toate câmpurile sunt completate
    if ($('#name').val() === '' || $('#username').val() === '' || $('#email').val() === '' || $('#number').val() === '' || $('#pass').val() === '' || $('#pass1').val() === '') {
      alert('Completați toate câmpurile!');
    } else {
      alert('Formularul a fost trimis cu succes!');
    }
  });

  // Modificarea stilului paginii
  $('.title').css('color', '#FF5733');
  $('.input-box input').css({
    'border': '2px solid #FF5733',
    'padding': '10px'
  });
});