


// -2 -1 0 1 2 3
// 3 -3
// 2 1 3
// 3 - 

class NumericalSystems{

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
        return("Test Word");
    }

}

module.exports = NumericalSystems;