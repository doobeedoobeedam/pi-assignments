// Linear Seacrh dengan for

// function linearSearch(targetAngka, data) {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] === targetAngka) {
//             return i;
//         }
//     }
//     return undefined;
// }

// const angkaYangDiCari = 5;
// const dataAngka = [1, 3, 5, 7, 9, 11];
// const hasil = linearSearch(angkaYangDiCari, dataAngka);
// console.log(`Indeks dari angka ${angkaYangDiCari} adalah:`, hasil);


// Linear Searh dengan built-in-function

// function linearSearch2(targetAngka, data) {
//     const result = data.find(element => element === targetAngka);
//     return result !== undefined ? data.indexOf(result) : undefined;
// }

// const angkaYangDiCari2 = 10;
// const dataAngka2 = [1, 3, 5, 7, 9, 11];
// const hasil = linearSearch2(angkaYangDiCari2, dataAngka2);
// console.log(`Indeks dari angka ${angkaYangDiCari2} adalah:`, hasil);

// Fizz Buzz Array dengan for

// function fizzBuzzArray(data) {
//     const result = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] % 3 === 0 && data[i] % 5 === 0) {
//             result.push("FizzBuzz");
//         } else if (data[i] % 3 === 0) {
//             result.push("Fizz");
//         } else if (data[i] % 5 === 0) {
//             result.push("Buzz");
//         } else {
//             result.push(data[i]);
//         }
//     }
//     return result;
// }

// const arrAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(fizzBuzzArray(arrAngka));

// Fizz Buzz Array dengan built-in-funtion

const fizzBuzzArray2 = (data) => {
    return data.map(num => {
        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz";
        } else if (num % 3 === 0) {
            return "Fizz";
        } else if (num % 5 === 0) {
            return "Buzz";
        } else {
            return num;
        }
    });
}

// Contoh penggunaan:
const arrAngka2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasil = fizzBuzzArray2(arrAngka2);
console.log(hasil);

