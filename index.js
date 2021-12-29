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

// var point = '123456789';
// var data = point.split('')
// data.sort(function (a, b) {
//   return b - a;
// });
// console.log(data.join(''));

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
// data(52);

//////// 6-masala ////////

// data = (a, b) => {
//   return a ** b;
// };
// console.log(data(7, 2));

//////// 7-masala /////////

// function data() {
//     var a = 'Web Brain Academy'
//     return a
// }

// console.log(data().match(/i/gi).length)

// letter = 'Webbrain Academy';
// console.log( letter.match(/a/gi).length)

// var a = 100
// console.log(Number(a));

////////////////////////////////////////////
// var s = 'abcde'
// var b = 'bcdea'
//     if (s === b) console.log(true);
//    else console.log(false);

// console.log(s.length - 1);
// var c = s.split(' ')
// function data() {
//    return c[0].replace(c[0][0], c[0][0])
// }
// console.log(data());

////// 1-masala ///////
// var a = 101001
// console.log(parseInt(a, 2));

// var a = 4.10
// console.log(a.toString(2));

// 2-masala

// var a = 'abcde'
// var b = 'bcdea'
// a = a.split('').sort().join('');
// b = b.split('').sort().join('');
// console.log(a === b);

// 3-masala

// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 1 ) {
//         console.log(a[i],'is odd');
//     } else if (a[i] % 2 === 0) {
//         console.log(a[i],'is even');
//     }
// }

// 4- masala
// var a ='456'
// var b = '77'
// console.log(+a+(+b));

// 5-masala

// function name(a, b) {
//     a < b ? console.log(b) : console.log(a-b);
// }
// name(10000, 2000)

// 6-masala

// function data(...params) {
//     const [a, b, c, d] = params
//     return (a+b+c+d)/4
// }
// console.log(data(80,77,88,95));

// 7 -masala

// var a = ['*']
// var size = 10
// console.log(a.join(''));
// for (let i = 0; i < size; i++) {
//     a.push('*')
//     console.log(a.join(''));
// }

// function Shiftright(a, b) {
//     for (let i = 0; i < b ; i++) {
//         var lastIndex = a.length - 1
//         var lastItem = a[lastIndex]  
//         for (j = lastIndex; j > -1; j--) {
//             if (a.length -1 > 0) {
//                 console.log(a[j] = a[j -1]);
//             }else {}
//         }
//     }
// }
// Shiftright([5, 6, 7, 8, 9], 5)

