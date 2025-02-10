$(function(){
    $('.btn_open_forum').click(function(){
        $('.open_forum').addClass("on").parent().siblings().children().removeClass('on')
        // $(this).siblings
    });
    $('.btn_photo_forum').click(function(){
        $('.photo_forum').addClass("on").parent().siblings().children().removeClass('on')
    });
});
$(function(){
    $('.lnb li p').click(function(){
        $(this).addClass("btn_color").parent().siblings().children().removeClass('btn_color')
        // $(this).siblings
    });
});
$(function(){
    $('.popup_wrap').hide();
    $('.community_tab').click(function(){
        $('.popup_wrap').fadeIn(0);
    });
    $('.popup_close').click(function(){
        $('.popup_wrap').fadeOut(0);
    });
});