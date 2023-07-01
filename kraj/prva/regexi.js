var rec=/Script/;
var index="JavaScript je programski jezik".search(rec);
document.write(index);

let uzorak=/2\d\d\d/g;
let text="1980 1983 1987 1993 1996 1999 2002 2007 2009";
rezultat=text.match(uzorak);
document.write(rezultat);

function proveri(){
    var uzorak2=/^\w+([\.-])*@\w+([\.-])*(\.\w{2,3})+$/;
    var email=prompt("Unesite email");
    var rez=email.match(uzorak2);
    if(rez!=null){
        alert("greska");
    }else{
        alert("ispravan");
    }
}
proveri();