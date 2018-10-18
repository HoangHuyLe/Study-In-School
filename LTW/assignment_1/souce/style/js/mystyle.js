/**
 * Javascript for all file
 * 
 * Author: Le Hoang Huy
 * Last update: 17/10/2018
 */



// slider
jssor_1_slider_init = function () {

    var jssor_1_options = {
        $AutoPlay: 1,
        $SlideWidth: 720,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 50);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// Function open and close side bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



// jquery change background sidebar li
$(document).ready(function () {

    $('#menu li:nth-child(odd)').click(function () {
        $('.menu-li').css({
            "background-color": "#28a745"
        });
        $(this).css({
            "background-color": "green"
        });
    });

    $('#menu li:nth-child(even)').click(function () {
        $('.menu-li').css({
            "background-color": "#28a745",
        });
        $(this).css({
            "background-color": "green"
        });

    });


});

// jquery change color for megadrop
$(document).ready(function () {

    $('.megadrop ul li a').click(function () {
        $('.megadrop ul li a').css({
            "background-color": "white",
            "color": "#227087"
        });
        $(this).css({
            "background-color": "white"

        });
    });
});

// jquery change color nav tab content
$(document).ready(function () {

    $('.before-nav .nav a').click(function () {
        $('.before-nav .nav .nav-link').css({
            "background-color": "#f1f0f0",
            "color": "#007bff"
        });
        $(this).css({
            "background-color": "green",
            "color": "white"
        });
    });
});


