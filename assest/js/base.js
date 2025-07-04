$(document).ready(function (ev) {
    $('#custom_carousel').on('slide.bs.carousel', function (evt) {
        $('#custom_carousel .controls li.active').removeClass('active');
        $('#custom_carousel .controls li:eq(' + $(evt.relatedTarget).index() + ')').addClass('active');
    });

});
$(document).ready(function () {


    $(".res-menu").click(function () {
        if ($("#header .items").hasClass("active")) {
            $("#header .items").removeClass("active");

        } else {
            $("#header .items").addClass("active");
        }

    });
    var xsection1 = $('#home').offset().top;
    $('.home').click(function () {
        $('html , body').animate({scrollTop: xsection1}, 2000);

    });
    var xsection2 = $('#gallery').offset().top;
    $('.gallery').click(function () {
        $('html , body').animate({scrollTop: xsection2}, 2000);

    });
    var xsection3 = $('#tour').offset().top;
    $('.tour').click(function () {
        $('html , body').animate({scrollTop: xsection3}, 2000);

    });
    var xsection4 = $('#food').offset().top;
    $('.menu').click(function () {
        $('html , body').animate({scrollTop: xsection4}, 2000);

    });
    var xsection5 = $('#about').offset().top;
    $('.about').click(function () {
        $('html , body').animate({scrollTop: xsection5}, 2000);

    });
    var xsection6 = $('#chef').offset().top;
    $('.chef').click(function () {
        $('html , body').animate({scrollTop: xsection6}, 2000);

    });
    var xsection7 = $('#give-time').offset().top;
    $('.give-time').click(function () {
        $('html , body').animate({scrollTop: xsection7}, 2000);

    });
});

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};