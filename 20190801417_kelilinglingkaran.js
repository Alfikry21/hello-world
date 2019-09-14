var terimamasukan_dari_keyboard = require("readline-sync");

var pi = 3.14;
var jari_jari = terimamasukan_dari_keyboard.question("masukan nilai r : ");

var keliling = 2 * pi * jari_jari;

console.log("keliling lingkaran :"+keliling);