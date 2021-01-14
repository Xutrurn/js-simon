// alert("Hello world");

$(document).ready(function() {

  appSimonIndovinaNumero()

});


function appSimonIndovinaNumero() {
  var arrayNumeriRandom = generaNumeriRandom(1, 6, 5);

  alert('I numeri da indovinare sono : ' + arrayNumeriRandom + ' , dal click dell\'ok dopo 30 secondi apparirà lo spazio dove inserire i numeri.');

  setTimeout(function() {
    var numeriIndovinati = [];

    for (var i = 0; i < arrayNumeriRandom.length; i++) {
      var numeroInserito = parseInt(prompt('Inserisci il numero'));
      if (arrayNumeriRandom.includes(numeroInserito)) {
        numeriIndovinati.push(numeroInserito);
      }
    }

    if (numeriIndovinati == '') {
      console.log('Non hai indovinato nessun numero');
    } else {
      console.log('Hai indovinato ' + numeriIndovinati.length + ' numeri. I numeri indovinati sono : ' + numeriIndovinati);
    }
  }, 30000);

}




function generaNumeriRandom(rangeMin, rangeMax, quantitaNumeri) {
  var arrayNumeriCasuali = [];
  var i = 0;
  while (i < quantitaNumeri) {
    var number = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
    if (!arrayNumeriCasuali.includes(number)) {
      arrayNumeriCasuali.push(number);
      i++;
    }
  }
  return arrayNumeriCasuali;
}









// console.log();
