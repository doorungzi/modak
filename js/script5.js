$(function(){
    $('.list_btn li p').click(function(){
        $(this).addClass("on").parents().siblings().children().removeClass('on')
    });
});

$(function(){
    $('.gear_grid').hide()
    $('.accesory_grid').hide();
    $('.btn1').click(function(){
        $('.apparel_grid').show()
        $('.gear_grid').hide()
        $('.accesory_grid').hide();
    });
    $('.btn2').click(function(){
        $('.apparel_grid').hide()
        $('.gear_grid').show()
        $('.accesory_grid').hide();
    });
    $('.btn3').click(function(){
        $('.apparel_grid').hide()
        $('.gear_grid').hide()
        $('.accesory_grid').show();
    });
    
});