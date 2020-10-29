<?php
    SESSION_START();
    $_SESSION = array();
    session_destroy();

    echo "<script type='text/javascript'>location.href='index.php'</script>";
?>