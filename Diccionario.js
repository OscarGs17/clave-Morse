document.addEventListener('DOMContentLoaded', () => {
    const diccionario = {
        "telefono": ["celular", "smartphone"],
        "celular": ["telefono", "smartphone"],
        "smartphone": ["telefono", "celular"],
        "inteligente": [""],
        "fuerte": [""],
        "difícil": [""],
        "xbox": [""],
        "perro": [""],
        "trabaji": [""],
        "examen": [""],
        "nata": [""],
        "bonito": [""],
        "laptop": ["pc", "computadora"],
        "pc": ["laptop", "computadora"],
        "computadora": ["pc", "laptop"]
    };

    const form = document.getElementById('morseForm');
    const input = document.getElementById('datos');
    const resultMsg = document.getElementById('resultMsg');
    const errorMsg = document.getElementById('errorMsg');

    const replaceForm = document.getElementById('replaceForm');
    const replaceInput = document.getElementById('frase');
    const replaceResultMsg = document.getElementById('replaceResultMsg');

    // Búsqueda de sinónimos para una sola palabra
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const palabra = input.value.trim().toLowerCase();

        if (palabra === "") {
            errorMsg.style.display = "block";
            errorMsg.textContent = "Por favor ingresa una palabra válida.";
            resultMsg.style.display = "none";
        } else {
            errorMsg.style.display = "none";
            if (diccionario[palabra]) {
                resultMsg.style.display = "block";
                resultMsg.innerHTML = `<strong>Sinónimos de "${palabra}":</strong> ${diccionario[palabra].join(', ')}`;
            } else {
                resultMsg.style.display = "block";
                resultMsg.innerHTML = `<strong>No se encontraron sinónimos para la palabra "${palabra}".</strong>`;
            }
        }
    });

    // Reemplazo de palabras dentro de una frase
    replaceForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const frase = replaceInput.value.trim().toLowerCase();

        if (frase === "") {
            errorMsg.style.display = "block";
            errorMsg.textContent = "Por favor ingresa una frase válida.";
            replaceResultMsg.style.display = "none";
        } else {
            errorMsg.style.display = "none";

            // Dividir la frase en palabras
            const palabras = frase.split(' ');
            const fraseReemplazada = palabras.map(palabra => {
                if (diccionario[palabra]) {
                    // Reemplazar por un sinónimo aleatorio
                    const sinonimos = diccionario[palabra];
                    return sinonimos[Math.floor(Math.random() * sinonimos.length)];
                }
                return palabra; // Si no hay sinónimos, dejar la palabra como está
            }).join(' ');

            replaceResultMsg.style.display = "block";
            replaceResultMsg.innerHTML = `<strong>Texto original:</strong> ${frase}<br><strong>Texto con sinónimos:</strong> ${fraseReemplazada}`;
        }
    });
});
