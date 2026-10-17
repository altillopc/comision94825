
let nom = prompt('Cuel es tu nombre?');
let fec = prompt('Año de nacimiento?');
let nac = prompt('Cuel es tu nacionalidad?');

console.log(nom);
console.log(Number(fec));
console.log(nac);

alert('Ud. es ' + nom + ' tiene ' + (fec - 2026) + ' años y de nacionalidad ' + nac);
