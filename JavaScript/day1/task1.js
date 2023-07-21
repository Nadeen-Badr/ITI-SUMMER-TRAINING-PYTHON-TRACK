var z = prompt("Enter the name:");
var c = prompt("Enter the number:");  
c = Number(c);

document.write("<ul>");
for(var i = 0; i < c; i++) {
    document.write("<li>Hello, " + z + "</li>");
}
document.write("</ul>");