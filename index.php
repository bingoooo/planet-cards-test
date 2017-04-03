<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <title>Planet Cards Test</title>
    </head>
    <body>
        <div>
            <div><label for="nom">Nom</label><input id="nom" type="text" required></div>
            <div><label for="prenom">Prénom</label><input id="prenom" type="text" required></div>
            <div><label for="email">E-mail</label><input id="email" type="email" required></div>
            <div><label for="adresse">Adresse</label><input id="adresse" type="text" required></div>
            <div><label for="cp">Code Postal</label><input id="cp" type="number" required></div>
            <button id="send">Envoyer</button>
            <div id="required_modal" class="red hidden">Les champs en rouge n'ont pas été renseignés !</div>
            <div id="required_email" class="red hidden">Le format de l'adresse email est incorrect !</div>
        </div>
        <textarea name="input-text" id="input-text"></textarea>
        <canvas id="canvas" width="500" height="200"></canvas>
        <div id="output-test">Tests</div>
        <div id="sending_modal" class="hidden"><div id="sending_modalbox">Envoi, veuillez patienter...</div></div>
        <script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
        <script src="app.js"></script>
    </body>
</html>