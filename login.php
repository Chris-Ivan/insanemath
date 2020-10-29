<?php
    include 'connection.php';

    SESSION_START();
    $username = $_POST["username"];
    $password = hash('sha512',$_POST["password"]);

    //check same username
    $sql = "SELECT * FROM user WHERE `username`='$username' AND `password`='$password'";
    $res = mysqli_fetch_assoc(mysqli_query($conn,$sql));
    if($res){
        $_SESSION['username'] = $res['username'];
        $_SESSION['pic'] = $res['pic'];
        echo "<script type='text/javascript'>location.href = 'index.php';</script>";
    }else{
        echo "<script type='text/javascript'>location.href = 'index.php?login=false';</script>";
    }
?>