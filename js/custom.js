/* Add your custom JavaScript code */

$(document).ready(function(){
    if($('body').width()>800){
     $(window).scroll(function () { 
        if($(window).scrollTop() >150){
            $('#header').css({background:'#fff'});
        }
        else{
            $('#header').css({background:'rgba(255,255,255,0.7)'});
        }
    });}
});