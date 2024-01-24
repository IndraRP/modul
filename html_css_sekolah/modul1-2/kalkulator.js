function calculate() {
    const bilangan1 = parseFloat(document.getElementById("bilangan1").value); 
    const bilangan2 = parseFloat(document.getElementById("bilangan2").value);
    const bilangan3 = parseFloat(document.getElementById("bilangan3").value);
    const bilangan4 = parseFloat(document.getElementById("bilangan4").value);

    //untuk mendeklarasikan variabel bilangan1 yang akan digunakan untuk menyimpan bilangan pertama yang dimasukkan
    const operator = document.getElementById("operator").value;
    //untuk menyimpan operator (penjumlahan, pengurangan, perkalian, pembagian, atau modulus) yang dipilih
    let hasil = 0;
    
    switch (operator) {
        case '+':
            hasil = bilangan1 + bilangan2 +bilangan3+bilangan4 ;
            break;
        case '-':
            hasil = bilangan1 - bilangan2 -bilangan3-bilangan4;
            break;
        case '*':
            hasil = bilangan1 * bilangan2 *bilangan3*bilangan4;
            break;
        case '/':
            hasil = bilangan1 / bilangan2 /bilangan3/bilangan4;
            break;
        case '%':
            hasil = bilangan1 % bilangan2%bilangan3%bilangan4;
            break;
    }
    document.getElementById("hasil").textContent = hasil;
     }