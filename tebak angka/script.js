let ask = true

while (ask) {
    let change = 3
    let tebakanBenar = false
    let player

    //mendefinisikan angka 1 - 10
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

    while (change > 0 && !tebakanBenar) {
        player = prompt(`masukkan angka 1 - 10 \nAnda memiliki ${change} kesempatan`)

        //jika user menclick cancel, maka akan keluar
        if(player === null || player.trim() === ""){
            alert("keluar")
            break
        }

        //medefinisikan nilai dari hasil
        if (computer === player) {
            tebakanBenar = true
            alert(`Anda memasukkan angka ${player} dan komputer memasukkan angka ${computer}, jawaban anda Benar`)
        } else {
            change--
            let hint = ""
            if(player > computer){
                hint = "tertlalu besar"
            }else{
                hint = "terlalu kecil"
            }
            alert(`Anda memasukkan angka ${player}, jawaban anda Salah ${hint}, Anda memiliki ${change} kesempatan`)
        }

    }
    //jika kesempatan sudah habis
    if(change === 0){
        alert("Yah, kesempatan anda sudah habis")
    }
    ask = confirm("mau main lagi?")
}

alert("terimakasih sudah bermain")
