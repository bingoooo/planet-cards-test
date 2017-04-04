<?php 
    if(isset($_POST['nom'])) {
        echo 'Hello ' . $_POST['nom'];
    }
    date_default_timezone_set('Etc/UTC');
    require './PHPMailerAutoload.php';
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
    $mail->addAddress('sukkhato@hotmail.com', 'Benjamin Dant');
    $mail->Subject = "PHP Mailer Test";
    $mail->AltBody = "Plain Text Message Body";
/*


    //$mail->addReplyTo('reply@mail.com', 'Some One');
    //$mail->msgHTML(file_get_contents('file.html'), dirname(__FILE__));
    //$mail->addAttachment('file');
    if(!$mail->send()){
        echo "Mailer Error: ".$mail->ErrorInfo;
    } else {
        echo "Message sent !";
    }
    */
?>