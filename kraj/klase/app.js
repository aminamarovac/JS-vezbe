class porudzbina{
    constructor(brojKuvara,brojPorudzbina,cenaPorudzbina){
        this.brojKuvara=brojKuvara;
        this.brojPorudzbina=brojPorudzbina;
        this.cenaPorudzbina=cenaPorudzbina;
        this.procenatZarade=0;
    }

    dovoljnoKuvara(){
        switch(true){
            case this.brojPorudzbina>=this.brojKuvara*8:
            console.log("visak kuvara");
            break;
            case this.brojPorudzbina>this.brojKuvara:
            console.log("manjak kuvara");
            break;
            default:
                console.log("sve porudzbine opsluzene");
                this.izracunajProcenat();
                break;       
        }
    }
}

