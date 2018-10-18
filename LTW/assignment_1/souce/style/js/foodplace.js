/**
 * Javascript for only file food-place.html
 * 
 * Author: Le Hoang Huy
 * Last update: 17/10/2018
 */


// jquery change color for topnavContent
$(document).ready(function () {

    $('.topnavContent ul li a').click(function () {
        $('.topnavContent ul li a').css({
            "border-bottom-color":"lightgrey"
        });
        $(this).css({
            "border-bottom":"solid 1px",
            "border-bottom-color":"red"
        });
        $('.topnavContent ul li a').css({
            "color":"#007bff"
        });
        $(this).css({
            "color":"red"
        });
    });

});

function collapeNav() {
    var x = document.getElementById("topnavContent");
    if (x.className === "topnavContent") {
        x.className += " responsive";
    } else {
        x.className = "topnavContent";
    }
}