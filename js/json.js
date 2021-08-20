var x1 = document.getElementById("pr");
var x2 = document.getElementById("rs");
var x3 = document.getElementById("ls");
function prfunc() {
    if (x1.style.display == "none") {
        x1.style.display = "block";
    }
    else {
        x1.style.display = "none";
    }
}
function lr() {
    if (x2.style.display == "none") {
        x2.style.display = "flex";
    }
    else {
        x2.style.display = "none";
    }
    if (x3.style.display == "none") {
        x3.style.display = "flex";
    }
    else {
        x3.style.display = "none";
    }
}