const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..',
    'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    ' ': '/'
};

const morseToText = Object.fromEntries(Object.entries(morseCode).map(([letter, code]) => [code, letter]));

const form = document.getElementById('morseForm');
const datos = document.getElementById('datos');
const errorMsg = document.getElementById('errorMsg');
const resultMsg = document.getElementById('resultMsg');
const toTextButton = document.getElementById('toText');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputText = datos.value.toUpperCase().trim();
    if (!inputText) {
        showError("Por favor ingresa una frase válida.");
        return;
    }
    const morseResult = convertToMorse(inputText);
    if (morseResult) {
        showResult(morseResult);
    } else {
        showError("El texto contiene caracteres no soportados.");
    }
});

toTextButton.addEventListener('click', function () {
    const inputText = datos.value.trim();
    if (!inputText) {
        showError("Por favor ingresa una frase en Morse.");
        return;
    }
    const textResult = convertToText(inputText);
    if (textResult) {
        showResult(textResult);
    } else {
        showError("El código Morse contiene caracteres no soportados.");
    }
});

function convertToMorse(text) {
    return text.split('').map(char => morseCode[char] || '').join(' ').trim();
}

function convertToText(morse) {
    return morse.split(' ').map(code => morseToText[code] || '').join('');
}

function showError(message) {
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
    resultMsg.style.display = 'none';
}

function showResult(message) {
    resultMsg.textContent = message;
    resultMsg.style.display = 'block';
    errorMsg.style.display = 'none';
}