"use strict"
// window.addEventListener('load',() => {
//     $("#app").hide();
//     $("#loader").show();
//     setTimeout(() => {
//         $("#app").show();
//         $("#loader").hide();
//     },2000)
// });
$("#app").hide();
$("#loader").show();
$( window ).ready(function(){
    setTimeout(() => {
                $("#app").show();
                $("#loader").hide();
            },2000)
});

$(document).ready(function(){
    $(".btn1").click(function(){
        $(".btn2").hide();
        $(".btn3").hide();
    });
    $(".btn2").click(function(){
        $(".btn1").hide();
        $(".btn3").hide();
    });
    $(".btn3").click(function(){
        $(".btn2").hide();
        $(".btn1").hide();
    });
    $(".save").click(function(){
        $(".btn1").show();
        $(".btn2").show();
        $(".btn3").show();
    });
    $(".close").click(function(){
        $(".btn1").show();
        $(".btn2").show();
        $(".btn3").show();
    });
    $("#pointer").hide();
    $("#servicesTitle").click(function(){
        $("#services").fadeToggle();
    });
    $("h4").click(function(){
        $(".carousel-inner").slideToggle("slow");
        $(".carousel-control-next").hide();
        $(".carousel-control-prev").hide();
        $(".carousel-indicators").hide();
    });
});