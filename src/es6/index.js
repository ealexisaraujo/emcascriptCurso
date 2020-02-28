//Javascript
//Ambos hacen lo mismo pero con ECMAScript se hace más facil la declaración

//PARAMETROS
function newFunction(name, age, country) {
  let name = name || 'Emanuel';
  let age = age || 22;
  let country = country || 'México';
  console.log(name, age, country);
}

//ES6

function newFunction2(name = 'Emanuel', age = 22, country = 'México') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 22, 'Bogotá');

//CONCATENACION
let hello = 'Hello';
let world = 'Word';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Esto es lo mismo que la concatenación de arriba pero de forma más sencilla.
let epicPhrase2 = `${hello}${world}`;
