function EditStyle(){
    const panjangInput = document.getElementById('panjang');
  const lebarInput = document.getElementById('lebar');
  const warna = document.getElementById('warna').value;
  const teksInput = document.getElementById('teks').value;

  //nilai lebar dan tinggi dari input
  let panjang = parseFloat(panjangInput.value);
  let lebar = parseFloat(lebarInput.value);

  square.style.width = panjang + '%';
  square.style.height = lebar + '%';
  square.style.backgroundColor = warna;
  square.innerText = teksInput;
  square.style.color = 'white'; 
  square.style.textAlign = 'center'
 
}