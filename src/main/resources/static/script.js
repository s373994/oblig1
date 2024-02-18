
const kjøpBillettBtn = document.getElementById('kjøpBillett');
const slettAlleBilletterBtn = document.getElementById('slettAlleBilletter');
const ListeBillett = document.getElementById('ListeBillett');

//  lagrer billetter
let billetter = [];

// Legger til billett i array og oppdatere visning
function AddBillett() {
    const film = document.getElementById('filmer').value;
    let antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefon = document.getElementById('telefon').value;
    const email = document.getElementById('email').value;

    // Generell Validering
    if (film === '' || antall === '' || fornavn === '' || etternavn === '' || telefon === '' || email === '') {
        alert('Alle felt må fylles ut');
        return;
    }

    //Validering for tlf nr
    const telefonReg = /^\d{8,10}$/;
    if (!telefonReg.test(telefon)){
        alert('Skriv inn et gydlig TlfNr');
        return;
    }

    // Validering for epost
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Skriv inn en gyldig e-postadresse');
        return;
    }


    // Legger til billett i array
    billetter.push({ film, antall, fornavn, etternavn, telefon, email });

    // Oppdaterer  visningen
    visBilletter();
    // Tømmer inputfeltene
    document.getElementById('filmer').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('email').value = '';
}

// Funksjonen for å vise billettene i liste

function visBilletter() {
    ListeBillett.innerHTML = '';
    billetter.forEach((billett, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Billett ${index + 1}: Film - ${billett.film}, Antall - ${billett.antall}, Fornavn - ${billett.fornavn}, Etternavn - ${billett.etternavn}, Telefon - ${billett.telefon} Email -${billett.email} ;`
        ListeBillett.appendChild(listItem);
    });
}
// Funksjonen for å slette billetter
function slettAlleBilletter() {
    billetter = [];
    visBilletter();
}

kjøpBillettBtn.addEventListener('click', AddBillett);
slettAlleBilletterBtn.addEventListener('click', slettAlleBilletter);