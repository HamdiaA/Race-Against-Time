$('document').ready(function()
{
    drag($("#gloves"));
    drag($("#hat"));
    drag($("#goggle"));
    drag($("#mask"));
    drag($("#shoe"));
    drag($("#gown"));
 // modify to PPE  gear
   
}); 
selectedElement=null;
function dragMouseDown(e){
    e = e || window.event;
    e.preventDefault();
    //get the mouse cursor position at startup:
    initialX=e.clientX;
    initialY=e.clientY;

    $(document).mouseup(function(){removeHandlers()});
    //call a function whenever the cursor move:
    $(document).mousemove(function(){mymousemove()});
}

function mymousemove(e) 
{
    e=e || window.event;
    e.preventDefault();
    //calculate the new cursor position:
    deltaX= initialX - e.clientX;
    deltaY= initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    //set the elements new position:
    $(selectedElement).css("top",(selectedElement.offset().top - deltaY)+"px");
    $(selectedElement).css("left",(selectedElement.offset().left - deltaX)+"px");
}

function removeHandlers()
{
    // stop moving when mouse button is released
    $(document).unbind("mouseup");
    $(document).unbind("mousemove");
}

function drag(element)
{
    var deltaX =0,deltaY=0, initialX=0,initialY=0;
    $(element).mousedown(function()
    {
        selectedElement= $(element);
        dragMouseDown()
    });
}
