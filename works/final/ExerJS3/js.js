function getResult(){
    var num = document.getElementById('num').value;
    var userCM = num * 100000;
    document.getElementById("result1").innerHTML = num + " KILOMETER IS " + userCM + " CENTIMETER";
}