<?php 
    date_default_timezone_set('Etc/UTC');
    require './PHPMailerAutoload.php';
    //Get values from heroku config vars
    $username = ENV['USERNAME'];
    $password = ENV['PASSWORD'];

    //Check $_POST values
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $adresse = $_POST['adresse'];
    $cp = $_POST['cp'];
    $image = $_POST['image'];
    
    //Send email using PHPMailer you may configure a gmail SMTP or other 
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = 'html';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPSecure = 'tls';
    $mail->SMTPAuth = true;
    $mail->Username = $username;
    $mail->Password = $password;
    $mail->setFrom($username, 'Benjamin Dant');
    $mail->addAddress($email, $prenom.' '.$nom);
    $mail->Subject = "PHP Mailer Test";
    if(isset($_POST['image'])){
        $mail->Body = '<img src="' . $_POST['image'] . '"/>';
        var_dump($mail); exit();
    } else {
        $mail->Body = 'No image sent';
        var_dump($mail); exit();
    }
    $mail->AltBody = "Plain Text Message Body";
    if(!$mail->send()){
        echo "Mailer Error: ".$mail->ErrorInfo;
    } else {
        echo "Message sent !";
    }
?>