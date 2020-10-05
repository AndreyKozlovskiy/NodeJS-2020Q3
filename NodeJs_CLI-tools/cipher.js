module.exports = function cipher(str, number) {
    let newString = '';
    str.split('').forEach(letter => {
        if(letter.charCodeAt(0)>=65 && letter.charCodeAt(0)<=90) {
            newString += String.fromCharCode(((letter.charCodeAt(0) - 65 + number) % 26) + 65);
        }
        else if(letter.charCodeAt(0)>=97 && letter.charCodeAt(0)<=122) {
            newString += String.fromCharCode(((letter.charCodeAt(0) - 97 + number) % 26) + 97);
        }
        else {
            newString += letter;
        }
    });

    return newString + '\n';
};

97-122