var linkNav = document.querySelectorAll('[href^="#nav"]'),
    hamburger = document.getElementById('hamburger'),
    toggleBlock = document.getElementById('toggleBlock'),
    V = 0.5; // скорость
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].onclick = function(){
        var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1'),
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        toggleBlock.style.zIndex = -1;
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
        }
        return false;
    }
}

hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    toggleBlock.style.zIndex = 50;
});

window.addEventListener('scroll', function(e) {
    e.preventDefault();
    var nav = document.querySelectorAll('div[id^="nav"]');
    for (var i = 0; i < nav.length; i++) {
        document.querySelector('a[href="#' + nav[i].id + '"]').className=((1 >= nav[i].getBoundingClientRect().top && nav[i].getBoundingClientRect().top >= 1-nav[i].offsetHeight) ? 'red' : '');
    }
}, false);

function fade(id) {
    var element = document.getElementById(id);
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 100);
}

document.onload = fade('loader');