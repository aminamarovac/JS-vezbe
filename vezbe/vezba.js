function Start(){
    for(var i=0;i<5;i++){
        if(true){
            color="red"
        }

    }
    console.log(color);
}
Start();


function calcAge(birthAge,name){
    let age=2022-birthAge;
    console.log(`Godine su ${age},ime je ${name}`);
    return age;
}
calcAge(2003,"Amina");


var ime=document.getElementsByTagName("p")[0].style.color="red";
document.write(ime);

let ok=document.getElementById("ok").style.color="blue";
document.write(ok);

var klasa=document.getElementsByClassName("klasa")[0].style.color="green";
var klasa=document.getElementsByClassName("klasa")[0].style.border=" 2px solid black";
document.write(klasa);

var selector=document.querySelector("p").style.color="gray";
document.write(selector);

var svi=document.querySelectorAll("p")[3].style.color="blue";
document.write(svi);