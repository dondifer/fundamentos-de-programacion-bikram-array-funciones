const arrayVacio = [];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];
const arrayNumerosPares = [0, 2, 4, 6, 8];
const arrayNumerosNeg = arrayNumeros.map((el) => (el ? el * -1 : 0));
const holaMundo = ["Hola", "Mundo"];
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
const arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
const esPar = (a) => a % 2 === 0;
const arrayFunciones = [suma, resta, multiplicacion];
const potenciacion = (a, b) => Math.pow(a, b);
const separarPalabras = (a) => a.split(" ");
const repetirString = (cadena, veces) => cadena.repeat(veces);
const ordenarArray2 = (items) =>
  items.sort((firstEl, secondEl) => {
    return firstEl > secondEl ? -1 : 1;
  });
const ordenarArray = (items) =>
  items.sort((firstEl, secondEl) => {
    return firstEl > secondEl ? 1 : -1;
  });
const sumarArray = (a) =>
  a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const multiplicarArray = (a) =>
  a.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(sumarArray([1, 2, 3, 4]));
const obtenerImpares = (a) => a.filter((el) => !(el % 2 === 0));
const obtenerPares = (a) => a.filter((el) => el % 2 === 0);
const esPrimo = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

function esPrimo(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(esPrimo(53));
function pintarArray(array) {
  let midArray = "";
  for (let i = 0; i <= array.length - 1; i++) {
    midArray =
      midArray + (i === array.length - 1 ? `${array[i]}` : `${array[i]}, `);
  }
  return `[${midArray}]`;
}

const arrayMapi = (array, fn) => array.map((el) => fn(el));

const eliminarDuplicados = (array) => {
  const noRepArray = [];
  array.forEach((el) => {
    if (noRepArray.filter((el2) => el === el2).length === 0) {
      noRepArray.push(el);
    }
  });
  return noRepArray;
};
