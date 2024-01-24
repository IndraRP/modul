persegipanjang = () =>{
    // mengambil nilai dari elemen (get value)
      let panjang = document.getElementById('panjang').value;
      let lebar = document.getElementById('lebar').value;
      let hasil = panjang * lebar;
      
      // menentukan nilai pada elemen (set value)
      document.getElementById('hasil').value = hasil;

    }

    function reset(){
        document.getElementById('panjang').value="";
        document.getElementById('lebar').value="";
        document.getElementById('hasil').value="";
    }
