

$(function(){


	// When the hamburger is clicked
	$('.hamburger').on('click touch', function(){

		$('nav').toggleClass('show');

	});


google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(-36.845927,-185.232318),
            zoom: 19,
            zoomControl: false,
            disableDoubleClickZoom: false,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable : false,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['Lads Barbers', 'Lads Barbers offer service with style, attention to detail & a friendly atmosphere for you to enjoy. Why not make a day out of your next haircut!', '(09) 111 1111', 'LadsBarbers@example.com', 'LadsBarbers.com', -36.8460075, 174.76772449999999, 'https://mapbuildr.com/assets/img/markers/default.png']
        ];
        for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
if (web.substring(0, 7) != "http://") {
link = "http://" + web;
} else {
link = web;
}
            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
     }
 function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());
           iw = new google.maps.InfoWindow();
           google.maps.event.addListener(marker, 'click', function() {
               if (infoWindowVisible()) {
                   iw.close();
                   infoWindowVisible(false);
               } else {
                   var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a><a href='"+link+"'' >"+web+"<a></div>";
                   iw = new google.maps.InfoWindow({content:html});
                   iw.open(map,marker);
                   infoWindowVisible(true);
               }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
 }
}

// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});
})


var downButtons = document.querySelectorAll('[data-target]'),
    animationTimer;

for (var i = 0; i < downButtons.length; i++) {
    downButtons[i].onclick = function(){
        scrollToDestination(document.querySelector(this.dataset.target));
        return false;
    }
}

function scrollToDestination(dest){
    var oldY = 0;

    animationTimer = setInterval(function(){

        if(window.scrollY < dest.offsetTop){
            window.scrollBy(0, 10);
            if(window.scrollY == oldY) stop();
            oldY = window.scrollY;
        }else{
            stop();
        }

    }, 1)

    function stop(){
        clearInterval(animationTimer);
        window.scrollTo(0, dest.offsetTop);
    }
}

var navButtons = document.querySelectorAll('[data-target]'),
    animationTimer,
    speed = 50;

for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].onclick = function(){
        scrollToDestination(document.querySelector(this.dataset.target));
        return false;
    }
}

function scrollToDestination(dest){
    var oldY = 0;

    animationTimer = setInterval(function(){

        if(window.scrollY < dest.offsetTop){
            window.scrollBy(0, speed);
            if(window.scrollY == oldY) stop();
            oldY = window.scrollY;
        }
        else if(window.scrollY > dest.offsetTop){
            window.scrollBy(0, -speed);
            if(window.scrollY < dest.offsetTop) stop();

        }
        else{
            stop();
        }

    }, 1)

    function stop(){
        clearInterval(animationTimer);
        window.scrollTo(0, dest.offsetTop);
    }
}



