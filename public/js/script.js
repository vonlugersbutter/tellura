ScrollReveal().reveal('.reveal');

$(function() {
    $("#navigation").load("nav.html");
});

$(function() {
    $("#footer").load("footer.html");
});

$(function() {
  $("#teamcards").load("teamcard.html");
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function ayesha() {
  var x = document.getElementById("ayesha");
  x.classList.toggle("beef");
}

function catherine() {
  var x = document.getElementById("catherine");
  x.classList.toggle("beef");
}

function vanessa() {
  var x = document.getElementById("vanessa");
  x.classList.toggle("beef");
}

function mahsa() {
  var x = document.getElementById("mahsa");
  x.classList.toggle("beef");
}

function karena() {
  var x = document.getElementById("karena");
  x.classList.toggle("beef");
}

function maha() {
  var x = document.getElementById("maha");
  x.classList.toggle("beef");
}

function sarah() {
  var x = document.getElementById("sarah");
  x.classList.toggle("beef");
}

function manvir() {
  var x = document.getElementById("manvir");
  x.classList.toggle("beef");
}

function jessica() {
  var x = document.getElementById("jessica");
  x.classList.toggle("beef");
}

function gurdial() {
  var x = document.getElementById("gurdial");
  x.classList.toggle("beef");
}

function alyssa() {
  var x = document.getElementById("alyssa");
  x.classList.toggle("beef");
}

function maggie() {
  var x = document.getElementById("maggie");
  x.classList.toggle("beef");
}

function hamda() {
  var x = document.getElementById("hamda");
  x.classList.toggle("beef");
}