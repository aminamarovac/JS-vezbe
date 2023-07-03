

var prof1 = {
  ime: "Amina",
  prezime: "Marovac",
  godine: 19,
  predmet: "srpski",
  slika: "geografija.jpg",
};

var prof2 = {
  ime: "Amina",
  prezime: "Marovac",
  godine: 19,
  predmet: "srpski",
  slika: "geografija.jpg",
};

var prof3 = {
  ime: "Amina",
  prezime: "Marovac",
  godine: 19,
  predmet: "srpski",
  slika: "geografija.jpg",
};

var prof4 = {
  ime: "Amina",
  prezime: "Marovac",
  godine: 19,
  predmet: "srpski",
  slika: "geografija.jpg",
};

function prikazi(divZaPrikaz, prof) {
  var spoljasnji = document.getElementById("divZaPrikaz");
  var ul = document.createElement("ul");
  var li1 = document.createElement("li");
  var li2 = document.createElement("li");
  var li3 = document.createElement("li");
  var li4 = document.createElement("li");
  var li5 = document.createElement("li");
  var dugme = document.createElement("button");
  dugme.addEventListener("click", function () {
    alert("uspesno");
  });
  dugme.innerHTML = "prosledi";
  li1.innerHTML = "Ime je : " + prof.ime;
  li2.innerHTML = "Prezime je : " + prof.prezime;
  li3.innerHTML = "Godine su : " + prof.godine;
  li4.innerHTML = "Predmet je : " + prof.predmet;
  li5.appendChild(dugme);

  var div2 = document.createElement("div");
  div2.classList = "unutrasnji";
  var img = document.createElement("img");
  img.src = prof.slika;
  div2.appendChild(img);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  div2.appendChild(ul);
  spoljasnji.appendChild(div2);
}

prikazi("divZaPrikaz",prof1);
prikazi("divZaPrikaz",prof2);
prikazi("divZaPrikaz",prof3);
prikazi("divZaPrikaz",prof4);