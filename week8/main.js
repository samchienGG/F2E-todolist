// $('.opening').delay(6250).fadeOut();

// $('.page1_content .btn').on('click', function () {
//     $('.page1_content').fadeOut();
//     $('.page1_graph > *').fadeOut();
//     $('.page1_graph').delay(2000).css({
//         width: '100%'
//     })
//     // $('.page1_wrap').delay(2000).css({
//     //     width: '0%'
//     // });
// });
// $('.page1').delay(6250).fadeIn(function() {
//     $(this).css({display:'flex'})
//     animation()
// });


var $star = $('.opening .star');
var $circle = $('.opening .circle');
var $ract = $('.opening .ract');

var screenConfig = {
    opening: {
        duration: 5,
        phase2Duratiin: 1.6
    }
}

opening();

function opening() {
    // 旋轉
    TweenLite.to($star, screenConfig.opening.duration, { rotation: 360 });
    TweenLite.to($circle, screenConfig.opening.duration, { rotation: -360 });
    TweenLite.to($ract, screenConfig.opening.duration, { rotation: -360 });
    // 放大
    TweenLite.to($circle, screenConfig.opening.duration / 2, { scale: 1.1 });
    TweenLite.to($circle, screenConfig.opening.duration / 2, { scale: 1, delay: screenConfig.opening.duration / 2 });

    TweenLite.to($ract, .6, { scale: 7, delay: screenConfig.opening.duration + 0.25 });
    TweenLite.to($circle, .6, { scale: 7, delay: screenConfig.opening.duration + .5 });
    TweenLite.to($star, .6, {
        scale: 10, delay: screenConfig.opening.duration + .75, onComplete: function () {
            $('.opening').fadeOut();
            animation_page1();
        }
    })
}
var $page1 = $('.page1');
var $page2 = $('.page2');
var $body = $('body');
function animation_page1() {
    
    $page1.css({ display: 'flex' }).animate({ opacity: 0 }, 500, function () {
        $page1.animate({ opacity: 1 }, 500)
    })
    var $page1_graph = $('.page1_graph');
    TweenLite.to($page1_graph, 2, { css: { left: '0%', ease: Power2.easeOut } });

    var $square = $('.page1_graph .square');
    var $cycle = $('.page1_graph .cycle');
    var $triangle = $('.page1_graph .triangle');
    TweenLite.to($square, 1, { css: { top: '69px', ease: Power2.easeOut }, delay: 2 });
    TweenLite.to($cycle, 1, { css: { bottom: '-60px', ease: Power2.easeOut }, delay: 2 });
    TweenLite.to($triangle, 1, { css: { top: '220px', ease: Power2.easeOut }, delay: 2 });

    TweenLite.to($square, 4, { rotation: '+=360', delay: 3 });
    TweenLite.to($triangle, 4, { rotation: '-=360', delay: 3 });
    TweenLite.to($cycle, 4, { css: { x: '+=20', y: '+=30' }, delay: 3 });

    $('.page1_content .btn').on('click', function (e) {
        e.preventDefault();
        $('.page1_content').animate({ opacity: 1 }, 500, function () {
            $('.page1_content').animate({ opacity: 0 }, 500);
            $('.page1_content').fadeOut(500);
            $('.page1_graph > *').fadeOut(500);
            $('.page1_graph').animate({ width: '100%' }, 500);
            $('.page1_wrap').animate({ width: '0%' }, 500);
            animation_page2();
        })
    })

}

function animation_page2() {
    $body.css({'background-color':'#0027C8'});
    $page2.delay(500).animate({ opacity: 0 }, 500, function () {
        $page2.css({ display: 'flex' }).animate({ opacity: 1 }, 500)
    })
    var $page2_graph = $('.page2_graph');
    TweenLite.to($page2_graph, 2, { css: { left: '0%', ease: Power2.easeOut }, delay: 1 });

    var $square = $('.page2_graph .square');
    var $cycle = $('.page2_graph .cycle');
    var $triangle = $('.page2_graph .triangle');
    TweenLite.to($square, 1, { css: { top: '300px', ease: Power2.easeOut }, delay: 3 });
    TweenLite.to($cycle, 1, { css: { bottom: '200px', ease: Power2.easeOut }, delay: 3 });
    TweenLite.to($triangle, 1, { css: { top: '50px', ease: Power2.easeOut }, delay: 3 });

    TweenLite.to($square, 4, { rotation: '+=360', delay: 4 });
    TweenLite.to($triangle, 4, { rotation: '-=360', delay: 4 });
    TweenLite.to($cycle, 4, { css: { x: '+=20', y: '+=30' }, delay: 4 });
    
    $('.page2_content .btn').on('click', function (e) {
        e.preventDefault();
        $('.page2_content').animate({ opacity: 1 }, 500, function () {
            $('.page2_content').animate({ opacity: 0 }, 500);
            $('.page2_content').fadeOut(500);
            $('.page2_graph > *').fadeOut(500);
            $('.page2_graph').animate({ width: '100%' }, 500);
            $('.page2_wrap').animate({ width: '0%' }, 500);
            animation_page3();
            $page1.remove();
        })
    })
}

function animation_page3() {
    $body.css({'background-color':'#FF3C82'});
    var $page3 = $('.page3');
    $page3.delay(500).animate({ opacity: 0 }, 500, function () {
        $page3.css({ display: 'flex' }).animate({ opacity: 1 }, 500)
    })
    var $page3_graph = $('.page3_graph');
    TweenLite.to($page3_graph, 2, { css: { left: '0%', ease: Power2.easeOut }, delay: 1  });

    var $square = $('.page3_graph .square');
    var $cycle = $('.page3_graph .cycle');
    var $triangle = $('.page3_graph .triangle');
    TweenLite.to($square, 1, { css: { top: '300px', ease: Power2.easeOut }, delay: 3 });
    TweenLite.to($cycle, 1, { css: { bottom: '200px', ease: Power2.easeOut }, delay: 3 });
    TweenLite.to($triangle, 1, { css: { top: '50px', ease: Power2.easeOut }, delay: 3 });

    TweenLite.to($square, 4, { rotation: '+=360', delay: 4 });
    TweenLite.to($triangle, 4, { rotation: '-=360', delay: 4 });
    TweenLite.to($cycle, 4, { css: { x: '+=20', y: '+=30' }, delay: 4 });
    
    $('.page3_content .btn').on('click', function (e) {
        e.preventDefault();
        $('.page3_content').animate({ opacity: 1 }, 500, function () {
            $('.page3_content').animate({ opacity: 0 }, 500);
            $('.page3_content').fadeOut(500);
            $('.page3_graph > *').fadeOut(500);
            $('.page3_graph').animate({ width: '100%' }, 500);
            $('.page3_wrap').animate({ width: '0%' }, 500);
            animation_page4();
            $page2.remove();
        })
    })
}

function animation_page4() {
    var $page3 = $('.page3');
    var $page4 = $('.page4');
    
    $page4.delay(1000).animate({ opacity: 0 }, 500, function () {
        $page4.css({ display: 'block' }).animate({ opacity: 1 }, 500)
        $page3.delay(2000).fadeOut();
        $body.css({'overflow':'auto','background-color':'#1469FF'});
    })

    var total = 50;
    var colors = ['white', 'black', '#0027C8']

    var controller = new ScrollMagic.Controller();

    for( var i = 0; i<total; i++) {
        var size = Math.floor(Math.random()*200 + 100)
        var color = colors[i%3]
        $('.page4').append(`<div class='cycle cycle${i}' style='background:${color};position:fixed;bottom:-300px;width:${size}px;height:${size}px'>`)
    }
  
    for(var i = 0; i<total; i++) {
        var topP = getRandom(300, 500)
        var left = getRandom(1000, 3000)
        new ScrollMagic.Scene({triggerElement: ".trigger1" + ((i % 4) + 1), duration: Math.random()*3000 + 500})
          .setTween(TweenLite.to($('.cycle' + i), 10, {css: {top: `-${topP}px`, left: `${left}px`}}))
          .addTo(controller);
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() == ($(document).height() - $(window).height())) {
            $page4.fadeOut();
            animation_page5();
        }
    })
    
}
function getRandom(lower, upper) {
    return Math.random()*(upper - lower) + lower
}
function animation_page5() {
    var $page5 = $('.page5');
    $page5.fadeIn();
}