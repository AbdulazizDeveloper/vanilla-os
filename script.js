
window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
function updateOnlineStatus(){
 if (navigator.onLine) {
   document.getElementById("wifi").innerHTML ="<i class='fas fa-wifi'></i>";
 } else {
   document.getElementById("wifi").innerHTML = "<i class='fas fa-times'></i>";
 }     
      
}
      function currentTime() {
        var date = new Date(); /* creating object of Date class */
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var midday = "AM";
        midday = hour >= 12 ? "PM" : "AM"; /* assigning AM/PM */
        hour =
          hour == 0
            ? 12
            : hour > 12
            ? hour - 12
            : hour; /* assigning hour in 12-hour format */
        hour = updateTime(hour);
        min = updateTime(min);
        sec = updateTime(sec);
        document.getElementById("txt").innerText =
          hour + ":" + min + "         " + midday; /* adding time to the div */
        var t = setTimeout(currentTime, 1000); /* setting timer */
      }

      function updateTime(k) {
        /* appending 0 before time elements if less than 10 */
        if (k < 10) {
          return "0" + k;
        } else {
          return k;
        }
      }

      currentTime();
applytheme(); 
function applytheme(){
        document.getElementById("not").style.backgroundColor = "black";
        document.getElementById("not").style.color = "white";

        document.getElementById("not3").style.color = "black";
        document.getElementById("not3").style.backgroundColor = "white";
        document.getElementById("screen").style.color = "black";
        document.getElementById("screen").style.backgroundColor = "white";
        document.getElementById("settin").style.color = "black";
        document.getElementById("settin").style.backgroundColor = "white";


        document.getElementById("launch").style.backgroundColor = "white";
        document.getElementById("demoa").style.backgroundColor = "black";
        document.getElementById("demoa").style.color = "white";

   

      }
function lanuchapp(div) {
  
  if (document.getElementById("my"+div).hasAttribute("src")) {
    document.getElementById(div+"1").style.display = "block";
    var y1 = document.querySelectorAll("#deck > div");
    var tgh = document.querySelector("#"+ div +" > div");
    tgh.style.backgroundColor = "lightgreen";
    var i;
    for (i = 0; i < y1.length; i++) {
      y1[i].setAttribute("class", "checked");
    }
    var newItem = document
      .getElementById(div+"1")
      .setAttribute("class", "index");
  
   
 } else{
    
       document.getElementById(div+"1").style.display = "block";
    var y1 = document.querySelectorAll("#deck > div");
    var tgh = document.querySelector("#"+div+" > div");
    tgh.style.backgroundColor = "lightgreen";
    var i;
    for (i = 0; i < y1.length; i++) {
      y1[i].setAttribute("class", "checked");
    }
    var newItem = document
      .getElementById(div+"1")
      .setAttribute("class", "index");
     document.getElementById("my"+div).setAttribute("src", div+".html");
   
 }
 
   
  dragElement1(document.getElementById(div+"1"));
}
function lanuchapp1(div,src) {
  if (document.getElementById("my"+div).hasAttribute("src")) {
    document.getElementById(div+"1").style.display = "block";
    var y1 = document.querySelectorAll("#deck > div");
    var tgh = document.querySelector("#"+ div +" > div");
    tgh.style.backgroundColor = "lightgreen";
    var i;
    for (i = 0; i < y1.length; i++) {
      y1[i].setAttribute("class", "checked");
    }
    var newItem = document
      .getElementById(div+"1")
      .setAttribute("class", "index");
  
   
 } else{
       document.getElementById(div+"1").style.display = "block";
    var y1 = document.querySelectorAll("#deck > div");
    var tgh = document.querySelector("#"+div+" > div");
    tgh.style.backgroundColor = "lightgreen";
    var i;
    for (i = 0; i < y1.length; i++) {
      y1[i].setAttribute("class", "checked");
    }
    var newItem = document
      .getElementById(div+"1")
      .setAttribute("class", "index");
     document.getElementById("my"+div).setAttribute("src", src);
   
 }
  dragElement1(document.getElementById(div+"1"));
}
function width(x) {
  var m = x.parentNode.id;
  var g = m.search("12");
  var strip = m.search("1");
  var s = "my" + m.substr(0, g);
  var strip1 = m.substr(0, strip) + "1";
  document.getElementById(strip1).style.top = "19px";
  document.getElementById(strip1).style.left = "1px";
  document.getElementById(s).style.width = "1530px";
  document.getElementById(s).style.height = "676px";
}

function search1(x) {
  document.getElementById("myInput").value = x.innerHTML;
}

function notepad() {
  if (document.getElementById("notpad")) {
      lanuchapp1("notpad","https://abdulazizdeveloper.github.io/vanilla-os/notpad.html")
  } else {
    var ul = document.getElementById("apps"); // the [0] identifies the first element of the returned array
    var li = document.createElement("a");
    li.setAttribute("id", "notpad");
    li.setAttribute("style", "padding:3px;   height:100%; float:left;  ");
    li.innerHTML =
      '<img src="https://abdulazizdeveloper.github.io/vanilla-os/notpad.png" style="width:25px;height:20px;"> <div  style="position:absolute;background-color:lightgreen; width:10px; top:15px;  height:10px;border-radius:50%;"></div>';
    li.setAttribute("onclick", '  lanuchapp1("notpad","https://abdulazizdeveloper.github.io/vanilla-os/notpad.html")');
    li.setAttribute("href", "javascript:void(0)");
    ul.appendChild(li);
     lanuchapp1("notpad","https://abdulazizdeveloper.github.io/vanilla-os/notpad.html")
  }
}
function file() {
  if (document.getElementById("file")) {
    lanuchapp("file")
    var tgh = document.querySelector("#file > div");
    tgh.style.backgroundColor = "lightgreen";
  } else {
    var ul = document.getElementById("apps"); // the [0] identifies the first element of the returned array
    var li = document.createElement("a");
    li.setAttribute("id", "file");
    li.setAttribute("style", "padding:3px;   height:100%; float:left; ");
    li.innerHTML =
      '<img src="https://abdulazizdeveloper.github.io/vanilla-os/file.png" style="width:25px;height:20px;"><div style="background-color:lightgreen; width:10px; position:absolute; top:15px;  height:10px;border-radius:50%;"></div>';
    li.setAttribute("onclick", 'lanuchapp("file")');

    li.setAttribute("href", "javascript:void(0)");

    ul.appendChild(li);

    var tgh = document.querySelector("#file > div");
    tgh.style.backgroundColor = "lightgreen";
  lanuchapp("file")
  }
}

function cac() {
  if (document.getElementById("cac")) {
 lanuchapp1("cac","https://abdulazizdeveloper.github.io/vanilla-os/cac.html")
  } else {
    var ul = document.getElementById("apps"); // the [0] identifies the first element of the returned array
    var li = document.createElement("a");
    li.setAttribute("id", "cac");
    li.setAttribute("style", "padding:3px;   height:100%; float:left; ");
    li.setAttribute("onclick", 'lanuchapp1("cac","https://abdulazizdeveloper.github.io/vanilla-os/cac.html")');

    li.setAttribute("href", "javascript:void(0)");
    li.innerHTML =
      '<img src="https://abdulazizdeveloper.github.io/vanilla-os/cculator.png" style="width:25px;height:20px;"><div style="background-color:lightgreen; width:10px; position:absolute; top:15px;  height:10px;border-radius:50%;"></div>';

    ul.appendChild(li);
   lanuchapp1("cac","https://abdulazizdeveloper.github.io/vanilla-os/cac.html")
  }
}
function photo() {
  if (document.getElementById("photo")) {
     lanuchapp("photo")
  } else {
    var ul = document.getElementById("apps"); // the [0] identifies the first element of the returned array
    var li = document.createElement("a");
    li.setAttribute("id", "photo");
    li.setAttribute("style", "padding:3px;   height:100%; float:left; ");
    li.setAttribute("onclick", '  lanuchapp("photo")');

    li.setAttribute("href", 'javascript:void(0)');
    li.innerHTML =
      '<img src="https://cdn.glitch.com/09a8ed15-b951-4720-a342-399a79eb78c2%2Fphotos.png?v=1595192283653" style="width:20px;height:20px;"> <div style="background-color:lightgreen; width:10px; position:absolute; top:15px;  height:10px;border-radius:50%;"></div>';

    ul.appendChild(li);
    lanuchapp("photo")
  }
}
function clock() {
  if (document.getElementById("clock")) {
lanuchapp1("clock","https://abdulazizdeveloper.github.io/vanilla-os/clock.html");
  } else {
    var ul = document.getElementById("apps"); // the [0] identifies the first element of the returned array
    var li = document.createElement("a");
    li.setAttribute("id", "clock");
    li.setAttribute("style", "padding:3px;   height:100%; float:left; ");
    li.innerHTML =
      '<img src="https://abdulazizdeveloper.github.io/vanilla-os/clock.png" style="width:20px;height:20px;"><div style="background-color:lightgreen; width:10px; position:absolute; top:15px;  height:10px;border-radius:50%;"></div>';
    li.setAttribute("onclick", 'lanuchapp1("clock","https://abdulazizdeveloper.github.io/vanilla-os/clock.html")');
    li.setAttribute("href", "javascript:void(0)");
    ul.appendChild(li);
    lanuchapp1("clock","https://abdulazizdeveloper.github.io/vanilla-os/clock.html");
  }
}

  dragElement1(document.getElementById("app1"));

function setting() {
  if (document.getElementById("setting")) {
   lanuchapp("setting")
  } else {
    var ul = document.getElementById("apps"); // the [0] identifies the first element of the returned array
    var li = document.createElement("a");

    li.setAttribute("id", "setting");
    li.setAttribute("style", "padding:3px;   height:100%; float:left; ");
    li.innerHTML =
      '<img src="https://abdulazizdeveloper.github.io/vanilla-os/setting.png"  style="width:25px;height:20px;"><div style="background-color:lightgreen; width:10px; position:absolute; top:15px;  height:10px;border-radius:50%;"></div>';
    li.setAttribute("onclick", '  lanuchapp("setting")');
    li.setAttribute("href", "javascript:void(0)");
    ul.appendChild(li); 
      lanuchapp("setting")
  }
}
function help() {
  if (document.getElementById("help")) {
   lanuchapp1("help","https://petal-unruly-handball.glitch.me/")
  } else {
    var ul = document.getElementById("apps"); // the [0] identifies the first element of the returned array
    var li = document.createElement("a");
    li.setAttribute("id", "help");
    li.setAttribute("style", "padding:3px;   height:100%; float:left; ");
    li.innerHTML =
      '<img src="https://abdulazizdeveloper.github.io/vanilla-os/help.png"  style="width:23px;height:20px;"><div style="background-color:lightgreen; width:10px; position:absolute; top:15px;  height:10px;border-radius:50%;"></div>';
    li.setAttribute("onclick", 'lanuchapp1("help","https://petal-unruly-handball.glitch.me/")');
    li.setAttribute("href", "javascript:void(0)");

    ul.appendChild(li);
    lanuchapp1("help","https://petal-unruly-handball.glitch.me/")
  }
}
function apps() {
  if (document.getElementById("app")) {
    lanuchapp("app")
  } else {
    var ul = document.getElementById("apps"); // the [0] identifies the first element of the returned array
    var li = document.createElement("a");
    li.setAttribute("id", "app");
    li.setAttribute("style", "padding:3px;   height:100%; float:left; ");
    li.innerHTML =
      '<img src="https://abdulazizdeveloper.github.io/vanilla-os/apps.png"  style="width:25px;height:20px;"><div style="background-color:lightgreen; width:10px; position:absolute; top:15px;  height:10px;border-radius:50%;"></div>';
    li.setAttribute("onclick", 'lanuchapp("app")');
    li.setAttribute("href", "javascript:void(0)");
    ul.appendChild(li);
    lanuchapp("app")
  }
}

window.onkeyup = function(event) {
  let key = event.key;
  if (key == "Home") {
    document.getElementById("fl").style.display = "block";
    document.getElementsByTagName("tag")[0].style.display = "none";
  } else if (key == "End") {
    var x = document.getElementById("demo");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
};


function fun(y) {
  var d = y.parentNode.id;
  var f = d.search("12");
  var gsk = d.substr(0, f);

  var tgh = document.getElementById(gsk);

  tgh.querySelector("div").style.backgroundColor = "grey";

  var n = d.search("2");

  var res = "#" + d.substr(0, n);

  document.querySelector(res).style.display = "none";
  closethis();
  document.getElementById("demo").style.display = "none";
  document.getElementById("not").style.display = "none";
  applytheme();  
}
function cl(y) {
  y.parentNode.outerHTML = "";
}

function fun1(y) {
  var d = y.parentNode.id;
  var a = y.parentNode.id;
  var n = d.search("1");

  var res = "#" + d.substr(0, n);

  var b = document.querySelector("#" + a).outerHTML;
  var s = d.search("2");
  var re = "#" + d.substr(0, s);
  document.querySelector(res).outerHTML = "";
  document.querySelector(re).style.display = "none";

  var m = y.parentNode.id;
  var g = m.search("12");
  var strip = m.search("1");
  var s = "my" + m.substr(0, g);
  var strip1 = m.substr(0, strip) + "1";

  document.getElementById(s).removeAttribute("src");

  closethis();
  document.getElementById("demo").style.display = "none";
  document.getElementById("not").style.display = "none";
  applytheme();  
}
function fn1(y) {
  var d = y.parentNode.id;

  var n = d.search("1");

  var res = "#" + d.substr(0, n);
  var s = d.search("2");
  var re = "#" + d.substr(0, s);
  document.querySelector(res).outerHTML = "";
  document.querySelector(re).style.display = "none";
  document.getElementById("demo").style.display = "none";
  document.getElementById("not").style.display = "none";
  closethis();
}
function fu(y) {
  var d = y.parentNode.id;
  var s = d.search("2");
  var re = "#" + d.substr(0, s);
  document.querySelector(re).style.top = "1px";
  document.querySelector(re).style.left = "5px";
  var x = (document.querySelector(re + " > iframe").width = "1000");
  document.getElementById("mynotpad").height = "1000";
  document.getElementById("mynotpad").width = "1000";
  closethis();
  document.getElementById("demo").style.display = "none";
  document.getElementById("not").style.display = "none";
  applytheme();  
}


function myFunction4(x) {
  var hello = x.clientWidth + "px";
  var m=x.id;
 var g = m.replace("my", "");
  document.getElementById(g+"12").style.width = hello;
}

  


function dragElement1(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "2")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "2").onmousedown = dragMouseDown1;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown1;
  }

  function dragMouseDown1(e) {
    var y = document.querySelectorAll("#deck > div");
    var i;
    for (i = 0; i < y.length; i++) {
      y[i].setAttribute("class", "checked");
    }
    var newItem = document
      .getElementById(elmnt.id)
      .setAttribute("class", "index");
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement1;
     document.onmouseout = closeDragElement1;
    // call a function whenever the cursor moves:
    
    document.onmousemove = elementDrag1;
    document.getElementById("demo").style.display = "none";
    document.getElementById("not").style.display = "none";
    closethis();
  }

  function elementDrag1(e) {
    document.getElementById("demo").style.display = "none";
    document.getElementById("not").style.display = "none";
    closethis();
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    if (pos3 < "1") {
      document.getElementById(elmnt.id).style.left = "1px";
    } else {
    }
    if (pos4 < "50") {
      document.getElementById(elmnt.id).style.top = "20px";
    } else {
    }
  }

  function closeDragElement1() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
