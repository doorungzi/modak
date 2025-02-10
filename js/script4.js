$(function(){
    $('.btn2').click(function(){
        $(this).css('font-weight', 'bold').siblings().css('font-weight', '300')
        $('.mag_pg1').hide()
        $('.mag_pg2').show();
    });
    $('.btn1').click(function(){
        $(this).css('font-weight', 'bold').siblings().css('font-weight', '300')
        $('.mag_pg2').hide()
        $('.mag_pg1').show();
    });

});