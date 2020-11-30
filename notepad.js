
      setInterval(function() {
        var s = window.innerHeight;

        var s1 = window.innerWidth;

        var x = document.querySelectorAll(".thisdiv");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].style.width = s1 + "px";
          x[i].style.height = s + "px";
        }
      }, 1);
      var childwin = parent;
      function save2() {
        var s = window.frameElement.getAttribute("hello");

        var m = document.getElementById("write").innerHTML;
        var x, i;
        x = parent.document.getElementsByName(s);
        for (i = 0; i < x.length; i++) {
          x[i].setAttribute("data", m);
        }
      }
      function check() {
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'></head><body>";
       var footer = "</body></html>";
       var sourceHTML = header+document.getElementsByClassName("thisdiv")[0].innerHTML+footer;
       
       var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
       var fileDownload = document.createElement("a");
       document.body.appendChild(fileDownload);
       fileDownload.href = source;
       fileDownload.download = document.getElementById("filename123").value+'.doc';
       fileDownload.click();
       document.body.removeChild(fileDownload); 
      }

      function save() {
        var m = parent.document.getElementById("save1");
        parent.document.getElementById("save1").style.display = "block";
        var s = window.frameElement.parentNode.getAttribute("src");
        parent.document.getElementById("save1").setAttribute("app", s);
        parent.document
          .getElementById("savebutton")
          .removeAttribute("disabled");
        parent.document
          .getElementById("openbutton")
          .setAttribute("disabled", "true");
      }
      function open2() {
        parent.document.getElementsByClassName("sl")[0].click();
parent.document.getElementById("bar").click();

        var m = parent.document.getElementById("save1");
     parent.document.getElementById("save1").style.display = ""
        var s = window.frameElement.parentNode.getAttribute("src");
        parent.document.getElementById("save1").setAttribute("app", s);
        parent.document
          .getElementById("openbutton")
          .removeAttribute("disabled");
        parent.document
          .getElementById("savebutton")
          .setAttribute("disabled", "true");
      }

      function yellow(x) {
        var range = window.getSelection().toString();
        if (range == "") {
        } else {
          var range = window.getSelection().getRangeAt(0);
          var range1 = window.getSelection().anchorNode.parentNode.tagName;
          if (range1 == "SPAN") {
            var ran = window.getSelection().anchorNode.parentNode;

            var m=window.getSelection();
            if (ran.innerHTML == m ){
              (content = range.extractContents()),
              (span = document.createElement("span"));
            span.style.color = x.value;
            span.appendChild(content);
            var htmlContent = span.innerHTML;

            range.insertNode(span);
            } else{
              ran.style.color = x.value;
            }
            
          } else {
            (content = range.extractContents()),
              (span = document.createElement("span"));
            span.style.color = x.value;
            span.appendChild(content);
            var htmlContent = span.innerHTML;

            range.insertNode(span);
          }
        }
      }

      function bold() {
      document.execCommand("bold");
      }

      function italic() {
      document.execCommand("italic");
      }
      function u() {
   document.execCommand("underline");
      }
      function s() {
     document.execCommand("strikethrough");
      }

      function h() {
        var s = window.getSelection().anchorNode.parentNode.tagName;
        var a = window.getSelection().anchorNode.parentNode;

        if (s == "H1") {
          var u = a.innerHTML;
          var s = window.getSelection();
          var t = document.createTextNode(s);

          var l = u.search(s);
          var res = u.substr(0, l);

          a.outerHTML = "<h1>" + res + "</h1>" + s;
        } else {
          var range = window.getSelection().getRangeAt(0),
            content = range.extractContents(),
            span = document.createElement("h1");

          span.appendChild(content);
          var htmlContent = span.innerHTML;

          range.insertNode(span);
        }
        window.getSelection().removeAllRanges();
      }
      function sub() {
        var s = window.getSelection().anchorNode.parentNode.tagName;
        var a = window.getSelection().anchorNode.parentNode;

        if (s == "SUB") {
          var u = a.innerHTML;
          var s = window.getSelection();
          var t = document.createTextNode(s);

          var l = u.search(s);
          var res = u.substr(0, l);

          a.outerHTML = "<sub>" + res + "</sub>" + s;
        } else {
          var range = window.getSelection().getRangeAt(0),
            content = range.extractContents(),
            span = document.createElement("sub");

          span.appendChild(content);
          var htmlContent = span.innerHTML;

          range.insertNode(span);
        }
        window.getSelection().removeAllRanges();
      }
      function fontsize(x) {
        var range = window.getSelection().toString();

        if (range == "") {
        } else {
          var range = window.getSelection().getRangeAt(0);
          var range1 = window.getSelection().anchorNode.parentNode.tagName;
          if (range1 == "SPAN") {
            var ran = window.getSelection().anchorNode.parentNode;
            ran.style.fontSize = x.value+"px";
          } else {
            (content = range.extractContents()),
              (span = document.createElement("span"));
            span.style.fontSize = x.value+"px";
            span.appendChild(content);
            var htmlContent = span.innerHTML;

            range.insertNode(span);
          }
        }
      }

      function fontfamily(x) {
   var range = window.getSelection().toString();
        if (range == "") {
        } else {
          var range = window.getSelection().getRangeAt(0);
          var range1 = window.getSelection().anchorNode.parentNode.tagName;
          if (range1 == "SPAN") {
            var ran = window.getSelection().anchorNode.parentNode;
            ran.style.fontFamily  = x.value;
          } else {
            (content = range.extractContents()),
              (span = document.createElement("span"));
            span.style.fontFamily = x.value;
            span.appendChild(content);
            var htmlContent = span.innerHTML;

            range.insertNode(span);
          }
        }
      }

      function center() {
 var range = window.getSelection().getRangeAt(0),
            content = range.extractContents(),
            span = document.createElement("p");
span.style.textAlign="center";
          span.appendChild(content);
          var htmlContent = span.innerHTML;

          range.insertNode(span);
          window.getSelection().removeAllRanges();
      }
      function right() {
         var range = window.getSelection().getRangeAt(0),
            content = range.extractContents(),
            span = document.createElement("p");
span.style.textAlign="right";
          span.appendChild(content);
          var htmlContent = span.innerHTML;

          range.insertNode(span);
          window.getSelection().removeAllRanges();
      }
      function left() {
       var range = window.getSelection().getRangeAt(0),
            content = range.extractContents(),
            span = document.createElement("p");
span.style.textAlign="left";
          span.appendChild(content);
          var htmlContent = span.innerHTML;

          range.insertNode(span);
            window.getSelection().removeAllRanges();
      }
    