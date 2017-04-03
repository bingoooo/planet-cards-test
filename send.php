<?php
    //Message treatment

    //Post an email
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
        echo "sent";
        return;
    };

    //Mail test
    if(mail('sukkhato@hotmail.com', 'pctest', 'some test message', 'From: admin@mail.com')){
        echo 'sent';
    } else {
        echo 'error';
    };