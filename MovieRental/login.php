<?php 
error_reporting(0);
require 'accounts.php';
if (isset($_SESSION['id']) && !isset($_SESSION['loginmsg'])){
    header("location:main.php");
    exit();
}
if($_SESSION['loginmsg']){
    echo ("<div class='alert animate' id='alert'><div id='myBar'></div><span class='closebtn' onclick="."location.href='main.php';".">&times;</span> Bine ai revenit <b>".$_SESSION['firstName'].".</b> Te vom redirec&#355iona la pagina principal&#259 <span id='txt'></span></div></div>");
    unset($_SESSION['loginmsg']);
}
if(!empty($_GET['status'])){
    echo ("<div class='alert animate' id='alert'><div id='myBar'></div><span class='closebtn' onclick="."this.parentElement.style.display='none';".">&times;</span> Te-ai deconectat cu succes!</div></div>");
}

?>
<html>
    <head>
        <title>Log in - London Underground</title>
        <link rel="icon" href="..\EWD\Imagini\favicon.png" type="image/png">
        <link rel="stylesheet" type="text/css" href="..\EWD\CSS\loginpage.css">
        <link rel="stylesheet" type="text/css" href="..\EWD\CSS\contact_alerts.css">
        <script src="..\EWD\JavaScript\countdown.js"></script>
        <script src="..\EWD\JavaScript\loadingline.js"></script>
    </head>
    <body onload="move();timedText();hideAlert()">
        <div class="loginwindow">
            <div class="loginimage">
                <img src="..\EWD\Imagini\login.gif" style="max-width:100%;">
            </div>
            <div class="logininfo">
                <h1 style="text-align:center;margin-top:50px;margin-bottom:60px;">Log in</h1>
                <div class="litext">
                    <form action="..\EWD\login.php" method="post">
                        <label for="email">E-mail</label>
                        <input type="text" placeholder="Introduce&#355i e-mailul dumneavoastr&#259" name="email" value="<?php echo $email; ?>">
                        <p class="errortext"><?php echo $erremail; ?></p>
                        <label for="password">Parol&#259</label>
                        <input type="password" placeholder="Introduce&#355i parola dumneavoastr&#259" name="password">
                        <p class="errortext"><?php echo $errpassword; ?><a href="..\EWD\signup.php"style="font-size:13px;float:right;">Nu ai cont?</a></p><br>
                        <p class="errortext" style="text-align:center"><?php echo $errmessage; ?></p>
                        <button type="submit" class="buttonsubmit animate" style="width:40%;margin-left:30%;" name="login">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>