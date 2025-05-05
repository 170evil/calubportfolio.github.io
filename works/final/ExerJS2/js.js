function getResult(){
    var num = document.getElementById('num').value;
    if (num % 2 == 0) {
        document.getElementById("result1").innerHTML = "THE NUMBER IS EVEN.";
    } else {
        document.getElementById("result1").innerHTML = "THE NUMBER IS ODD.";
    }

    var i;
    var divisor = 0;
    for (i = 0; i <= num; i++){
        if (num % i == 0){
            divisor++;
        }
    }

    if (num%2==0 || num%3 == 0|| num%5==0 || num%7==0) {
        document.getElementById("result2").innerHTML = "THE NUMBER IS COMPOSITE.";
        } else {
            document.getElementById("result2").innerHTML = "THE NUMBER IS PRIME.";
            }

    if (num <= 0) {
        document.getElementById("result2").innerHTML = "INVALID.";
    }

    document.getElementById("div1").innerHTML = "Number of Divisor: " + divisor;
}