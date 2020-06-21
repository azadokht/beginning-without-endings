// TODO: add mouse over
// TODO: check op safari
// TODO: multiple
var space = 10;
var speed = 2;
var direction = "left";

// no need to change anything below this line
/* --------------------------------- */

//var modifier = (direction === "left") ? -1 : 1;


// create a ticker div
var tickerdiv = $("<div>").attr("id","ticker");
tickerdiv.css({
    "display":"inline-block",
    "white-space": "nowrap",
});

// add it to the container
$("#ticker-container").append(tickerdiv);
$("#ticker-container").css("overflow","hidden");

// move the ticker-text to the tickerdiv
$("#ticker-text").css({
    "display":"inline-block",
    "position":"absolute"
});
tickerdiv.append(  $("#ticker-text") );


// add ticker-texts untill the ticker-container is filled
//var i = 1;
var xpos    = $("#ticker-text").width() + space;
var totalw  = $("#ticker-text").width() + $("#ticker-container").width();
while (xpos < totalw ) {
    var clone = $("#ticker-text").clone();
    //clone.addClass("class-" + i);
    clone.css({
        "left":xpos,
      //  "color": '#'+Math.floor(Math.random()*16777215).toString(16)
    });
    tickerdiv.append( clone );

    xpos += clone.width() + space;
   // i++;
}
//$("#ticker-text").addClass("class-0");

animate();

function animate() {

    if (direction === "left") {
        var farright = (tickerdiv.children().length-1) * ($("#ticker-text").width() + space) + space;

        tickerdiv.children().each(function(){
            var pos = $(this).position().left - speed;
            $(this).css("left",pos);
            if ($(this).position().left < -($("#ticker-text").width())) {
                $(this).css("left",farright);
            }
        });
    }
    else {
        //var farleft = tickerdiv.children().first().position().left;
        var farleft = 0;

        tickerdiv.children().each(function(){
            var pos = $(this).position().left + speed;

            //console.log(pos)
            $(this).css("left",pos);
            if ($(this).position().left > $("#ticker-container").width()) {
                $(this).css("left", farleft - $("#ticker-text").width() - space );
                farleft = $(this).position().left;
            }
        });
    }


    window.requestAnimationFrame(animate);
}



// intro

// // activate the close button
// $(".close-button").click(function(){
// 	// hide the popup
// 	$('.popup').hide();
// });
//
// // activate the navigation links
// $(".menu-item").click(function(){
//   // hide popup in case one is open
//   $('.popup').hide();
// 	// get the id of the clicked menu item
// 	var id = $(this).attr('id');
//   // use it to open the connected popup
// 	$("#popup-" + id).show();
// });

//sound

$(document).ready(function(){
    $('.sound-link').on({
      mouseover: function(){
        var sound = $(this).find('audio').get(0);
        if(!$(this).hasClass('playing')){
          sound.play();
        } else {
          sound.pause();
        }
        $(this).toggleClass('playing');
      },
      mouseout: function(){
        var sound = $(this).find('audio').get(0);

          sound.pause();

        $(this).toggleClass('playing');
      }
    })

  });
