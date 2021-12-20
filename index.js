// var a = 1,
//     b = 3
// console.log(a + b);

// const data = () => {
//     var a = 1;
//     var b = 4;
//     console.log();

// }

// console.log(data());

// var str = '123456789'
// function data() {

// }

// const func = (num) => {
//     var temp = num;
//     var reversed = String(num).split("").reverse().join("");
//     return parseInt(`${temp} ${reversed}`);
// }
// console.log(func(123456));
// console.log(func(152));
// console.log(func(123456789));
////////////////////////////////////////////////////////

// Masalalar//

////////////// 1-masala////////////////////////

//  1 - Holat;

// function data(letter) {
//    return letter === letter.toUpperCase()
// }
// console.log(data('A'));

// 2-Holat
// data = a => a === a.toUpperCase()
// console.log(data('f'));

// 3-Holat
// function data(letter) {
//     console.log(letter=== letter.toUpperCase());
// }
// data ('d')

// var a = 'a'
// console.log(a.match(/A-Z/g));

////////////////////2-masala//////////////////////////

// letter = 'Webbrain Academy';
// console.log( letter.match(/a/gi).length)

// 2-Holat

// var data = 'Webbrain Academy'
// var a = 0
// for (let i = 0; i < data.length; i++) {
//     (data[i] == 'a' || data[i] == 'A') && a++
// }
// console.log(a);

//////////////////3-masala/////////////////

// 1-Holat
// var num = '123456789';
// var a = 0;

// b = num.split('');

// b.map((value) => {
//   a += parseInt(value);
// });
// console.log(a);

// 2-Holat
// var num = '123456789';

// var a = 0;

// for (i = 0; i <= num.length; i++) {
//   a += i;
// }
// console.log(a);

// 3-Holat

// function sumOfStr(str) {
//   var a = str.split('');
//   return a.reduce(function (first, second) {
//     return parseInt(first) + parseInt(second);
//   });
// }
// console.log(sumOfStr('123456789'));

//////////////////// 4-masala/////////////////////

// 1-Holat

// function data(letter) {
//     var letter1 = letter.split('*').join('');
//     return letter1.split('/').join('')
// }
// console.log(data('lorem / lorem *'));

// 2-Holat

// function data(letter) {
//     var letter1 = letter.replace('*', '');
//     return letter1.replace('/', '')
// }
// console.log(data('lorem / lorem *'));
// 3-Holat
// var Otabek = 'lorem / lorem *'
// Shaxzod = Otabek.split('*').join('')
// console.log(Shaxzod.split('/').join(''));

//4-Holat

// function data(str) {
//   console.log(str.match(/\w/g).join(''));
// }
// data(`Webbrain // Academy ** `);
////////////////////////////////////////

// function mark(Value) {
//   if (Value ==='A') {
//     console.log('You are passed Succesfully');
//   } else if (Value === 'B') {
//     console.log('You are passed');
//   } else if (Value === 'C') {
//     console.log('reexam');
//   } else if (Value ==='E') {
//     console.log('Failed');
//   } else {
//     console.log('NUN');
//   }
// }
// mark('C');

// function app(value1, value2, value3) {
//   var data = 'Shakhzod Shukurullayev'

//   if (data.includes(value1 && value2 || value3)) {
//     console.log(true);
//   } else {console.log(false);
//   }
// }
// app('Otabek', 'Elbek','Shakhzod');

// var a = 'webbrain'
// console.log(a[-1]);

/////////// 1-masala //////////

// function translate(value1) {
//     if (value1 === 'Russian') console.log('Privet');
//    else if (value1 === 'Uzbek') console.log('Salom');
//    else if (value1 === 'English') console.log('Hello');
//     else console.log('Bizda ushbu til mavjud emas');
// }
// translate('Uzbek')

///////// 2-masala ////////

// 1-Holat

// function data(value) {
//     return value.split('').reverse().join('')

// }
// console.log(data('123456789'));

// 2-Holat

// function data(value) {
//     var reverse = value.split('')
//     return reverse.sort(function (a, b) {
//         return b-a

//     }).join('')
// }
// console.log(data('123456789'));

///////// 3-masala /////////

// function data(person) {
//   person
//     ? console.log(`welcome to our course ${person}`)
//     : console.log('Welcome to strange');
// }
// data();

// data = person => person ? `Welcome to our course ${person}` :'welcome to strenge'
// console.log(data('otabek'))

////////// 4-masala //////////

// var data = 'Web brain academy';
// var a = data.split(' ');

// function Capital(a) {
//   return (
//     a[0].replace(a[0][0], a[0][0].toUpperCase()) +
//     ' ' +
//     a[1].replace(a[1][0], a[1][0].toUpperCase()) +
//     ' ' +
//     a[2].replace(a[2][0], a[2][0].toUpperCase())
//   );
// }

// console.log(Capital(a));

//////// 5-masala ////////

// function data(params) {
//     params % 2 ? console.log('toq') : console.log('juft');
// }
// data(10);

// 6-masala

// data = (a, b) => {
//   return a ** b;
// };
// console.log(data(7, 2));

// 7-masala
// function data(a) {
//     var a = 'Web Brain Academy Developer'
//     return a.match(/e/gi).length
// }

// console.log(data('e'));