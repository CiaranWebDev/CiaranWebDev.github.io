
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



