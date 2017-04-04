<?php 
    date_default_timezone_set('Etc/UTC');
    require './PHPMailerAutoload.php';
    //Check $_POST values
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $adresse = $_POST['adresse'];
    $cp = $_POST['cp'];
    $image = $_POST['image'];
    echo "$nom $prenom $email $adresse $cp $image";
    return;
    //Send email using PHPMailer you may configure a gmail SMTP or other 
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
    $mail->setFrom(USERNAME, 'Benjamin Dant');
    if(isset())
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