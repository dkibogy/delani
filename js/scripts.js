
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

$(".card").hover(function(){
    $(this).children(".card-1").fadetoggle(2000);
});


//contact us form
//pop-up thank you 

$(button).click(function(popup){
    var client = document.getElementById("name").val;
    alert("Hey" + "client" + "Thanks, we have recieved your message" + "we shall respond to you ASAP");
    popup.preventDefault();

})
