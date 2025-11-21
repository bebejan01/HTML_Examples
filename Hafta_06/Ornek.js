//Veri Tür dönüşümleri

let val;
//number to string
val = String(10)
console.log(typeof val)

//// bool to string
val = String(true)
console.log(typeof val)

////date to string
val = String(new Date())
console.log(typeof val)

////array to string
val = String([1, 2, 3, 4])
console.log(typeof val)

val = (false).toString();
console.log(typeof val)

// string to number

val = Number(true);
console.log(val)
console.log(typeof val)

val = Number(null)
console.log(val)
console.log(typeof val)

val = Number('A')
console.log(val)
console.log(typeof val)

val = Number([1, 2, 3, 4])
console.log(val)
console.log(typeof val)


//let val;
val = parseInt(10.6)
console.log(val)
console.log(typeof val)

val = parseFloat(10.6)
console.log(val)
console.log(typeof val)


//Operatörler

//let val;
let d = 3;
let e = 3;

val = d;
console.log(val)

val = d++
console.log(val)
console.log(d)

val = ++e
console.log(val)
console.log(e)

// Mantıksal Operatörler

 && (And)
//true && true -> true
//true && false -> false
// false && false -> false

// || (veya)
//true || true -> true
// true || false -> true
// false || false -> false

//let val;
let a = 3;
let b = 4;
let c = 5;
//let d = 5;

//val = (a > b) && (c < d)
//console.log(val)

//val = (a < b) || (c > d)
//console.log(val)

//Dates

//let d = new Date();
//console.log(d)

////console.log(d.getDate())
////console.log(d.getDay())
////console.log(d.getMonth());
////console.log(d.getFullYear());
////console.log(d.getHours());

////Set metod

//d.setFullYear(2027)
//console.log(d)
//d.setDate(25)
//console.log(d)

// Math işlemleri

//let val;
//let num;

//val = 10.678999

//num = val.toPrecision(6);
//console.log(num)

//num = val.toFixed(2);
//console.log(num)

/*let val;*/

//val = Math.PI;
//console.log(val);

//val = Math.round(2.4);
//console.log(val)
//val = Math.round(2.7);
//console.log(val);

//val = Math.ceil(2.4);
//console.log(val)
//val = Math.ceil(2.7);
//console.log(val)

//val = Math.floor(2.4);
//console.log(val)
//val = Math.floor(2.7);
//console.log(val)

//val = Math.sqrt(64);
//console.log(val)

//val = Math.pow(2, 3)
//console.log(val)

//val = Math.abs(-100)
//console.log(val)

//val = Math.min(1, 23, 5);
//console.log(val)

//val = Math.max(3, 65, 7);
//console.log(val)

//String


//const firstname = 'BRk'
//const lastname = 'cbk'
//let hobiler = 'sinema tiyatro';
//var sayi = 30;
//let val;

//val = firstname + ' -      ' + lastname;
//console.log(val)

//// concat
//val = firstname.concat(' - ', lastname , '3')
//console.log(val)

//val = val.toUpperCase() // Büyük harf
//console.log(val)
//val = val.toLowerCase() // Küçük harf
//console.log(val)

//const firstname = 'BRk'
//const lastname = 'cbk'
//let hobiler = 'sinema tiyatro';
//var sayi = 30;
//let val;

//val = '             a   -  -   b  '
//val = val.trim();
//console.log(val)

/*val = 'deneme yazi'*/

//val = val.substring(2, 4)
//console.log(val)

//val = val.indexOf('t')
//console.log(val)

//val = 'deneme yazi'
//val = val.indexOf('d')
//console.log(val)
//val = 'deneme yazi'

//val = val.length;
//console.log(val)

//Arrays
//let names = ['mehmet', 'ayşe', 'irem'];
//let years = [2010, 1960, 2020, 1999];
//let mix = ['ali', 1985, null, ['kitap', 'sinema']]

// dizi elemanlarını al
//console.log(names[1]);
//console.log(years[2]);
//console.log(mix[3]);

// dizi elemanlarını değiştir

//names[names.length] = 'burak'

//console.log(names)
//let names = ['mehmet', 'ayşe', 'irem'];
//let years = [2010, 1960, 2020, 1999];
//let mix = ['ali', 1985, null, ['kitap', 'sinema']]

//push - unshift

//years.push(3010); //son eleman
//console.log(years);
//years.unshift(4010); // ilk eleman
//console.log(years);

//eleman silme

/*years.pop();*/ // son elemanı sil
//years.shift();
//console.log(years); // ilk elemanı sil
//let names = ['mehmet', 'ayşe', 'irem'];
//let years = [2010, 1960, 2020, 1999];
//let mix = ['ali', 1985, null, ['kitap', 'sinema']]

// reverse
//names.reverse();
//console.log(names)

// sort
//names.sort();
//console.log(names);
//years.sort();
//console.log(years)

var arr = ["bmw", "mercedes", "opel", "audi"];

// dizi kaç elemanlı
/*console.log(arr.length)*/

//Dizinin ilk ve son elemanını yazdırın.
/*console.log(arr[0])*/
/*console.log(arr[arr.length-1] )*/

//Dizinin sonuna x markasını ekleyin
//arr[arr.length] = 'x'
//console.log(arr)

//Diziyi alfabetik olarak ters sıralayınız

//arr.sort()
//arr.reverse()
//console.log(arr)