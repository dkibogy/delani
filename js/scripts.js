
// what we do;
$(document).ready(function(){
    $("#devLogo").click(function(){
        $("#toggleDevLogo").animate({
            height: "toggle"
        });
    });
});

$(document).ready(function(){
    $("#designLogo").click(function(){
        $("#toggleDesignLogo").animate({
            height: "toggle"
        });
    });
});

$(document).ready(function(){
    $("#productLogo").click(function(){
        $("#toggleProductLogo").animate({
            height: "toggle"
        });
    });
});

// porfolio

$(document).ready(function(){
    $("#card1").click(function(){
        $("#toggleCard1").animate({
            height: "toggle"
        });
    });
});
$(document).ready(function(){
    $("#card2").click(function(){
        $("#togglecard2").animate({
            height: "toggle"
        });
    });
});
$(document).ready(function(){
    $("#card3").click(function(){
        $("#togglecard3").animate({
            height: "toggle"
        });
    });
});
$(document).ready(function(){
    $("#card4").click(function(){
        $("#togglecard4").animate({
            height: "toggle"
        });
    });
});
$(document).ready(function(){
    $("#card5").click(function(){
        $("#togglecard5").animate({
            height: "toggle"
        });
    });
});
$(document).ready(function(){
    $("#card6").click(function(){
        $("#togglecard6").animate({
            height: "toggle"
        });
    });
});
$(document).ready(function(){
    $("#card7").click(function(){
        $("#togglecard7").animate({
            height: "toggle"
        });
    });
});
$(document).ready(function(){
    $("#card8").click(function(){
        $("#togglecard8").animate({
            height: "toggle"
        });
    });
});




//contact us form
//pop-up thank you 

$(button).click(function(popup){
    var client = document.getElementById("name").val;
    alert("Hey" + "client" + "Thanks, we have recieved your message" + "we shall respond to you ASAP");
    popup.preventDefault();

})
