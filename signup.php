<?php
    include 'connection.php';

    $username = $_POST["username"];
    $password = hash('sha512',$_POST["password"]);

    //check same username
    $sql = "SELECT * FROM user WHERE username='$username'";
    if(mysqli_num_rows(mysqli_query($conn,$sql))>=1){
        echo "<script type='text/javascript'>location.href = 'index.php?collision=true';</script>";
    }else{ //no exist username
        $sql= "INSERT INTO `user` (`username`,`password`,`pic`)
        VALUES ('$username','$password','default-user.jpg')";
        if(mysqli_query($conn,$sql)){
            echo "<script type='text/javascript'>location.href = 'index.php?collision=false';</script>";
        }
    }
?>