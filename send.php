<?php
    //Message treatment

    //Post an email
    if(isset($POST['image'])){
        $to = 'sukkhato@hotmail.com';
        $subject = "Votre image du ".date('Y-m-d HH:mm:ss', time());
        $message =  '<img src="'.$POST['image'].'"/>';
        $headers = 'From: admin@mail.com';

        mail($to, $subject, $message, $headers);
        echo "sent";
        return;
    };

    //Mail test
    mail('sukkhato@hotmail.com', 'pctest', 'some test message', 'From: admin@mail.com');
    echo $POST;