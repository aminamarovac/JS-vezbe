// let prviBroj=document.getElementById("id1").value;
// console.log(prviBroj)

// let drugiBroj=document.getElementById("id2");

let prviBroj=document.mojaForma.prvi.value-0
console.log(prviBroj);

let drugiBroj=document.mojaForma.prvi.value-0
console.log(drugiBroj);

function saberi(){
let zbir=document.mojaForma.saberi;
zbir.value=prviBroj+drugiBroj;
console.log(saberi(zbir));

}


