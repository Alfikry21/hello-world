var terimamasukan_dari_keyboard = require("readline-sync");

var alas = terimamasukan_dari_keyboard.question("masukan nilai a : ");
var tinggi = terimamasukan_dari_keyboard.question("masukan nilai t : ");

var luas = alas * tinggi / 2;

console.log("luas segitiga :"+luas);