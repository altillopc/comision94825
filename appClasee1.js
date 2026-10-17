
let nom = prompt('Cual es tu nombre?');
let fec = prompt('Año de nacimiento?');
let nac = prompt('Cual es tu nacionalidad?');

console.log(nom);
console.log(Number(fec));
console.log(nac);

alert('Ud. es ' + nom + ' tiene ' + (2026 - fec) + ' años y de nacionalidad ' + nac);
