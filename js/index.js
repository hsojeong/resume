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
    
    $(this).parent().addClass('on')
    $(this).parent().siblings().removeClass('on')
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
    } else if ( sct>=sect2 && sct<sect3) {
        $('#menu li').eq(1).addClass('on').siblings().removeClass('on')
    } else if ( sct>=sect3 && sct<sect4 ) {
        $('#menu li').eq(2).addClass('on').siblings().removeClass('on')
    } else if (sct>=sect4 && sct<sect5) {
        $('#menu li').eq(3).addClass('on').siblings().removeClass('on')
    } else if (sct>=sect5) {
        $('#menu li').eq(4).addClass('on').siblings().removeClass('on')
    }
})


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