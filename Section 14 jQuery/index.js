// alert("Hi");

// $("h1").css("color", "red");

//  By default it works for all buttons
// $("button").click(function(){
//     $("h1").css("color","green");
// });

// keypress listener
$("input").keypress(function(event){
    // console.log(event.key);
    $("h1").text(event.key);
});


// event listener. it is more common to use

// $("h1").on("mouseover",function(){
//     $("h1").css("color","yellow");
// });

// Adding and removing element using jQuery
// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

// $("button").remove();

// $("button")[2].remove();

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});

// jQuery mdn

