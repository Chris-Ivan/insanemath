<script type = "text/javascript">
    var user = "anonymous";
    var level = "<?php print $_GET["level"]?>";                
</script>
<?php
    SESSION_START();
    if(isset($_POST["logout"])){
        echo "<script type='text/javascript'>location.href='logout.php'</script>";
    }
    if(isset($_SESSION["user"])){
        ?>
            <script type = "text/javascript">
                user = "<?php print $_SESSION["user"]?>";
            </script>
        <?php
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <link rel = "stylesheet" type = "text/css" href = "style/base.css">
    <link rel="stylesheet" type="text/css" href="style/index.css">
    <link rel = "stylesheet" type = "text/css" href = "style/main.css">

    <script src="js/levelSD.js" type="text/javascript"></script>
    <script src="js/levelSMP.js" type="text/javascript"></script>
    <script src="js/levelSMA.js" type="text/javascript"></script>
    <script src="js/base.js" type="text/javascript"></script>
    <script src="js/score.js" type="text/javascript"></script>
</head>
<body>
    <div class="container">
        <script src="component/modal.js" type="text/babel"></script>
        <script src="js/main.js" type="text/javascript"></script>
        <script src="component/play.js" type="text/babel"></script>
        <div id="app"></div>
    </div>
</body>
</html>