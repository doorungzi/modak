$(function(){
    $(".toggle_photo").hide()
    $(".toggle_else").hide()
    $(".btn_more").hide()
    $(".slide_toggle li:nth-child(1) .toggle_photo").show()
    $(".slide_toggle li:nth-child(1) .toggle_else").show()
    $(".slide_toggle li:nth-child(2) .btn_more").show()
    $(".slide_toggle li:nth-child(3) .btn_more").show()
    $(".slide_toggle li").click(function(){
        $(this).children(".toggle_photo").slideToggle()
        $(this).children().children(".toggle_else").slideToggle()
        $(this).siblings().children(".toggle_photo").slideUp()
        $(this).siblings().children().children(".toggle_else").slideUp()
        $(this).children().children(".btn_more").hide()
        $(this).siblings().children().children(".btn_more").slideDown()
    });
});
