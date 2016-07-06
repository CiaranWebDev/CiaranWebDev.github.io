


$(document).ready(function(){
	

$(".toggleNav").click(function() {
$("#subnav").toggleClass("active");
$(".toggleNavButton").toggleClass("active");
});

});

$(document).ready(function(){
$(".fancybox").fancybox({	

wrapCSS : "fancybox-custom",
closeClick : true,
openEffect: 'elastic',                   
helpers : {title:{type:'inside'}, }
});
});
