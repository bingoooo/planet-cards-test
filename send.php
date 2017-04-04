<?php
    //Message treatment

    //Post an email using mail() function from PHP default class, but needs sender_mail configuration impossible on heroku
    /*
    if(isset($_POST['image'])){
        $to = 'sukkhato@hotmail.com';
        $subject = "Votre image du ".date('Y-m-d HH:mm:ss', time());
        $message =  '<img src="'.$_POST['image'].'"/>';
        $headers = 'From: admin@mail.com';

        if(mail($to, $subject, $message, $headers)){
            echo 'image sent';
        } else {
            echo 'error sending image: '.$_POST['image'];
        };
        return;
    };
    */

    //Variables echo test
    echo USERNAME;
    echo PASSWORD;
    //Post email using PHPMailer from Google Account
    date_default_timezone_set('Etc/UTC');

    require '../PHPMailerAutoload.php';

    $mail = new PHPMailer;

    $mail->isSMTP();

    $mail->SMTPDebug = 2;

    $mail->Debugoutput = 'html';

    $mail->Host = 'smtp.gmail.com';

    $mail->Port = 587;

    $mail->SMTPSecure = 'tls';

    $mail->SMTPAuth = true;

    $mail->Username = USERNAME;

    $mail->Password = PASSWORD;