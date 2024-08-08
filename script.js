let textInput = document.querySelector('#text__area');
let textOutput = document.querySelector('#message__content');
const textArea = document.getElementById('text__area');

textArea.addEventListener('input', function() {
    textArea.value = removeSpecialCharacters(removeAccents(textArea.value));
}); 

textArea.addEventListener('input', function() {
    textArea.value = removeNumbers(removeSpecialCharacters(textArea.value));
});

function removeAccents(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function removeSpecialCharacters(text) {
    return text.replace(/[¹²³!@#$%^&*()_+={}\[\]|\\:;"'¨¬¢£<>,.?/~`]/g, '');
}

function removeNumbers(text) {
    return text.replace(/\d/g, '');
}


function encrypt() {
    let text = textInput.value.trim();
    if (text === '') {
        resetContent();
        return;
    }

    let textEncrypted = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');

    textOutput.innerHTML = '<textarea readonly id="text__output">' + textEncrypted + '</textarea>' +
                           '<button class="buttons__copy" id="copy" onclick="copy()">Copy</button>';
}

function decrypt() {
    let text = textInput.value.trim();
    if (text === '') {
        resetContent();
        return;
    }

    let textDecrypted = text.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');

    textOutput.innerHTML = '<textarea readonly id="text__output">' + textDecrypted + '</textarea>' +
                           '<button class="buttons__copy" id="copy" onclick="copy()">Copy</button>';
}

function copy() {
    let textCopy = document.getElementById('text__output');
    textCopy.select();
    document.execCommand('copy');

    // Cria o elemento de alerta
    let alertDiv = document.createElement('div');
    alertDiv.className = 'alert'; // Adiciona a classe de estilo
    alertDiv.textContent = 'Text copied!';

    // Adiciona o alerta ao body
    document.body.appendChild(alertDiv);

    // Mostra o alerta
    alertDiv.style.display = 'block';

    // Esconde o alerta após 2 segundos (2000 milissegundos)
    setTimeout(() => {
        alertDiv.style.display = 'none';
        // Remove o alerta do DOM
        document.body.removeChild(alertDiv);
    }, 2000);
}

function resetContent() {
    textOutput.innerHTML = '<img src="./assets/rabbit-daisy.png" alt="">' +
                           '<h1>No messages found</h1>' +
                           '<h3>Enter a text that you want to encrypt or decrypt.</h3>';
}

resetContent();
