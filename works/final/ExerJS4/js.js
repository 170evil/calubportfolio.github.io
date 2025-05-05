window.onload = function(){

    var numRow = parseInt(prompt("Enter Number of Rows: "));
    var numCol = parseInt(prompt("Enter Number of Collumns: "));
    
    document.write("<table style='margin: auto;'>");
    for (var i = 1; i <= numRow; i++) {
        document.write("<tr>");
        for (var j = 1; j <= numCol; j++) {
            document.write("<td style='border: solid black 1px; padding: 14px;'>" + i * j + "</td>");
        }
        document.write("</tr><br>");
    }
    document.write("</table>");
}