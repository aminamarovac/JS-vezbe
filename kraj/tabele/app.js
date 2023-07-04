var obj1 = {
  ime: "Amina",
  prezime: "Marovac",
  prosek: 10,
};

var obj2 = {
  ime: "Amina",
  prezime: "Marovac",
  prosek: 10,
};

var obj3 = {
  ime: "Amina",
  prezime: "Marovac",
  prosek: 10,
};

var obj4 = {
  ime: "Amina",
  prezime: "Marovac",
  prosek: 10,
};

var obj5 = {
  ime: "Amina",
  prezime: "Marovac",
  prosek: 10,
};

var niz = [obj1, obj2, obj3, obj4, obj5];
var tabela = document.getElementById("tabela");
var trow = document.createElement("tr");
var tdata1 = document.createElement("td");
var tdata2 = document.createElement("td");
var tdata3 = document.createElement("td");
var txtNode1 = document.createTextNode("ime");
var txtNode2 = document.createTextNode("prezime");
var txtNode3 = document.createTextNode("prosek");
tdata1.appendChild(txtNode1);
tdata2.appendChild(txtNode2);
tdata3.appendChild(txtNode3);
trow.appendChild(tdata1);
trow.appendChild(tdata2);
trow.appendChild(tdata3);

trow.style.backgroundColor = "green";
tabela.appendChild(trow);

niz.sort((a, b) => {
  b.prosek - a.prosek;
});

for (i = 0; i < niz.length; i++) {
  var tabela = document.getElementById("tabela");
  var trow = document.createElement("tr");
  var tdata1 = document.createElement("td");
  var tdata2 = document.createElement("td");
  var tdata3 = document.createElement("td");
  var txtNode1 = document.createTextNode(niz[i].ime);
  var txtNode2 = document.createTextNode(niz[i].prezime);
  var txtNode3 = document.createTextNode(niz[i].prosek);
  tdata1.appendChild(txtNode1);
  tdata2.appendChild(txtNode2);
  tdata3.appendChild(txtNode3);
  trow.appendChild(tdata1);
  trow.appendChild(tdata2);
  trow.appendChild(tdata3);
  tabela.appendChild(trow);
}
