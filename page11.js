function swapPic() {
    var img2 = "images/blackclosedcase.PNG";
    var img1 = "images/vaccinesuitcase.png";
    
    var imgElmnt = document.getElementById('swapPic');
 
    imgElmnt.src = (imgElmnt.src === img1)? img2 : img1;
 }