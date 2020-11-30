function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
function myFunction() {
  var iframe = document.getElementById("myFrame");
  var elmnt = iframe.contentWindow.document.getElementsByTagName("fl")[0];
var btn = document.createElement("div");   // Create a <button> element
btn.style.width = "100%";
 btn.style.border="1px solid black";
   btn.style.marginLeft="-10px";
  btn.style.textAlign="center";
  btn.style.backgroundColor= getRandomColor();// Insert text
elmnt.appendChild(btn);
  btn.innerHTML="<br><h1>div</h1>"
btn.setAttribute("class", "thisdiv");
  btn.setAttribute("id", makeid(5) );
  btn.setAttribute("ondblclick", "track(this);parent.document.getElementById('button1').disabled = false;" );
  
}


/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
function h(r){
 var s= document.getElementsByTagName("textarea")[0].value;
  
   var x = document.getElementById("myFrame");
  var y = x.contentWindow.document.getElementById(s);
  
  y.innerHTML= r.value;
      var x = document.getElementById("myFrame");
  var y = x.contentWindow.document.getElementsByTagName("body")[0].innerHTML;
          localStorage.removeItem("body10");
      
    localStorage.setItem("body10", y);
}
// prints "hi" in the browser's dev tools console
function f(r){
 var s= document.getElementsByTagName("textarea")[0].value;
  
   var x = document.getElementById("myFrame");
  var y = x.contentWindow.document.getElementById(s);
  
  y.setAttribute("style", r.value );
      var x = document.getElementById("myFrame");
  var y = x.contentWindow.document.getElementsByTagName("body")[0].innerHTML;
          localStorage.removeItem("body10");
      
    localStorage.setItem("body10", y);
}
function my(){
 var s= document.getElementsByTagName("textarea")[0].value;
  
   var x = document.getElementById("myFrame");
  var y = x.contentWindow.document.getElementById(s);
    document.getElementsByTagName("textarea")[0].value="";
  document.getElementsByTagName("textarea")[2].value="";
     document.getElementsByTagName("textarea")[1].value="";
  y.outerHTML=""
}
// prints "hi" in the browser's dev tools console
console.log("hi");
  function download() {
        var text = document.getElementById("content-target").value;

        var blob = new Blob([text], { type: "text/plain" });
        var anchor = document.createElement("a");
     var m=   document.getElementById("s").value
        anchor.download = m +".html"  ;
        anchor.href = window.URL.createObjectURL(blob);
        anchor.target = "_blank";
        anchor.style.display = "none"; // just to be safe!
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
  }
      function add() {
      
        
          var a = document.createElement("a");
          a.href = document.getElementById("href").value;
      
          a.innerText = document.getElementById("link").value;
        
          a.setAttribute(
           "style",
           "margin-left:3%;text-decoration:none;"
          );
         
       var x = document.getElementById("myFrame");
  var y = x.contentWindow.document.getElementsByTagName("div")[0];
          y.appendChild(a);
          if (a. innerText != "") {
           document.getElementById("demo");
           var addlink=document.getElementById("addlink").style.display="none";
            var href = document.getElementById("href").value="";
       
         var text = document.getElementById("link").value="";
          }else if (a.innerText != null){
           document.getElementById("demo");
           var addlink=document.getElementById("addlink").style.display="block";
            
          }
           var x = document.getElementById("myFrame");
  var y = x.contentWindow.document.getElementsByTagName("body")[0].innerHTML;
          localStorage.removeItem("body10");
      
    localStorage.setItem("body10", y);
        } 
        
      function display() {
        var display =document.getElementById("addlink").style.display="none";
         var href = document.getElementById("href").value="";
       
         var text = document.getElementById("link").value="";
      }
    function display1() {
        var display =document.getElementById("addlink").style.display="block";
         var href = document.getElementById("href").value="";
       
         var text = document.getElementById("link").value="";
      }
 
     var x = document.getElementById("myFrame");
  var y = x.contentWindow;
  readFile(this.files[0], function(e) {
            //manipulate with result...
             y.querySelector("html").innerHTML=e.target.result;
          });

  function readFile(file, callback) {
        var reader = new FileReader();
        reader.onload = callback;
        reader.readAsText(file);
      }