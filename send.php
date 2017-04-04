<?php 
    date_default_timezone_set('Etc/UTC');
    require './PHPMailerAutoload.php';
    //Get values from heroku config vars
    $username = getenv('USERNAME');
    $password = getenv('PASSWORD');
    $adminmail = getenv('ADMIN_MAIL');
    $host = getenv('HOST');
    $port = getenv('PORT');

    //Get values from $_POST
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
    $mail->Host = $host;
    $mail->Port = $port;
    $mail->SMTPSecure = 'tls';
    $mail->SMTPAuth = true;
    $mail->Username = $username;
    $mail->Password = $password;
    $mail->setFrom($adminmail, 'Benjamin Dant');
    $mail->addAddress($email, $prenom.' '.$nom);
    $mail->Subject = "PHP Mailer Test";
    if(isset($_POST['image'])){
        $mail->Body = "$prenom $nom,<br> You have recently created an image with our tool, thanks for using it"
        ."Personnal Information:<br>$nom $prenom<br>$adresse <br>$cp"
        .'<img src="' . $_POST['image'] . '"/>';
        echo $mail->Body;
    } else {
        $mail->Body = 'No image sent';
    }
    $mail->AltBody = "Plain Text Message Body";
    echo "Break in line 42<br>\n"; exit();
    if(!$mail->send()){
        echo "Mailer Error: ".$mail->ErrorInfo;
    } else {
        echo "Message sent !";
    }
?>