$(document).ready(function(){

  // Mobile Nav

  $('.i-nav').on("click", function(){

     $('nav ul').toggleClass('open');
  });

  //Image Opacity

  $('.light-box').css('opacity', '0.4');

  // Image Effects

  $('.lb1,.lb2,.lb3,.lb4,.lb5,.lb6').hover(function(){
    $(this).stop().animate({"opacity": "1"});
    }, function(){
    $(this).stop().animate({"opacity": "0.4"});
  });

  // Links To Buttons

  $('.bt1').click(function(){
    window.location = "#";
  });
  $('.bt2').click(function(){
    window.location = "../menu.html";
  });
  $('.bt3').click(function(){
    window.location = "https://www.instagram.com";
  });

  // SM Icon Effects

  $('.sm').mouseenter(function(){
    $(this).fadeOut();
    $(this).fadeIn();
  });

});
