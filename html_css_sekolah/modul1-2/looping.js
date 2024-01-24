function hasil() {
    var ppp = (document.getElementById('ppp').value);
    var loop = parseInt(document.getElementById('loop').value);

    var hasilloop="";
  
    for (var i = 0; i < loop; i++) {
        hasilloop+= ppp +"<br>";
    }
    document.body.innerHTML+=hasilloop
  }

