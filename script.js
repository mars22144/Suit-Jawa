let tanya = true
while(tanya){
    //player input
    let player = prompt("pilih : gajah, semut, orang")
    
    //random computer
    let computer = Math.random()
    
    if(computer < 0.34){
        computer = "gajah"
    }else if(computer >= 0.34 && computer < 0.67){
        computer = "semut"
    }else{
        computer = "orang"
    }
    
    //rules
    let  hasil = ""
    
    if(player === computer){
        hasil = `anda memilih ${player} dan komputer memilih ${computer} \nAnda Seri`
    }else if(player === "gajah"){
        if(computer === "semut"){
            hasil = "Kalah"
        }else{
            hasil = "Menang"
        }
    }else if(player === "semut"){
        if(computer === "gajah"){
            hasil = "Menang"
        }else{
            hasil = "Kalah"
        }
    }else if(player === "orang"){
        if(computer === "gajah"){
            hasil = "Kalah"
        }else{
            hasil = "Menang"
        }
    }else{
        hasil = "pilihan tidak ada"
    }
    
    alert(`anda memilih ${player} dan komputer memilih ${computer} \nAnda: ${hasil}`)

    tanya = confirm("Main lagi?")
}

alert("terimakasih sudah bermain")
