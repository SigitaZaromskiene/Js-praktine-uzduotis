// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)

// 1

// function biggerNumber(a, b) {
//   if (a > b) {
//     console.log(`${a} is highest number`);
//   } else if (a < b) {
//     console.log(`${b} is highest number`);
//   } else if (a === b) {
//     console.log(`Both numbers are equal`);
//   }
// }

// biggerNumber(4, 5);
// biggerNumber(6, 5);
// biggerNumber(6, 6);

// // 2

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// // 3

// for (let i = 0; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 4

// for (i = 0; i < 5; i++) {
//   console.log(Math.floor(Math.random() * 10 + 1));
// }

// 5
// let i = 1;
// while (i < 5) {
//   if (i === 4) {
//     console.log(5);
//   } else {
//     const num = Math.floor(Math.random() * 10);
//     console.log(num);
//   }

//   i++;
// }

// 6

// function getRandom(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const arr = Array.from({ length: getRandom(20, 30) }, () => getRandom(10, 30));
// console.log(arr);

// function arrayMax(arr) {
//   return arr.reduce(function (p, v) {
//     return p > v ? p : v;
//   });
// }
// console.log(arrayMax(arr));

// 7

// function getRandom(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const letters = ["A", "B", "C", "D"];

// const newArr = [];
// for (let i = 1; i <= 100; i++) {
//   const ran = getRandom(0, 3);
//   const letter = letters[ran];
//   newArr.push(letter);
// }

// console.log(newArr);

// const aCount = newArr.filter((l) => l === "A").length;
// console.log(aCount);

// const bCount = newArr.filter((l) => l === "B").length;
// console.log(bCount);

// const cCount = newArr.filter((l) => l === "C").length;
// console.log(cCount);

// const dCount = newArr.filter((l) => l === "D").length;
// console.log(dCount);

// 8
function lygineSuma(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    const sum = a + b;
    if (sum % 2 === 0) {
      return sum;
    } else {
      return `Suma nelygine`;
    }
  } else if (Array.isArray(a) && Array.isArray(b)) {
    const arrLength = [...a, ...b].length;
    if (arrLength % 2 === 0) {
      return arrLength;
    } else {
      return `Suma nelygine`;
    }
  }
}

console.log(lygineSuma(5, 6));

console.log(lygineSuma([1, 2], [2, 3]));

// 9

function pirminisSkaicius(a) {
  if (typeof a === "number") {
    a % 1 === 0;
    return a;
  }
  return true;
}

pirminisSkaicius(40);


 pirminisSkaicius(a) => (typeof a === "number") ? a % 1 === 0;
  if (typeof a === "number") {
    a % 1 === 0;
    return a;
  }
  return true;
}

pirminisSkaicius(40);