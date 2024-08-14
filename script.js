let textInput = document.querySelector('#text__area');
let textOutput = document.querySelector('#message__content');
const textArea = document.getElementById('text__area');

textArea.addEventListener('input', function() {
    textArea.value = removeSpecialCharacters(removeAccents(textArea.value));
}); 

function removeAccents(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function removeSpecialCharacters(text) {
    return text.replace(/[^a-zA-Z0-9 ]/g, ''); // mantém letras, números e espaços
}

function encrypt() {
    let text = textInput.value.trim();
    if (text === '') {
        alert01();
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
        alert02();
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
}

function resetContent() {
    textOutput.innerHTML = '<img src="./assets/rabbit-daisy.png" alt="">' +
                           '<h1>No messages found</h1>' +
                           '<h3>Enter a text that you want to encrypt or decrypt.</h3>';
}

function alert01(){
    alert('Please, enter a message that you want to encrypt first.');
}

function alert02(){
    alert('Please, enter a message that you want to decrypt first.');
}

resetContent();
