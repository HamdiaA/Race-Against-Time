$(document).ready(function() {

$( ".letter" ).mouseover(function() {
	$( ".btn" ).slideDown( 2000, function() {
  });
});
$( ".btn" ).click(function() {
  $( "#board" ).slideDown( 2000, function() {
  });
  $( "#start" ).slideDown( 2000, function() {
  });
  $( "#reset" ).slideDown( 2000, function() {
  });
  
  $(".letter").hide();
});
game.initiate();


$('#start').on("click", function(eventObject) {
  game.start();
})


$('#reset').on("click", function(eventObject) {
  game.reset();
})



});

var game = {

  wins: 0,
  initiate: function () {

  cards.generateCards();

  },

  start: function () {

$('#ball').fadeOut(700)

var times = 0;
var timerId = setInterval(function()
{cards.shuffle();
  times +=1;
  if(times === cards.numsOfShuffle) {
    clearInterval(timerId);
  }
}, 400);

  },

  reset: function() {

$('#board > div:nth-child(1)').removeClass().attr("class", "left");
$('#board > div:nth-child(2)').removeClass().attr("class", "middle");
$('#board > div:nth-child(3)').removeClass().attr("class", "right");


  },

  winlose: function(that) {

var $div = $(that);

if ($div.children().length) {
  board.display("Lucky you :)");
  window.setTimeout(function(){
	  window.alert("Next Room Unlocked!");
	  sessionStorage.setItem("timePassed", timePassed);
	  window.location.href = "https://www.cs.ryerson.ca/~f2desai/page3.html";
  }, 2000);
}

else {board.display("Get your feet to the abyss")}

$('#ball').fadeIn(700);

  }


}

var board= {

  display: function(string) {

$('#display').text(string);

  }

}

var cards= {
  numOfCards: 3,
  arrCards: [],
  numsOfShuffle: 5,
  generateCards: function() {

for (var i = 0; i<this.numOfCards; i+=1)
{

    var classArray = ["left", "middle", "right"];
    var $cardDiv = $('<div class = "'+ classArray[i] + '">');
    //var $cardDiv = $('<div class ="card ' + classArray[i] + '">');
    $('#board').append($cardDiv);

        this.arrCards.push(

              {
                $el : $cardDiv,
                currentClass: classArray[i],
                swapClass: function(newClass) {
                var currentClass = this.currentClass;
                this.$el.removeClass(currentClass);
                this.$el.attr('class', newClass);
                this.currentClass = newClass;
                                }
              }
                          );

$cardDiv.on("click", function () {

  game.winlose(this);

})

}

this.arrCards[1].ball = true;

var $ballHolder = $('#board div:nth-child(2)');

  var $ball = $('<div id = "ball">');
  $ballHolder.append($ball)
},


  shuffle: function () {

var randomPosition1 = Math.floor(Math.random()*this.arrCards.length);
var randomPosition2 = Math.floor(Math.random()*this.arrCards.length);

while (randomPosition1 == randomPosition2) {
 randomPosition2 = Math.floor(Math.random()*this.arrCards.length);
}

var store = this.arrCards[randomPosition1].currentClass;

this.arrCards[randomPosition1].swapClass(this.arrCards[randomPosition2].currentClass);
this.arrCards[randomPosition2].swapClass(store);


  }
}



