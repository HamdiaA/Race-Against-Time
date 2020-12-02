<?php
//check if pin is correct
if ($_POST["pincode"]==="321")
{
    http_response_code(200);
    //redirect to other page
} else{
    http_response_code(401);
    //error code: login insuccessful
}

//use JS to validate/ check response code