// Esercizio 1//

/*function analizzaTesto(stringa) {
  const object = {};
  object.originale = stringa;
  object.minuscolo = stringa.toLowerCase();
  object.senzaSpazi = stringa.trim();
  let numCar = stringa.trim();
  object.numeroCaratteri = numCar.length;
  let seContiene = stringa.includes("JS") || stringa.includes("Javascript");
  object.contieneJS = seContiene;
  let invertita = stringa.split("").reverse().join("");
  object.invertita = invertita;
  console.log(object);
}

analizzaTesto(" Javascript è fantastico ");*/

// Esercizio 2 //
/*function riempiArray(numeroElementi, valoreMinimo, valoreMassimo) {
  let arrayCasuale = [];
  for (let i = 0; i < numeroElementi; i++) {
    let numeroRandomico =
      Math.floor(Math.random() * (valoreMassimo - valoreMinimo + 1)) +
      valoreMinimo;
    arrayCasuale.push(numeroRandomico);
  }
  return arrayCasuale;
}

function contaPariDispari(array) {
  let pari = 0;
  let dispari = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pari++;
    } else {
      dispari++;
    }
  }
  return {
    pari: pari,
    dispari: dispari,
  };
}

let arrayCasuale = riempiArray(10, 2, 50);
console.log(arrayCasuale);

let conteggio = contaPariDispari(arrayCasuale);
console.log(conteggio); */

//Esercizio 3 //

window.addEventListener("load", function () {
  let button = document.getElementById("bottoneInvio");

  button.addEventListener("click", function () {
    let input = document.getElementById("testoUtente");
    let valoreInput = input.value;
    let pCreato = document.createElement("p");
    pCreato.innerText = valoreInput;
    document.body.appendChild(pCreato);
    if (valoreInput === "") {
      alert("Inserisci del testo prima di inviare");
    }
  });
});
