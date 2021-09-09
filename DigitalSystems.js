


// -2 -1 0 1 2 3
// 3 -3
// 2 1 3
// 3 - 

class DigitalSystems{

    constructor(){}

    binaryToDigit(binary){
        let value = 0;

        //Checks every digit in the string, if '1' then 2 is raised to the power of its position
        for(let i = binary.length-1; i>=0; i--){
            value += (binary[i] * 2**(-1*(i - binary.length + 1))); // -1*(i - binary.length + 1) checks for the current position starting from the right.
        }
        return value;
    }

    digitToBinary(digit){
        return (digit >>> 0).toString(2);
    }

    addBinary(binary1, binary2){
        return this.digitToBinary(this.binaryToDigit(binary1) + this.binaryToDigit(binary2));
    }

    subtractBinary(binary1, binary2){
        return this.digitToBinary(parseInt(this.binaryToDigit(binary1)) - parseInt(this.binaryToDigit(binary2)));
    }

    bitCombination(bits){
        return ((2**bits));
    }

    digitToHex(digit){
        digit = parseInt(digit);
        return (digit.toString(16));
    }

    hexToDigit(hex){
        return (parseInt(hex, 16));
    }

    digitToOctal(digit){
        digit = parseInt(digit);
        return ((digit).toString(8)); 
    }

    octalToDigit(octal){
        return (parseInt(octal, 8));
    }

    invertBinary(binary){
        let inverse = ''
        for(let i = 0; i<binary.length; i++){
            if(binary[i] == 0){
                inverse += 1
            }
            else{
                inverse += 0;
            }
        }
        return inverse;
    }

    binaryDiminishedRadixCompliment(digit){
        return this.invertBinary(digit);
    }

    binaryRadixCompliment(digit){
        return this.addBinary(this.invertBinary(digit), "1");
    }

    diminishedRadixCompliment(digit, r){
        return parseFloat(((r**digit.length) - 1) - digit);
    }

    radixCompliment(digit, r){
        return parseFloat(((r**digit.length)) - digit);
    }


}

module.exports = DigitalSystems;