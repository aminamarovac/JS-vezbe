var tekst = document.getElementById("tekstUnutarEditora");

function velikaSlova(){
    tekst.style.textTransform="uppercase"
}

function bolduj(){
    tekst.style.fontWeight='bold';
}

function italic(){
    tekst.style.fontStyle = "italic";
}

function malaSlova(){
    tekst.style.textTransform="lowercase"
}

function obrisi(){
    tekst.value="";
}

function prvaVelikaSlova() {
    tekst.style.textTransform="capitalize"
}

  function poravnajCentralno(){
    tekst.style.textAlign="center";
}

  function poravnajLevo(){
    tekst.style.textAlign="left";
}

  function poravnajDesno(){
    tekst.style.textAlign="right";
}

  function saveAsWord() {
    const tekstZaPreuzimanje = document.getElementById("tekstUnutarEditora").value;
    const blob = new Blob([tekstZaPreuzimanje], { type: "application/msword" });
    saveAs(blob, "mojDokument.doc");
    //preuzimanje omoguceno pomocu FileSavera 
}
