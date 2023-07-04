var obj1 = {
  ime: "amina",
  prezime: "marovac",
  prosek: 10,
};

var obj2 = {
  ime: "amina",
  prezime: "marovac",
  prosek: 10,
};

var obj3 = {
  ime: "amina",
  prezime: "marovac",
  prosek: "10",
};

var obj4 = {
  ime: "amina",
  prezime: "marovac",
  prosek: "10",
};

var obj5 = {
  ime: "amina",
  prezime: "marovac",
  prosek: "10",
};

var niz = [obj1, obj2, obj3, obj4, obj5];
let tabela = document.getElementById("tabela");
let trow = document.createElement("tr");
let tdata1 = document.createElement("td");
let tdata2 = document.createElement("td");
let tdata3 = document.createElement("td");
let txtNode1 = document.createTextNode("ime");
let txtNode2 = document.createTextNode("prezime");
let txtNode3 = document.createTextNode("prosek");
tdata1.appendChild(txtNode1);
tdata2.appendChild(txtNode2);
tdata3.appendChild(txtNode3);
trow.appendChild(tdata1);
trow.appendChild(tdata2);
trow.appendChild(tdata3);
trow.style.backgroundColor = "blue";
tabela.appendChild(trow);

niz.sort((a, b) => {
  return b.prosek - a.prosek;
});

for (i = 0; i < niz.length; i++) {
  let tabela = document.getElementById("tabela");
  let trow = document.createElement("tr");
  let tdata1 = document.createElement("td");
  let tdata2 = document.createElement("td");
  let tdata3 = document.createElement("td");
  let txtNode1 = document.createTextNode(niz[i].ime);
  let txtNode2 = document.createTextNode(niz[i].prezime);
  let txtNode3 = document.createTextNode(niz[i].prosek);
  tdata1.appendChild(txtNode1);
  tdata2.appendChild(txtNode2);
  tdata3.appendChild(txtNode3);
  trow.appendChild(tdata1);
  trow.appendChild(tdata2);
  trow.appendChild(tdata3);
  tabela.appendChild(trow);
}
