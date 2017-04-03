console.log('Main app.js file');


// Main variables declaration
var canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 200;
var ctx = canvas.getContext("2d");

var input = document.getElementById("input-text");
var fontSize = window.getComputedStyle(input, null).getPropertyValue('font-size').replace('px', '');
var fontFamily = window.getComputedStyle(input, null).getPropertyValue('font-family')
var fontSettings = fontSize + 'px ' + fontFamily;
var width = input.scrollWidth;
console.log(window.getComputedStyle(input, null).getPropertyValue('font-strech'));


//Event when keyup in the input field
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
    var string = "";
    var maxLength = 0;
    for (var i = 0; i < 100; i++){
        string += "a";
        var metrics = ctx.measureText(string);
        if(metrics.width > width){
            maxLength = i;
            break;
        }
    }
    var renderTable = [];
    var stringToEvaluate = "";
    table.forEach(function(data){
        if(data.length > maxLength){
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

//Render the text in a canvas
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
