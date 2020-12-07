
var suspectList = [1,1,1];




var image1 = document.getElementById("pic1");
var image2 = document.getElementById("pic2");
var image3 = document.getElementById("pic3");





$(".alert").click(function(){
	if (sus_out() == 2){
		if (suspectList[0]){
			alert("As a nurse, she should have put on a mask all the times!");
		}
		else if (suspectList[1]){
			alert("Did you notice he had the most close contacts to Covid patients?");
		}
		else {
			alert("Yes, being an Asian or a Chinese does not mean he is positive! Follow him to the supply room :>");
			sessionStorage.setItem("timePassed", timePassed);
			window.location.href = "https://www.cs.ryerson.ca/~hhvu/falling.html";
		}
	}
	else {
		alert("Eliminate 2 positive staff please!");
	}
});

function sus_out(){
	var count = 0;
	for (var i = 0; i < suspectList.length; i++){
		if (suspectList[i] == null){
			count += 1
		}
	}
	return count;
}

//UPON CLICK USER IS ABLE TO CHANGE THE IMAGE AND ELIMINATE THE ELEMENT FROM THE ARRAY
function changeImage(){
    if (image1.src.match("sus1.png")) {
        image1.src = "sus1elim.png";
        suspectList[0] = null;
    }
    else {
        image1.src = "sus1.png";
        suspectList[0] = 1;
    }
}

function changeImage2(){
    if (image2.src.match("sus2.png")) {
        image2.src = "sus2elim.png";
        suspectList[1] = null;
    }
    else {
        image2.src = "sus2.png";
        suspectList[1] = 1;
    }
}

function changeImage3(){
     if (image3.src.match("sus3.png")) {
        image3.src = "sus3elim.png";
        suspectList[2] = null;
    }
    else {
        image3.src = "sus3.png";
        suspectList[2] = 1;

    }
}