// Esercizio 1//

function analizzaTesto(stringa) {
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

analizzaTesto(" Javascript è fantastico ");
