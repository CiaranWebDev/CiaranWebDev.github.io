$(document).on('click', '[data-modal-target]', function(){

      var button = $(this),
        target_modal_name = button.data('modal-target')
        modal  = $('[data-modal-name="'+target_modal_name+'"]')

      // show the target modal
      modal.addClass('show');

      // show the modal background
      $('.modal-bg')
        .css({
          'display': 'block',
          'opacity': 0
        })
        .animate({
          'opacity': 1
        }, 200)

      //
      return false
    })

    // when we click on anything with a data-modal-close attribute
    $(document).on('click', '[data-modal-close]', function(){
    
      // hide the modal
      $('[data-modal-name]').removeClass('show');

      // hide the background
      $('.modal-bg').animate({
        'opacity': '0'
      }, 200, function(){
        $(this).css('display', 'none')
      })

      // return false, so that if this click was on an <input>, <button> or <a> tag
      // it doesn't go anywhere
      return false
    })




$(document).ready(function(){

$("#work2").hide();
$("#work3").hide();
$("#work4").hide();
$("#work5").hide();
    // START BY HIDING THE VIDEOS DIV  
              // NOTE: USE ID NAMES NOT CLASS NAMES

    $("#cereal").click(function () { //CLICK ON THE LINK TO SHOW 1 DIV AND HIDE ANOTHER
      $("#work1").fadeIn(500);      //SHOW GALLERY   // FADE IN OVER 3 SECONDS
        $("#work2").hide();
        $("#work3").hide();
        $("#work4").hide();
        $("#work5").hide();
                  //HIDE VIDEOS  // FADE OUT OVER 3 SECONDS
        return false;
     }); //closes function
     
      $("#lfc").click(function () {   //CLICK ON THE LINK TO SHOW 1 DIV AND HIDE ANOTHER
      $("#work2").fadeIn(500);      //SHOW VIDEOS  // FADE IN OVER 3 SECONDS
        $("#work1").hide();
        $("#work3").hide();
        $("#work4").hide();
        $("#work5").hide();         //HIDE GALLERY  // FADE OUT OVER 3 SECONDS
        return false;
       }); //closes function

      $("#movie").click(function () {   //CLICK ON THE LINK TO SHOW 1 DIV AND HIDE ANOTHER
      $("#work3").fadeIn(500);      //SHOW VIDEOS  // FADE IN OVER 3 SECONDS
        $("#work1").hide(); 
        $("#work2").hide(); 
        $("#work4").hide(); 
        $("#work5").hide();         //HIDE GALLERY  // FADE OUT OVER 3 SECONDS
        return false;
       }); //closes function

      $("#lads").click(function () {   //CLICK ON THE LINK TO SHOW 1 DIV AND HIDE ANOTHER
      $("#work4").fadeIn(500);      //SHOW VIDEOS  // FADE IN OVER 3 SECONDS
        $("#work1").hide(); 
        $("#work2").hide(); 
        $("#work3").hide(); 
        $("#work5").hide();         //HIDE GALLERY  // FADE OUT OVER 3 SECONDS
        return false;
       }); //closes function

      $("#todo").click(function () {   //CLICK ON THE LINK TO SHOW 1 DIV AND HIDE ANOTHER
      $("#work5").fadeIn(500);      //SHOW VIDEOS  // FADE IN OVER 3 SECONDS
        $("#work1").hide(); 
        $("#work2").hide();
        $("#work3").hide();
        $("#work4").hide();
              //HIDE GALLERY  // FADE OUT OVER 3 SECONDS
        return false;
       }); //closes function


//  ADD & REMOVE CLASS NAMES ---------------------------------------------------------------------
  $("#cereal>a").addClass('selected')

    $("#cereal").click(function () {
  $("#cereal>a").addClass('selected');
  $("#nav_area_02>a").removeClass('selected');
  });//closes function
  
  $("#nav_area_02").click(function () {
  $("#nav_area_02>a").addClass('selected');
  $("#cereal>a").removeClass('selected');
  });//closes function

  $("#nav_area_03").click(function () {
  $("#nav_area_03>a").addClass('selected');
  $("#nav_area_02>a").removeClass('selected');
  });//closes function

  $("#nav_area_04").click(function () {
  $("#nav_area_04>a").addClass('selected');
  $("#nav_area_02>a").removeClass('selected');
  });//closes function

  $("#nav_area_05").click(function () {
  $("#nav_area_05>a").addClass('selected');
  $("#nav_area_02>a").removeClass('selected');
  });//closes function

});