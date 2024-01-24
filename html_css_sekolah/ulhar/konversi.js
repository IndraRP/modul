function konversi(){
    var hasil = document.getElementById("hasil");
    var bilangan = document.getElementById("bilangan").value;


    if (bilangan <=50 && bilangan >= 0){
        hasil.value = "D";
    } else if (bilangan <=75 && bilangan >= 50){
    hasil.value = "C";
}else if(bilangan <=80 && bilangan >= 75){
    hasil.value="B";
}else if (bilangan<=90 && bilangan>=80){
    hasil.value="A";
}else if(bilangan<=100 && bilangan>=90){
hasil.value="A+";
}else{
    alert("ANDA SALAH");
}
}
