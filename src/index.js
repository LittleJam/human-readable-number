module.exports = function toReadable(number) {
    let word = "";
    let current = number.toString();
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const numbersDoz = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number == 0) {
        return numbers[number];
    }

    if (current.length > 2) {
        word = `${numbers[current[0]]} hundred `;
        if (current[1] == "0" && current[2] == "0")
            return word.substr(0, word.length - 1);
        current = current.substr(1);
    }
    if (current >= 10 && current <= 19) {
        return word + numbers[current];
    }
    if (current.length > 1) {
        if (current[0] == "0") {
            return word + numbers[current[1]];
        }
        word += `${numbersDoz[current[0] - 2]} `;
        current = current.substr(1); // 0
    }

    word = current > 0 ? word + numbers[current] : word;

    return (word =
        word[word.length - 1] === " " ? word.substr(0, word.length - 1) : word);
};
