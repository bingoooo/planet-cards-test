
/**
 * Application main javascript file
 */

/*************************************************************************************************************/

// Main variables declaration

/*************************************************************************************************************/

var input = document.getElementById("input-text");
var fontSize = window.getComputedStyle(input, null).getPropertyValue('font-size').replace('px', '');
var fontFamily = window.getComputedStyle(input, null).getPropertyValue('font-family');
var fontSettings = fontSize + 'px ' + fontFamily;
var width = input.clientWidth;
var height = input.clientHeight;
var maxChar = $("#input-text").attr('col');
console.log(maxChar);

var canvas = document.getElementById("canvas");
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext("2d");

//Display a text in the canvas for UI/UX
ctx.font = "30px Arial";
var canvasText = 'CANVAS RENDER';
var canvasTextWidth = ctx.measureText(canvasText);
ctx.fillText(canvasText, (width/2)-(canvasTextWidth.width/2), height/2, width);

/*************************************************************************************************************/

//Events

/*************************************************************************************************************/

//Resize the canvas when the user tries to resize the textarea
input.addEventListener("mouseup", function(event){
    width = canvas.width = input.clientWidth;
    height = canvas.height = input.clientHeight;
});

//Link mirroring to canvas when keyup in the input-text
input.addEventListener("keyup", function(event){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSettings;
    var text = this.value;
    var keycodes = [];
    var textList = divideTextByEnter(text);
    var renderList = divideTableFitWidth(textList, width);

    renderText(renderList);
});

//Link send message action to the 'Envoyer' button
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
    
    //Start sending message
    sendingModal.classList.remove('hidden');

    //Convert canvas to image
    var image = new Image();
    image = canvas.toDataURL("image/png");

    //POST datas in back end for treatment
    //TODO : Use json data for better view but better needs back end treatment
    /*
    var datas = {
        image: image,
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        adresse: adresse.value,
        cp: cp.value
    }
    */
    var datas = 'image=' + image + '&nom=' + nom.value + '&prenom='
        + prenom.value + '&email=' + email.value + '&adresse=' + adresse.value + '&cp=' + cp.value;
    $.post("send.php", datas).done(function(data){
        sendingModal.classList.add('hidden');
    });
});


/*************************************************************************************************************/

//Functions

/*************************************************************************************************************/
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
//TODO : use the divideTextFitWidth function for code reusability
function divideTableFitWidth(table, width){
    var renderTable = [];
    var stringToEvaluate = "";
    var string = "";
    var maxLength = 0;
    if(table === undefined){
        return renderTable;
    }
    //Compute the maximum character width
    for (var i = 0; i < 100; i++){
        string += "a";
        var metrics = ctx.measureText(string);
        if(metrics.width > width){
            maxLength = i;
            break;
        }
    }
    //Divides strings if too much long from desired width
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
            var spacing = parseFloat(fontSize) + 2;
            ctx.font = fontSettings;
            ctx.fillText(textToRender, 1, spacing * (i+1), width-2);
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
