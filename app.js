
/**
 * Application main javascript file
 */

console.log('Main app.js file');

// Main variables declaration

var input = document.getElementById("input-text");
var fontSize = window.getComputedStyle(input, null).getPropertyValue('font-size').replace('px', '');
var fontFamily = window.getComputedStyle(input, null).getPropertyValue('font-family');
var fontSettings = fontSize + 'px ' + fontFamily;
var width = input.scrollWidth;
var height = 200;

var canvas = document.getElementById("canvas");
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext("2d");

//Debug
var divTest = document.getElementById('output-test');


/*************************************************************************************************************/
//Events

//Link mirroring function when keyup in the input-text
input.addEventListener("keyup", function(event){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSettings;
    var text = this.value;
    var keycodes = [];
    var textList = divideTextByEnter(text);
    //console.log(textList);
    var renderList = divideTableFitWidth(textList, width);
    //console.log(renderList);

    renderText(renderList);
});

//WIP
//Link send message function to the 'Envoyer' button
var send = document.getElementById("send");
var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var email = document.getElementById('email');
var adresse = document.getElementById('adresse');
var cp = document.getElementById('cp');
var required = document.getElementById('required_modal')
var requiredEmail = document.getElementById('required_email');
var sendingModal = document.getElementById('sending_modal');

send.addEventListener("click", function(event){
    console.log("clicked", event);

    //Check if required fields has all been full filled
    /*
    var unfilled = false;
    var testEmail = email.value.match(/@/g);
    if(nom.value === ''){
        nom.classList.add('alert');
        unfilled = true;
    } else {
        nom.classList.remove('alert');
    }
    if(prenom.value === ''){
        prenom.classList.add('alert');
        unfilled = true;
    } else {
        prenom.classList.remove('alert');
    }
    if(email.value === '' || testEmail === null){
        email.classList.add('alert');
        requiredEmail.classList.remove('hidden');
        unfilled = true;
    } else {
        email.classList.remove('alert');
        requiredEmail.classList.add('hidden');
    }
    if(adresse.value === ''){
        adresse.classList.add('alert');
        unfilled = true;
    } else {
        adresse.classList.remove('alert');
    }
    if(cp.value === ''){
        cp.classList.add('alert');
        unfilled = true;
    } else {
        cp.classList.remove('alert');
    }
    if(unfilled){
        required.classList.remove('hidden');
        return;
    } else {
        required.classList.add('hidden');
    }
    */

    //Convert canvas to image
    var image = new Image();
    image = canvas.toDataURL("image/png");
    //console.log(image);
    //divTest.innerHTML = '<img src="' + image + '" />';

    //POST datas in back end for treatment
    var datas = {
        image: image,
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        adresse: adresse.value,
        cp: cp.value
    }
    var datas = 'image='+image;
    $.post("send.php", datas).done(function(data){
        console.log(data);
    });
    
    //Simulating sending message
    sendingModal.classList.remove('hidden');
    setTimeout(function(){
        sendingModal.classList.add('hidden');
    }, 2000);
});


/*************************************************************************************************************/



/*************************************************************************************************************/
//Functions
//Divides a text with the Enter separator into a table
function divideTextByEnter(text){
    if(text.length < 1 || typeof(text)!=='string'){
        console.log("Not a string");
        return;
    }
    var enters = [0];
    var string = "";
    var table = [];
    for (var i = 0; i < text.length; i++) {
        if(text.charCodeAt(i) === 10){
            enters.push(i);
        }
    }
    for (var i = 0; i < enters.length; i++){
        string = text.substring(enters[i], enters[i+1]!==undefined?enters[i+1]:text.length);
        table.push(string);
    }
    return table;
}

//Analyses the table values and divide text if greater than determined width
function divideTableFitWidth(table, width){
    console.log(table);
    var renderTable = [];
    var stringToEvaluate = "";
    var string = "";
    var maxLength = 0;
    if(table === undefined){
        return renderTable;
    }
    for (var i = 0; i < 100; i++){
        string += "a";
        var metrics = ctx.measureText(string);
        if(metrics.width > width){
            maxLength = i;
            break;
        }
    }
    table.forEach(function(data){
        if(data.length > maxLength){
            data = data.replace('\n', '');
            var parts = parseInt(data.length / maxLength, 0);
            for(var i = 0; i <= parts; i++){
                renderTable.push(data.substring(i*maxLength, (i+1)*maxLength));
            }
        } else {
            renderTable.push(data);
        }
    });
    return renderTable;
}

//Render a table text in a canvas
function renderText(text){
    if(text.length < 1 || typeof(text)!=='object'){
        return;
    }
    for (var i = 0; i < text.length; i++){
        if(text[i].length > 0){
            var textToRender = (text[i][0] === '\n')?text[i].substring(1, text[i].length):text[i];
            var spacing = parseFloat(fontSize) + 3;
            ctx.fillText(textToRender, 0, spacing * (i+1));
        }
    }
}

//WIP
//Divides a text into a table depending of the input width OPTIONAL
function divideTextFitWidth(text, width){
    if(text.length < 1 || typeof(text)!=='string'){
        return;
    }
    if(table.length < 1 || typeof(table)!=='object'){
        return 0;
    }
    for (var i = 0; i < table.length; i++){

    }
}


/*************************************************************************************************************/
