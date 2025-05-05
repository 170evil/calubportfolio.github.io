function summ() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    var final = "RESULT: " + result;
    document.getElementById("content").innerHTML = final;
}

function minu() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 - num2;
    var final = "RESULT: " + result;
    document.getElementById("content").innerHTML = final;
}

function divi() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 / num2;
    var final = "RESULT: " + result;
    document.getElementById("content").innerHTML = final;
}

function mult() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 * num2;
    var final = "RESULT: " + result;
    document.getElementById("content").innerHTML = final;
}