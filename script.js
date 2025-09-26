let player = prompt("pilih : gajah, semut, orang")

let computer = Math.random()

if(computer < 0.34){
    computer = "gajah"
}else if(computer >= 0.34 && computer < 0.67){
    computer = "semut"
}else{
    computer = "orang"
}

console.log(computer)