// alert("Hello world");



$(document).ready(function() {

  appSimonIndovinaNumero()

});


function appSimonIndovinaNumero() {
  var arrayNumeriRandom = generaNumeriRandom(1, 6, 5);
  console.log(arrayNumeriRandom);
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
