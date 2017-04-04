<?php 
    date_default_timezone_set('Etc/UTC');
    //Send email using PHPMailer
    require './PHPMailerAutoload.php';
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
    $mail->setFrom('sukkhato@gmail.com', 'Benjamin Dant');
    $mail->addAddress('sukkhato@hotmail.com', 'Benjamin Dant');
    $mail->Subject = "PHP Mailer Test";
    if(isset($_POST['image'])){
        $mail->Body = '<img src="' . $_POST['image'] . '"/>';
    } else {
        $mail->Body = 'No image sent';
    }
    $mail->AltBody = "Plain Text Message Body";
    if(!$mail->send()){
        echo "Mailer Error: ".$mail->ErrorInfo;
    } else {
        echo "Message sent !";
    }
?>