

function barang(){
    var barang = document.getElementById("barang").value;
    var harga = document.getElementById("harga");

    switch(barang){
        case "pentol":
            harga.value="5000"  
            break

            case "siomay":
                harga.value="6000"
                break
    }
}
