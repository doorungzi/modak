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

$(document).ready(function () {
    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;
  
    // 타이핑될 텍스트를 가져온다
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
    typingTxt = typingTxt.split(""); // 한글자씩 자른다.
    if (typingBool == false) {
      // 타이핑이 진행되지 않았다면
      typingBool = true;
      var tyInt = setInterval(typing, 100); // 반복동작
    }
 