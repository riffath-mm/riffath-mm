function RomanToInteger(roman) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < roman.length; i++) {
        const current = romanNumerals[roman[i]];
        const next = romanNumerals[roman[i + 1]];

        if (next > current) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
}
const romanNumeral = "IX";
let result = 0;
console.log(
    RomanToInteger(romanNumeral),
    `The integer representation of ${romanNumeral} is: ${result}`,
);
