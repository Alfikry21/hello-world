var terimamasukan_dari_keyboard = require("readline-sync");

var sisi = terimamasukan_dari_keyboard.question("masukan nilai s : ");

var volume = sisi * sisi * sisi;

console.log("isi kubus :"+volume);