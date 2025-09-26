let ask = true

while (ask) {
    let change = 3
    let tebakanBenar = false
    let player

    while (change > 0 && !tebakanBenar) {
        player = prompt(`masukkan angka 1 - 10 \nAnda memiliki ${change} kesempatan`)

        if(player === null || player.trim() === ""){
            alert("keluar")
            break
        }

        let computer = Math.random()

        if (computer <= 0.1) {
            computer = "1"
        } else if (computer <= 0.2) {
            computer = "2"
        } else if (computer <= 0.3) {
            computer = "3"
        } else if (computer <= 0.4) {
            computer = "4"
        } else if (computer < 0.5) {
            computer = "5"
        } else if (computer <= 0.6) {
            computer = "6"
        } else if (computer <= 0.7) {
            computer = "7"
        } else if (computer <= 0.8) {
            computer = "8"
        } else if (computer <= 0.9) {
            computer = "9"
        } else {
            computer = "10"
        }

        let hasil = ""

        if (computer === player) {
            tebakanBenar = true
            hasil = "benar"
        } else {
            change--
            hasil = "salah"
        }

        
        alert(`Anda memasukkan angka ${player}\nJawaban anda adalah: ${hasil}, Anda memiliki ${change} kesempatan`)
        
        if(!tebakanBenar && change === 0){
            alert("Yah, kesempatan anda sudah habis")
        }
    }
    ask = confirm("mau main lagi?")
}

alert("terimakasih sudah bermain")
