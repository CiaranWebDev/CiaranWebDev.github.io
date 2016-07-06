
	$(".toggleNav").click(function() {
  $("#subnav").toggleClass("active");
  $(".toggleNavButton").toggleClass("active");
});






$(function(){


$(".fancybox").fancybox({	

wrapCSS : "fancybox-custom",
closeClick : true,
openEffect: 'elastic',                   
helpers : {title:{type:'inside'}, 


}
});

});