var x1 = document.getElementById("pr");
var x2 = document.getElementById("rs");
var x3 = document.getElementById("ls");
var x4 = document.getElementById("dr");
var x5 = document.getElementById("bd");
var x6 = document.getElementById("ps");
var x7 = document.getElementById("txt");
var x9 = document.getElementById("hd");
var x8 = document.getElementsByClassName("post-one");
var x10 = document.getElementById("lricon");
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
function dark() {
    if (x4.style.left == "5px") {
        x4.style.left = "20px";
        x4.style.backgroundColor = "black";
        x5.style.backgroundColor = "black";
        x6.style.backgroundColor = "#222";
        x7.style.backgroundColor = "#222";
        x1.style.backgroundColor = "#222";
        x9.style.backgroundColor = "#222";
        for (var i = 0; i < x8.length; i++) {
            x8[i].style.backgroundColor = "#222";
        }
        x2.style.backgroundColor = "#222";
        x3.style.backgroundColor = "#222";
        x10.style.color = "white";   
    }
    else {
        x4.style.left = "5px";
        x4.style.backgroundColor = "white";
        x5.style.backgroundColor = "#eee";
        x6.style.backgroundColor = "white";
        x7.style.backgroundColor = "white";
        x1.style.backgroundColor = "white";
        x9.style.backgroundColor = "#1876f2";
        for (var i = 0; i < x8.length; i++) {
            x8[i].style.backgroundColor = "white";
        }
        x2.style.backgroundColor = "white";
        x3.style.backgroundColor = "white";
        x10.style.color = "black";
    }
}