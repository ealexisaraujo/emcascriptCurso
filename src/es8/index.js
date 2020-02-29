// Object.entries
const data = {
  frontend: 'Juan',
  backend: 'Carlos',
  design: 'Ana',
};
const entries = Object.entries(data);
const key = Object.keys(data);
const values = Object.values(data);
console.log(entries);
console.log(key);
console.log(values);

//=> async await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello Juan Carlos'), 3000)
      : reject(new Error('Test Error'));
  });
};
const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};
helloAsync();

// asi se ejecuta correctamente una promesa
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
anotherFunction();
