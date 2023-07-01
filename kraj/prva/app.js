function saberi() {
  var br1 = document.myform.x.value - 0;
  var br2 = document.myform.y.value - 0;
  var ukupno = br1 + br2;
  document.myform.zbir.value = ukupno;
}


function sab(operacija){
    var broj1=parseInt(document.forma.br1.value);
    var broj2=parseInt(document.forma.br2.value);
    var rezultat=0;
    if((isNaN(broj1)==false) && isNaN(broj2)==false){
        switch(operacija){
            case 1:
                rezultat=broj1+broj2;
                break;
                case 2:
                    rezultat=broj1-broj2;
                    break;
                    case 3:
                        rezultat=broj1*broj2;
                        break;
                        case 4:
                            rezultat=broj1/broj2;
                            break;

        }
        document.forma.rez.value=rezultat;

    }else{
        alert("radi samo sa brojevima");
    }
}
