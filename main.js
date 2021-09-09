let NumericalSystems = require('./DigitalSystems.js');
let ns = new NumericalSystems();


// Binary To Digit
console.log(ns.binaryToDigit("01110111"));
console.log(ns.digitToBinary("1500"));
console.log(ns.addBinary("1111101000","10111011100"));
console.log(ns.bitCombination("1"));
console.log(ns.digitToHex("16"));
console.log(ns.hexToDigit("3A9F"));
console.log(ns.digitToOctal("92"));
console.log(ns.octalToDigit("134"));
console.log(ns.digitToBinary("546700"));
console.log(ns.binaryRadixCompliment("1010"));
console.log(ns.radixCompliment("546700", 10));
console.log(ns.digitToBinary("89"));
console.log(ns.addBinary("1010","1"));
console.log(ns.subtractBinary("1010100","1000011"));
console.log(ns.digitToBinary("2"));
console.log(ns.bitCombination("5"));
console.log(ns.digitToBinary("74"));
console.log(ns.binaryToDigit("10110101"));
console.log(ns.digitToHex("181"));
console.log(ns.hexToDigit("9B3F"));
console.log(ns.binaryDiminishedRadixCompliment("1100001111011111"));
console.log(ns.diminishedRadixCompliment("25000000", 10));
console.log(ns.binaryDiminishedRadixCompliment("11111111", 2));
console.log(ns.subtractBinary("100001001", "100111000"));