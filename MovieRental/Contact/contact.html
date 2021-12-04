<?php
    require 'accounts.php';
    if (!isset($_SESSION['id'])){
        header('location:login.php');
        exit();
    }
    $s1="";
    $s2="";
    $s3="";
    $color="";
    $errsubject="";
    $errmessage="";
    $contactmsg="";
    if(isset($_POST['contact'])){
        $name = $_SESSION['firstName'] ." ".$_SESSION['lastName'];
        $email = $_SESSION['email'];
        $subject = $_POST['subiect'];
        $message = $_POST['textarea'];
        $redirect= $_POST['redirect'];

        if(empty($subject)){
            $errsubject = "Introduce&#355i un subiect";
        }
        if(empty($message)){
            $errmessage = "Introduce&#355i mai multe informa&#355ii";
        }
        
        if($errsubject=="" && $errmessage==""){
            $sql = "INSERT INTO contact (name,email,subject,message)
            VALUES (?,?,?,?)";
            $statement = $conn->prepare($sql);
            $statement->bind_param('ssss',$name,$email,$subject,$message);
            if($statement->execute()){
                $user_id=$conn->insert_id;
                $_SESSION['id']=$user_id;
                header("location:".$redirect."?status=trimis");
                
            }
        }
    }
?>