
      function validateEmail() {
        var emailInput = document.getElementById("emailInput").value;
        var validationMessage = document.getElementById("validationMessage");

        // Regex za validaciju email adrese
        var regex =
          /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*[1]9?@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){1,3}$/;     /* User
Kreirati input polje tipa text. Korišćenjem regularnih izraza (regex-a) u JavaScriptu ispitati da li je
sadržaj koji je korisnik uneo u to input polje u sledećem formatu:
Email sadrži proizvoljan broj karaktera nakon kojih mora doći donja crta ili srednja crta ili tačka,
a nakon koje slede 2 karaktera i brojevi 1 i 9 (1 je obavezan, 9 moze, a ne mora doci). Nakon njih
dolazi znak @, praćen proizvoljnim brojem karaktera, pa tackom, nakon koje moze doci
proizvoljan broj karaktera, pa tacka, pa mora doci najmanje 2, a najvise 4 karaktera.
(npr. emina-al1@gmail.com ili emina.al19@hotmail.com ili emina_al1@np.ac.rs itd).
Ukoliko uneti sadržaj zadovoljava ove kriterijume, potrebno je da se ispod input polja unutar p
taga zelenim slovima ispisuje „Ispravno unet email“, u suprotnom je potrebno da crvenim
slovima na istom mestu ispiše „Greška u unosu.“ */

        if (regex.test(emailInput)) {
          validationMessage.innerHTML = "Ispravno unet email";
          validationMessage.className = "green";
        } else {
          validationMessage.innerHTML = "Greška u unosu.";
          validationMessage.className = "red";
        }
      }

      var emailInput = document.getElementById("emailInput");
      emailInput.addEventListener("input", validateEmail);