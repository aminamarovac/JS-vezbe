var rec = /Script/;
var index = "JavaScript je programski jezik".search(rec);
document.write(index);

let uzorak = /2\d\d\d/g;
let text = "1980 1983 1987 1993 1996 1999 2002 2007 2009";
rezultat = text.match(uzorak);
document.write(rezultat);

// function proveri(){
//     var uzorak2=/^\w+([\.-])*@\w+([\.-])*(\.\w{2,3})+$/;
//     var email=prompt("Unesite email");
//     var rez=email.match(uzorak2);
//     if(rez!=null){
//         alert("greska");
//     }else{
//         alert("ispravan");
//     }
// }
// proveri();

let uz = /HTML/gi;
let textt = "HTML je jednostavan.html se uci lako.HTML je zanimljiv.";
let ok = textt.replace(uz, "JAVA");
document.write(ok);

function proveri() {
  var uzorakt = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)-\d{3}-\d{4})$/;
  var te = prompt("broj tel:");
  if (te.test(uzorakt)) {
    var r = te.match(/\d+g/);
    if (r != null) {
      alert("ispravan");
    } else {
      alert("ne");
    }
  }
}

proveri();
//      /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*[1]9?@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){1,3}$/;  

function regexx(){
    var emailInput=document.getElementById("emailInput").value;
    var validationMessage=document.getElementById("validationMessage");  
    
    var rec=/^\w+([_-.]\w+)*[1]9?@\w+(\.\w+){1,3}$/;
    if(rec.test(emailInput)){
        validationMessage.innerHTML="ispravno";
        validationMessage.style.color="green";
    }else{
        validationMessage.innerHTML="greska";
        validationMessage.style.color="red";
    }
}

var emailInput=document.getElementById("emailInput");
emailInput.addEventListener("input",regexx);


// Kreirati input polje tipa text. Korišćenjem regularnih izraza (regex-a) u JavaScriptu ispitati da li je
// sadržaj koji je korisnik uneo u to input polje u sledećem formatu:
// Email sadrži proizvoljan broj karaktera nakon kojih mora doći donja crta ili srednja crta ili tačka,
// a nakon koje slede 2 karaktera i brojevi 1 i 9 (1 je obavezan, 9 moze, a ne mora doci). Nakon njih
// dolazi znak @, praćen proizvoljnim brojem karaktera, pa tackom, nakon koje moze doci
// proizvoljan broj karaktera, pa tacka, pa mora doci najmanje 2, a najvise 4 karaktera.
// (npr. emina-al1@gmail.com ili emina.al19@hotmail.com ili emina_al1@np.ac.rs itd).
// Ukoliko uneti sadržaj zadovoljava ove kriterijume, potrebno je da se ispod input polja unutar p
// taga zelenim slovima ispisuje „Ispravno unet email“, u suprotnom je potrebno da crvenim
// slovima na istom mestu ispiše „Greška u unosu.“ */


