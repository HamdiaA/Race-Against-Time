<?php
    $username = $_POST['name'];

    //Connecting to the Database
    mysqli_connect("localhost", "habdulha", "Ix3Orduc", "habdulha");
    if ($mysqli -> connect_error){
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        // exit();
    } else {

        /*$sql = "INSERT INTO MyGuests (username, timeFinished) VALUES ($username, 'x')";
        
        if ($mysqli->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $mysqli->error;
        }*/

        $frm = $mysqli->prepare("INSERT INTO scoreboard(username, timeFinished") VALUES (?, ?);
        $frm->execute();
        
        echo "works";

        $frm->close();
        $mysqli->close();
    }
?>