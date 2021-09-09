let NumericalSystems = require('./NumericalSystems.js');
let ns = new NumericalSystems();


// Binary To Digit
console.log(ns.binaryToDigit("100111000100"));
console.log(ns.digitToBinary("1500"));
console.log(ns.addBinary("1111101000","10111011100"));
console.log(ns.bitCombination("1"));

console.log(ns.digitToHex("16"));
console.log(ns.hexToDigit("3A9F"));

console.log(ns.digitToOctal("92"));
console.log(ns.octalToDigit("134"));