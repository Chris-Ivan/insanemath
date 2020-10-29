<script type = "text/javascript">
    var user = "anonymous";                
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
    <title>Document</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <link rel="stylesheet" type="text/css" href="style/index.css">
    <link rel="stylesheet" type="text/css" href="style/base.css">

    <script type="text/babel" src="component/form.js"></script>
    <script type="text/babel" src="component/modal.js"></script>
</head>
<body>
<div class="container">
    <div id = "app">
    <script type="text/babel" src="component/index.js"></script>
    </div>
</div>
</body>
</html>