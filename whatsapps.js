var loadFile = function(event) {
    var output = document.getElementById('load1');
    output.src = URL.createObjectURL(event.target.files[0]);
  };
  function myStudent() {
    var x = document.getElementById("student");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
      function myFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("mySearch");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
       function newElement(){
           var li=document.createElement("li");
           var inputValue=document.getElementById("myInput").value;
           var t=document.createTextNode(inputValue);
           li.appendChild(t);
           if(inputValue===""){
               alert("You must write something!");
           }else{
               document.getElementById("myUL").appendChild(li);
           }
       }
