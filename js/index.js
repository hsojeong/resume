$(window).on('load', function(){
    var count = 0;
    function add() {
        count++
        $('.outer p').text(count+'%')
        if (count===100) {
            clearInterval(timer)
            $('.outer').fadeOut(300)
            $('html,body').scrollTop(0)
        }
    }
    var timer = setInterval(add, 10)
})



$('#menu li a').on('click',function(){
    let lino = $(this).parent().index()
    let sectdist = $('section').eq(lino).offset().top
    $('html, body').animate({
        scrollTop:sectdist
    }, 1000)
    return false
})


$('h1 a').on('click',function(){
    $('html,body').animate({scrollTop:0},1000)
    return false
})



var sect1, sect2, sect3, sect4 ,sect5 ;
function sect(){
sect1 = $('section').eq(0).offset().top
sect2 = $('section').eq(1).offset().top
sect3 = $('section').eq(2).offset().top
sect4 = $('section').eq(3).offset().top
sect5 = $('section').eq(4).offset().top
}
sect()

$(window).resize(function(){
    sect()
})


$(window).on('scroll', function(){
    let sct = $(this).scrollTop()
    if (sct>=0 && sct<sect2) {
        $('#menu li').eq(0).addClass('on').siblings().removeClass('on')
        $('h1').removeClass('on1')
        $('#sect4').removeClass('on')
        $('#menu').addClass('on3')
    } else if ( sct>=sect2 && sct<sect3) {
        $('#menu li').eq(1).addClass('on').siblings().removeClass('on')
        $('.myscore').css({
            height:'0%'
        })
        $('#sect3').removeClass('on')
        $('h1').addClass('on1')
        $('#sect4').removeClass('on')
        $('#menu').removeClass('on3')
    } else if ( sct>=sect3 && sct<sect4 ) {
        $('#menu li').eq(2).addClass('on').siblings().removeClass('on')
        if( !$('#sect3').hasClass('on')){
            $('#sect3').addClass('on')
            gragh(60, '.photo' ,15)
            gragh(70, '.illu' ,17)
            gragh(90, '.html' ,18)
            gragh(80, '.css' ,20)
            gragh(60, '.js' ,22)
            gragh(70, '.jq' ,24)}
        $('h1').removeClass('on1')
        $('#sect4').removeClass('on')
        $('#menu').removeClass('on3')
    } else if (sct>=sect4 && sct<sect5) {
        $('#menu li').eq(3).addClass('on').siblings().removeClass('on')
        $('h1').removeClass('on1')
        $('#sect4').addClass('on')
        $('#menu').removeClass('on3')
    } else if (sct>=sect5) {
        $('#menu li').eq(4).addClass('on').siblings().removeClass('on')
        $('h1').removeClass('on1')
        $('#sect4').removeClass('on')
        $('#menu').removeClass('on3')
    }
})
function gragh(jumsu, cname , time) {
    let num = 0;
    let stop = setInterval(function(){
        num++
        if( num<=jumsu ) {
            $(cname).css({
                height:num+'%'
            })
            $(cname).text(num+'%')
        } else {
            clearInterval(stop)
        }
    } ,time)
}


$('section').on('mousewheel',function(e, delta){
    if (delta>0) {
        var prevTop = $(this).prev().offset().top
        
        $('html,body').stop().animate({
            scrollTop:prevTop+'px'
        },300)
    } else if(delta<0){
        var nextTop = $(this).next().offset().top
        console.log(nextTop)
        $('html,body').stop().animate({
            scrollTop:nextTop+'px'
        },300)
    }
})

var sect2Near = $('#sect2').offset().top

$(window).on('scroll',function(){
    var sct = $(this).scrollTop()
    if (sct >= sect2Near) {
      $('#sect2').addClass('on')
  } else {
      $('#sect2').removeClass('on')
  }
})

$('#sect4 .port1 .slidegroup').slick({
    autoplay:false,
    dots:false,
    prevArrow:'<button class="arrleft"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="arrright"><p>Next Page <i class="fas fa-angle-right"></i></p></button>'
})
