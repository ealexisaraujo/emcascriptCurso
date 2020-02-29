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
export let hello = 'Hello';
let world = 'Word';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Esto es lo mismo que la concatenación de arriba pero de forma más sencilla.
let epicPhrase2 = `${hello}${world}`;
console.log(epicPhrase2);

//Salto de linea con \n
let lorem =
  'Ex nulla aliquip nulla eu proident labore ad non elit cillum nulla elit mollit pariatur \n' +
  'Nulla mollit quis tempor et commodo id adipisicing commodo occaecat aute sit.';

//Salto de linea con ES&

let lorem2 = `Ex fugiat magna nisi commodo.
Irure nisi cupidatat do eu consectetur proident exercitation labore.`;
console.log(lorem2);

//Desestructuracion de elementos
let person = {
  name: 'Alexis',
  age: 22,
  country: 'Mexico',
};

//Javascript nativo
console.log(person.name, person.age);

//ES&
let { name, age } = person;
console.log(name, age);

//Spread Operator

let team1 = ['Oscar', 'Julian', 'Ricardo', 'Emanuel'];
let team2 = ['Valeria', 'Monica', 'Jesica', 'Camila'];

//Javascript Nativo
let education1 = [
  'David',
  'Oscar',
  'Julian',
  'Ricardo',
  'Emanuel',
  'Valeria',
  'Monica',
  'Jesica',
  'Camila',
];

//ECMAScript 6+
let education2 = ['David', ...team1, ...team2];

console.log(education1);
console.log(education2);

/**
 * Var, Let and Const
 */
{
  var globalVar = 'Global Var';
  let globalLet = 'Global Let';
  const globalConst = 'Global Const';
  console.log(`globalLet -> ${globalLet}`);
  console.log(`globalConst -> ${globalConst}`);
}
console.log(`globalVar -> ${globalVar}`);

//Parametros en objetos
let name = 'oscar';
let age = 32;

//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

//Arrow functions
const names = [
  {
    name: 'Oscar',
    age: 37,
  },
  {
    name: 'Alexis',
    age: 27,
  },
];

//Iteraccion en un array en es5
let listOfNames = names.map(function(item) {
  console.log(item.name);
});

//Iteraccion en un array en es6
let listOfNames2 = names.map(item => {
  console.log(item.name);
});

const listOfNames3 = (name, age, country) => {...}

const listOfNames4 = name => {...}

const square = num => num * num;

//Promesas para trabajar con el asincronismo
const helloPromise = foo => {
  return new Promise((resolve, reject) => {
    if (foo) {
      resolve('Hey!');
    } else {
      reject('Upss!');
    }
  });
};

const foo = true;
helloPromise(foo)
  .then(response => console.log('response -> ', response))
  .then(() => console.log('message -> Hello World!'))
  .catch(error => console.log('error -> ', error));

/**
* Classes
*/
class Calculator{
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log('Calc Result -> ', calc.sum(2, 3));

/**
 * Generators
 */
function* helloWorld() {
  if (true) {
    yield'Hello, ';
  }

  if (true) {
    yield'World!';
  }
}
const generatorHello = helloWorld();
console.log('generatorHello first call -> ', generatorHello.next().value);
console.log('generatorHello second call -> ', generatorHello.next().value);
console.log('generatorHello third call -> ', generatorHello.next().value);
