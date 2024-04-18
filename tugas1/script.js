let nama = "Arif";
let hobi = ["Baca", "Bermaingame", "Belajar Coding"]
let listmhs = document.getElementById("listhobi")

document.getElementById("nama").innerHTML = "Arif";
document.getElementById("hobi").innerHTML = "belajar coding";


function showhobi(velue, index){
    console.log(velue);
    listhobi.innerHTML += "<li>" + velue + "</li>";
}


