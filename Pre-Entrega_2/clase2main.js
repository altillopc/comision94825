
alert ('Vamos a jugar a un juego. ' + 
    'Tenes que adivinar el número que estoy pensando ' +
'Tenes 3 posibilidades.');

let num = 0;
let conteo = 0;
const hora = Date.now() % 10;

while (conteo < 3) {
    
    num = Number(prompt('Ingresa un número del 0 al 9'));
    
    if (num == hora) {
    alert ('Adivinaste');
        break
} else{
    alert ('Elije otro número')
}
    conteo++
}

    alert ('El número correcto era: ' + hora)

    console.log('num: ' , num);
    console.log('conteo: ' , conteo);
    console.log('hora: ' , hora);