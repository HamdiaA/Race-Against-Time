var score = 300;

function random(min,max){
 	return Math.round(Math.random() * (max-min) + min);
}

function dropBox(){
  var velocity = random(1000, 9000);
  var left;
  var size;
  var screen = window.matchMedia("(max-width: 768px)");
  if (screen.matches){
	  left = random(400, ($(".game").width() - 400));
	  size = random(5, 20);
  }
  else{
	  left = random(220, ($(".game").width() - 220));
	  size = random(70, 130);
  }
  var thisBox = $("<div/>", {
    class: "box",
    style:  "width:" +size+ "px; height:"+size+"px; left:" + left+  "px; transition: transform " +velocity+ "ms linear;"
  });
  
  //set data and bg based on data
  thisBox.data("test", random(1, 4));
  switch (thisBox.data("test")) {
	case 1:
	thisBox.css({"background": "url('water.png')", "background-size":"50% 99%"});
    break;
  case 2:
    thisBox.css({"background": "url('firstaid.png')", "background-size":"108% 88%"});
    break;
  case 3:
    thisBox.css({"background": "url('mask.png')", "background-size":"contain"});
    break;
  case 4:
    thisBox.css({"background": "url('virus.png')", "background-size":"contain"});
    break;
  }
  
  
  $(".game").append(thisBox);
  
  setTimeout(function(){
    thisBox.addClass("move");
  }, random(0, 5000) );
  
  thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    $(this).remove();
  });
}
function sendTime(name, time){
	$.ajax({
                url: 'data.php',
                method: 'POST',
                data: {'name' : name, 'timer': time},
                success: function(html) 
                {
                    alert(html);
                }
            });
}

for (i = 0; i < 5; i++) { 
  dropBox();
}
var runGame = setInterval(function(){
                for (i = 0; i < 5; i++) { 
                  dropBox();
                }  
              }, 5000);

$(document).on('click', '.box', function(){

  switch ($(this).data("test")) {
	case 1:
		score -= 1;
		break;
	case 2:
		score -= 2;
		break;
	case 3:
		score -= 3;
		break;
	case 4:
		score += 1;
		break;
  }
  
  $(".score").html(score);
  $(this).remove();
  if (score <= 290) {
	clearInterval(runGame);
	var name = prompt("Please enter your name for our record:");
	sessionStorage.setItem("timePassed", timePassed);
	sendTime(name, timePassed);
	window.location.href = "http://webdev.scs.ryerson.ca/~j29long/project/page10.html";
  }
});




