
function myFunction() {
  var d = new Date();
  var x = document.getElementById("demo");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  x.innerHTML = h + ":" + m ;
}

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}




function extractor(str,gh){
  var url3 = str; 
  
  var j = url3.indexOf("://"); 

  var host = ""; 

  for (i = j + 3; i < url3.length; i++) { 
      if (url3.charAt(i) != '/') { 
          host = host + "" + url3.charAt(i); 
      } else { 
          break; 
      } 
  } 
  var url = new URL(str);
 
  var para = document.createElement("li");       
  var jj="'"+str+"'";          // Create a <p> element
    var you =url.host
    var y ="&nbsp;&nbsp;"+   document.getElementById("extractor").getElementsByTagName("p")[0].innerHTML;

para.innerHTML = ' <a src='+jj+' onclick="lanuchapp1('+jj+',this);more()"><img src='+"http://www.google.com/s2/favicons?domain="+host+' ><p>'+" "+y+'</p></a> <button style="font-size:15px;    font-size: 15px;margin-top: -46px;float:right;   background-color:dimgrey;  width: fit-content;" onclick="this.parentNode.outerHTML=null"><i class="fa fa-trash " ></i></button>';        

var par = document.createElement("div");
  par.innerHTML = '<p> <img><txt></txt> <button onclick="fun12(this)">-</button>&nbsp;<button onclick="width(this)">      &#xf1eb;</button>&nbsp;<button onclick="fun1(this,event)">x</button>	<button onclick="refresh(this)">&#x21bb;</button></p> <iframe  ></iframe>';
  par.setAttribute("class","unbody")
  
 document.getElementById("deck").appendChild(par);
 lanuchapp1(str,gh);
 more(); 
 var list = document.getElementById("myUL");    // Get the <ul> element to insert a new node
 list.insertBefore(para, list.childNodes[0]);
 document.getElementById("extractor").parentNode.style.display="none";
}
function isValidHttpUrl(string) {
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(string))
        {
          return true;
        }
        else
        {
          return false;
        }
}
        function search() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        var g=isValidHttpUrl(input.value);
        if (g==true){
          var jj='"'+input.value+'"';  
       if(document.querySelector("a[src="+jj+"]")){
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
        li[i].style.display="none"
          
          
        }
        var jj='"'+input.value+'"';
        document.querySelector("a[src="+jj+"]").parentNode.style.display=""
       }else{
          var url3 = input.value; 
  
  var j = url3.indexOf("://"); 

  var host = ""; 

  for (i = j + 3; i < url3.length; i++) { 
      if (url3.charAt(i) != '/') { 
          host = host + "" + url3.charAt(i); 
      } else { 
          break; 
      } 
  } 
  var url = new URL(input.value);
 
      
  var jj="'" +input.value+"'";          // Create a <p> element
    var you =url.host
    var y ="&nbsp;"+you.replace(/(https?:\/\/)?(www.)?/i, '');

document.getElementById("extractor").getElementsByTagName("img")[0].setAttribute("src","http://www.google.com/s2/favicons?domain="+host)
var xhttp1 = new XMLHttpRequest();
xhttp1.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("extractor").getElementsByTagName("p")[0].innerHTML=
    this.responseText.match(/<title>(.*?)<\/title>/);
  }else{
    document.getElementById("extractor").getElementsByTagName("p")[0].innerHTML=y; 
  }
};
xhttp1.open("GET", "http://localhost:8080/"+input.value, true);
xhttp1.send();

document.getElementById("extractor").setAttribute("onclick","extractor("+jj+",this);")

ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
        li[i].style.display="none"
          
          
        }
     
        document.getElementById("extractor").style.display="";
        document.getElementById("extractor").parentNode.style.display=""
       }
        }else{
          document.getElementById("extractor").style.display="none"
          document.getElementById("extractor").parentNode.style.display="none"
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("p")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().includes(filter)) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
         
        }
        
      }
   
     
      }

      
      function plus1() {
        var list = document.getElementById("cac");
        var m = list.innerText;

        list.setAttribute("memory", m);
        var t = (list.innerText = "");
        list.appendChild(t);
      }
      function myFunction() {
        var list1 = document.getElementById("cac").innerHTML;
        var r = list1.replace("÷", "/");
        var m = r.replace("×", "*");
   var s = m.replace("x", "**");
        var g = eval(s);

        var list1 = (document.getElementById("cac").innerHTML = g);
      }
      function plus(x) {
        var t = document.createTextNode(x.innerText);
        var list = document.getElementById("cac");
        list.appendChild(t);
      }
      function divi() {
        var t = document.createTextNode("÷");
        var list = document.getElementById("cac");
        list.appendChild(t);
      }
      function c() {
        var list = (document.getElementById("cac").innerHTML = "0");
      }
      function c1() {
        var list = document.getElementById("cac").innerHTML;
        var a = list.substring(0, list.length - 1);
        document.getElementById("cac").innerHTML = a;
      }
function closethis() {
 
  document.getElementById("myInput1").value = "";
  document.getElementById("filename").value = "";
}
function sun(x) {
  document.getElementById("fl").style.filter =
    "brightness(" + x.value + "%)";
}
function foo1() {
  setting();
  setting1();
}

function less() {
  document.getElementById("not").style.display = "none";
  var x = document.getElementById("demo");
  if (x.style.display === "flex") {
    x.style.display = "none";
    document.getElementById("launch").innerHTML = '<b style="font-size:16px;"><i class="fas fa-search"></i></b>'

  } else {
    x.style.display = "flex";
    document.getElementById("launch").innerHTML = '<b style="font-size:16px;"><i class="fas fa-desktop"></i></b>'

  }
  
  document.getElementById("myInput").focus();
}
function more() {
  document.getElementById("demo").style.display = "none";
  document.getElementById("launch").innerHTML = '<i class="fas fa-search"></i>'
}

function fullscreen() {
  document.getElementById("fl").style.display = "none";
  document.getElementsByTagName("tag")[0].style.display = "block";
}




function theme() {
  more();
  var x = document.getElementById("not");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("demo").style.animation = "";
  } else {
    x.style.display = "block";
    var y1 = document.querySelectorAll("#deck > div");
    var i;
    for (i = 0; i < y1.length; i++) {
      y1[i].style.zIndex = "";
    }
  }
}

var openFile = function(file) {
  var fileType = document.getElementById('inputfile').files[0].type;
var fileModifiedDate = document.getElementById('inputfile').files[0].lastModifiedDate;
if(fileType.includes("image")){
var input = file.target;

var reader = new FileReader();
reader.onload = function(){
  var dataURL = reader.result;
  var output = document.getElementById('op')
  output.setAttribute("src",dataURL)
};
reader.readAsDataURL(input.files[0]);
}};
function lanuchy(div,divy){
	if (document.getElementById(div+"$$5")) {

  } else {
	document.getElementsByClassName("unbody")[0].setAttribute("id",div+"$$5");
	}
  var elem = document.getElementById(div).getElementsByTagName("div")[0]
  var x = window.getComputedStyle(elem, null).getPropertyValue("background-color");
if (x== "rgb(144, 238, 144)"){
	document.getElementById(div+"$$5").style.display = "none";

elem.style.display="";
    elem.style.backgroundColor = "grey";
}else{
		document.getElementById(div+"$$5").style.display = "block";
elem.style.display="";
    elem.style.backgroundColor = "rgb(144, 238, 144)";
		 var y1 = document.querySelectorAll("#deck > div");
 var i;
    for (i = 0; i < y1.length; i++) {
		y1[i].style.zIndex="";
    }
		document.getElementById(div+"$$5").style.zIndex="45";
}
  
if (document.getElementById(div+"$$5").getElementsByTagName("iframe")[0].hasAttribute("src")) {


 } else{
    document.getElementById(div+"$$5").getElementsByTagName("iframe")[0].setAttribute("src", src);
 }
}
function lanuchapp1(src,src12) {
  var list = document.getElementById("myUL");    // Get the <ul> element to insert a new node
list.insertBefore(src12.parentNode, list.childNodes[0]);
var par = document.createElement("div");
  par.innerHTML = '<p> <img><txt></txt> <button onclick="fun12(this)">-</button>&nbsp;<button onclick="width(this)">      &#xf1eb;</button>&nbsp;<button onclick="fun1(this,event)">x</button>	<button onclick="refresh(this)">&#x21bb;</button></p> <iframe  ></iframe>';
  par.setAttribute("class","unbody")
  document.getElementById("deck").appendChild(par)
		if (document.getElementById(src+"$$5")) {

  } else {
	document.getElementsByClassName("unbody")[0].setAttribute("id",src+"$$5");
	}
	 if (document.getElementById(src)) {

  } else {
    var ul = document.getElementById("apps"); // the [0] identifies the first element of the returned array
    var li = document.createElement("a");
    li.setAttribute("id", src);
    li.setAttribute("style", "padding:7px;   height:100%; float:left; ");
    li.setAttribute("onclick", 'lanuchy("'+src+'","'+src+'")');
li.setAttribute("href", "javascript:void(0)");
 var m=src12.getElementsByTagName("img")[0].getAttribute("src");
var rt=src12.getElementsByTagName("p")[0].innerHTML;
 var g1 =document.getElementById(src+"$$5").getElementsByTagName("img")[0].setAttribute("src",m);
    li.innerHTML =
      '<img src="'+m+'" style="width:16px;height:16px;"><div style="background-color:lightgreen;margin-left:auto; margin-right:auto; width:15px; position:relative; top:3px;  height:3px;border-radius:5px;"></div>';

    ul.appendChild(li); 
		      var g1 =document.getElementById(src+"$$5").getElementsByTagName("txt")[0].innerHTML=" "+rt+" "+"|" +"  ";
}

var g=document.getElementById(src+"$$5");
var het=src12.getAttribute("i");

g.getElementsByTagName("iframe")[0].setAttribute("style", het)


if (g.getElementsByTagName("iframe")[0].hasAttribute("src")) {


 } else{
    g.getElementsByTagName("iframe")[0].setAttribute("src", src);
 }
  dragElement1(document.getElementById(src+"$$5"));
	  document.getElementById(src+"$$5").style.display = "block";
    var y1 = document.querySelectorAll("#deck > div");
    var tgh = document.getElementById(src)
    tgh.getElementsByTagName("div")[0].style.backgroundColor = "lightgreen";
    var i;
    for (i = 0; i < y1.length; i++) {
		y1[i].style.zIndex="0";
    }
    
    var newItem = document
      .getElementById(src+"$$5").removeAttribute("class");
			document
      .getElementById(src+"$$5").style.zIndex="45";
      document
      .getElementById(src+"$$5").setAttribute("class","bodes")
}

function width(x) {
  x.parentNode.parentElement.style.top = "-13px";
  x.parentNode.parentElement.style.left = "1px";
  x.parentNode.parentElement.style.width = "99%";
  x.parentNode.parentElement.style.height = "90%";
} 
function fun12(y) {  
  var d = y.parentNode.parentElement.id;
  
  var gsk = d.replace("$$5","")

  var tgh = document.getElementById(gsk).getElementsByTagName("div")[0].style.backgroundColor = "grey"


 var m= tgh;


  

  document.getElementById(d).style.display = "none";
  
  document.getElementById("demo").style.display = "none";
  document.getElementById("not").style.display = "none";

}
function refresh(y) {
  var d = y.parentNode.parentElement;
  var h = d.getElementsByTagName("iframe")[0].getAttribute("src");
  d.getElementsByTagName("iframe")[0].setAttribute("src", h)
  
  document.getElementById("demo").style.display = "none";
  document.getElementById("not").style.display = "none";
}
function fun1(y,event) {
 
    document.getElementById("not").style.display = "none";
    var x = document.getElementById("demo").style.display = "flex";
   
   
 

  var d = y.parentNode.parentElement.id;

  var n = d.search("$$5");

  var res =  d.replace("$$5","")
  document.getElementById(res).outerHTML = "";
 y.parentNode.parentElement.style.display = "none";

y.parentNode.parentElement.outerHTML='   <div   class="unbody"><p> <img><txt></txt> <button onclick="fun12(this)">-</button>&nbsp;<button onclick="width(this)">      &#xf1eb;</button>&nbsp;<button onclick="fun1(this,event)">x</button>	<button onclick="refresh(this)">&#x21bb;</button></p> <iframe  ></iframe></div>  '
  
  document.getElementById("demo").style.display = "none";
  document.getElementById("not").style.display = "none";

}

function fu(y) {
  var d = y.parentNode.id;
  var s = d.search("$$5");
  var re = "#" + d.replace("$$5","");
  y.parentNode.parentElement.style.top = "-13px";
  y.parentNode.parentElement.style.left = "5px";
  var x = (document.querySelector(re + " > iframe").width = "1000");

  
  document.getElementById("demo").style.display = "none";
  document.getElementById("not").style.display = "none";

}

function dragElement1(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id +"$$5")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id +"$$5").getElementsByTagName("p")[0].onmousedown = dragMouseDown1;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown1;
  }

  function dragMouseDown1(e) {
    var y = document.querySelectorAll("#deck > div");
    var i;
    for (i = 0; i < y.length; i++) {

		y[i].style.zIndex="0";
    }
    
    var newItem = document
      .getElementById(elmnt.id).style.zIndex="45";
    e = e || window.event;
  
function fpercent(quantity, percent)
{
    return quantity * percent / 100;
}
    
    var elem= document.getElementById("deck").getElementsByTagName("div")
    var i;
    for(i=0; i<elem.length; i++){
     
      if (window.getComputedStyle(elem[i], null).getPropertyValue("position")=="relative" ){
        elem[i].style.width="99%"
      }
      elem[i].style.position="absolute"
      elem[i].getElementsByTagName("p")[0].style.backgroundColor="black"
      elem[i].getElementsByTagName("button")[0].style.display=""
      elem[i].getElementsByTagName("button")[1].style.display=""
      elem[i].getElementsByTagName("button")[3].style.display=""
      elem[i].style.height= "90%";

      elem[i].style.zIndex="0"
    }
    elmnt.style.zIndex="45"
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
    
  }

  function elementDrag1(e) {
    document.getElementById("demo").style.display = "none";
    document.getElementById("not").style.display = "none";
    
    document.getElementById("deck").style.display=""
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
    if (pos3 < 1) {
      document.getElementById(elmnt.id).getElementsByTagName("iframe")[0].style.display=""
      document.getElementById(elmnt.id).style.left = "1px";
      document.getElementById(elmnt.id).style.top = "-13px";
      document.getElementById(elmnt.id).style.width ="49%";
      document.getElementById(elmnt.id).style.height ="90%";
    } else if (pos3 > 1200) {
      document.getElementById(elmnt.id).getElementsByTagName("iframe")[0].style.display=""
      document.getElementById(elmnt.id).style.left = "49%";
      document.getElementById(elmnt.id).style.top = "-13px";
      document.getElementById(elmnt.id).style.width ="50%";
      document.getElementById(elmnt.id).style.height ="90%";
    }
    if (pos4 < "7") {
      document.getElementById(elmnt.id).getElementsByTagName("iframe")[0].style.display=""
      document.getElementById(elmnt.id).style.top = "-13px";
      document.getElementById(elmnt.id).style.left = "1px";
      document.getElementById(elmnt.id).style.width ="99%";
      document.getElementById(elmnt.id).style.height ="90%";
    } else if(pos4 >"400")  {
      document.getElementById(elmnt.id).getElementsByTagName("iframe")[0].style.display=""
      document.getElementById(elmnt.id).style.top = "270px";
      document.getElementById(elmnt.id).style.left = "1px";
      document.getElementById(elmnt.id).style.width ="99%";
      document.getElementById(elmnt.id).style.height ="50%";
    }
  }

  function closeDragElement1() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function sort(){

  var elem= document.getElementById("deck").getElementsByTagName("div")
  var i;
  for(i=0; i<elem.length; i++){
    elem[i].style.position="relative"
    elem[i].style.top=""
    elem[i].style.left=""
    elem[i].getElementsByTagName("p")[0].style.backgroundColor="grey"
    elem[i].getElementsByTagName("button")[0].style.display="none"
    elem[i].getElementsByTagName("button")[1].style.display="none"
    elem[i].getElementsByTagName("button")[3].style.display="none"
    elem[i].style.height= window.innerHeight-(window.innerHeight/10);
    elem[i].style.width= "33%";
    elem[i].style.zIndex="0"
  }
  document.getElementById("deck").style.display="flex"
}