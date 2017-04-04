<?php
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
    $mail->Username = 'sukkhato@gmail.com';
    $mail->Password = 'Synou4ne';
    $mail->setFrom('sukkhato@gmail.com', 'Benjamin Dant');
    //$mail->addReplyTo('reply@mail.com', 'Some One');
    $mail->addAddress('sukkhato@hotmail.com', 'Benjamin Dant');
    $mail->Subject = "PHP Mailer Test";
    //$mail->msgHTML(file_get_contents('file.html'), dirname(__FILE__));
    $mail->AltBody = "Plain Text Message Body";
    //$mail->addAttachment('file');
    if(!$mail->send()){
        echo "Mailer Error: ".$mail->ErrorInfo;
    } else {
        echo "Message sent !";
    }
?>