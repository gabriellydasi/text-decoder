# 🇬🇧 Text Decoder Challenge - ONE | Alura
The project involves creating a text decoder, developed as part of a challenge from the Oracle Next Education program in collaboration with Alura. The project aims to create an application capable of encrypting and decrypting text messages, providing a practical opportunity to apply technical knowledge in a scenario close to a professional setting.

## ⚙ Features

* Vowel Substitution Encryption

  * The letter "e" is replaced by "enter"
  * The letter "i" is replaced by "imes"
  * The letter "a" is replaced by "ai"
  * The letter "o" is replaced by "ober"
  * The letter "u" is replaced by "ufat"

* Special Character Conversion to Whitespace

  * The typed text is normalized to decompose accented characters into their basic parts. Accents are then removed, transforming characters like "é" into "e". After removing accents, the text is processed again to eliminate all characters that are not letters (a-z, A-Z), numbers (0-9), or spaces. This includes punctuation, mathematical symbols, monetary symbols, and other special characters. The processed text, now free of accents and special characters, is updated in the text field, ensuring that the content is clean and as expected.

  * Examples of special characters:
    * Punctuation: !, @, #, $, %, ^, &, *, (, ), _, +, -, =, {, }, [, ], |, , :, ;, ", ', <, >, ,, ., ?, /
    * Accents and diacritics: á, é, í, ó, ú, à, è, ì, ò, ù, â, ê, î, ô, û, ä, ë, ï, ö, ü, ã, ñ, õ, ç
    * Mathematical symbols: +, -, =, *, /, %, √, ∞, ≈, ≠, ≤, ≥
    * Monetary symbols: $, €, £, ¥, ¢, ₹
    * Other symbols: ©, ®, ™, §, ¶

* Uppercase to Lowercase Conversion

  * Uppercase letters are converted to lowercase through CSS styling on the text field element. This is achieved using the text-transform: lowercase; property applied to the ID text__area, which is the field where the user types the text.

* Functional Buttons
  * <b>Encrypt</b>: Encrypts the text entered in the input field. After encryption, the text is transferred to the output field.
  * <b>Decrypt</b>: Decrypts the text entered in the input field. After decryption, the text is transferred to the output field.
  * <b>Copy</b>: Copies the content of the output field to the clipboard.

* Input Validations
  * <b>Button Deactivation</b>: The Encrypt and Decrypt buttons are disabled if the input field is empty or contains only whitespace.
  * <b>Alert Display</b>: An alert is shown to the user when trying to activate the Encrypt or Decrypt buttons without providing valid text
  
## 🛠️ Tools Used
* JavaScript: Used to implement the encryption and decryption logic, manipulating and validating the text entered by the user.

* HTML: Structures the user interface, including the text input and output fields, as well as the action buttons.

* CSS: Responsible for styling the application, ensuring a visually appealing and responsive interface.

* Git: Used for version control, allowing tracking of project development and management of code changes.

* Visual Studio Code: The chosen code editor for writing and debugging source code, leveraging features such as plugin extensions and Git integration.

## 💡Functionality
The text encoder is designed to work exclusively with lowercase letters, numbers, and spaces, excluding accents and special characters.

* Input Filtering: The system allows only lowercase letters, numbers, and spaces. Any other characters, such as accents and special symbols, are automatically removed.

* Accent Removal: When the text is typed, it is normalized to decompose accented characters. For example, "é" is transformed into "e" without an accent. Accents are then removed, resulting only in basic letters.

* Special Character Removal: After removing accents, all characters that are not letters, numbers, or spaces are eliminated. This removes punctuation and disallowed symbols.

* Text Field Update: The cleaned text, now free of accents and special characters, is displayed in the text field. Only lowercase letters, numbers, and spaces are allowed.

* Encryption: After cleaning and normalizing the text, it is encrypted using a specific algorithm. The encrypted text is then displayed in the appropriate field. The encryption ensures that the original text is transformed into a secure and unreadable form.

* Paste and Decrypt: Users can paste text into the field that has been previously encrypted. The system applies the same filtering rules to ensure the pasted text complies with the requirements, allowing correct decryption.

## 📲 Application Access

* Click the following link to open the application in your browser: <a href="https://text-decoder-psi.vercel.app/">Text Decoder</a>

* Text Entry: In the input field, type the text you wish to encrypt or decrypt. Be sure to use only lowercase letters, numbers, and spaces, as special characters and accents will be automatically removed.

* Encrypt Text: Click the Encrypt button. The entered text will be encrypted and the result will be displayed in the output field.

* Decrypt Text: If you have an encrypted text, paste it into the input field and click the Decrypt button. The text will be decrypted and the result will be shown in the output field.

* Copy Text: After encryption or decryption, click the Copy button to copy the text from the output field to the clipboard.

* Verification and Adjustments: Check the text in the output field. If the text is not in the expected format, adjust the text in the input field and repeat the encryption or decryption process as needed.

## 🎞️ Images
<img src="https://github.com/user-attachments/assets/373f56c9-c08e-46c0-bd9e-40bd054ce79e" width="45%" height="auto" alt="Image 1">
<img src="https://github.com/user-attachments/assets/da00cc92-9065-4060-9af6-0c1fd89ca76e" width="45%" height="auto" alt="Image 2">

<br>

# 🇧🇷 Challenge Decodificador de Texto - ONE | Alura
O projeto envolve a criação de um decodificador de texto,  desenvolvido como parte de um desafio do programa Oracle Next Education em colaboração com a Alura. O projeto visa criar uma aplicação capaz de criptografar e descriptografar mensagens de texto, oferecendo uma oportunidade prática para aplicar conhecimentos técnicos em uma situação próxima à realidade profissional.

## ⚙ Features

* Criptografia por Substituição de Vogais

  * Letra "e" é substituída por "enter"
  * Letra "i" é substituída por "imes"
  * Letra "a" é substituída por "ai"
  * Letra "o" é substituída por "ober"
  * Letra "u" é substituída por "ufat"

* Conversão de Caracteres Especiais para Espaços em Branco

  * O texto digitado é normalizado para decompor caracteres acentuados em suas partes básicas. Em seguida, os acentos são removidos, transformando caracteres como "é" em "e". Após a remoção dos acentos, o texto é processado novamente para eliminar todos os caracteres que não sejam letras (a-z, A-Z), números (0-9) ou espaços. Isso inclui pontuação, símbolos matemáticos, monetários e outros caracteres especiais. O texto processado, agora sem acentos e caracteres especiais, é atualizado no campo de texto, garantindo que o conteúdo fique limpo e conforme esperado.
  
  * Exemplos dos caracteres especiais:
    * Pontuação: !, @, #, $, %, ^, &, *, (, ), _, +, -, =, {, }, [, ], |, \, :, ;, ", ', <, >, ,, ., ?, /
    * Acentos e diacríticos: á, é, í, ó, ú, à, è, ì, ò, ù, â, ê, î, ô, û, ä, ë, ï, ö, ü, ã, ñ, õ, ç
    * Símbolos matemáticos: +, -, =, *, /, %, √, ∞, ≈, ≠, ≤, ≥
    * Símbolos monetários: $, €, £, ¥, ¢, ₹
    * Outros símbolos: ©, ®, ™, §, ¶

* Conversão de Letra Maiúscula para Letra Minúscula
  
  * A conversão de letras maiúsculas para minúsculas foi feita através da estilização CSS no elemento de campo de texto. Isso é realizado utilizando a propriedade text-transform: lowercase; aplicada ao ID text__area, que é o campo onde o usuário digita o texto.
 
* Botões Funcionais
  * <b>Encrypt</b>: Criptografa o texto inserido no campo de entrada. Após a criptografia, o texto é transferido para o campo de saída.
  * <b>Decrypt</b>: Descriptografa o texto inserido no campo de entrada. Após a descriptografia, o texto é transferido para o campo de saída.
  * <b>Copy</b>: Copia o conteúdo do campo de saída para a área de transferência.

* Validações de Entrada
  * <b>Desativação dos Botões</b>: Os botões Encrypt e Decrypt são desativados se o campo de entrada estiver vazio ou contiver apenas espaços em branco.
  * <b>Exibição de Alerta</b>: Um alerta é exibido ao usuário quando tenta acionar os botões Encrypt ou Decrypt sem fornecer um texto válido.
 
## 🛠️ Ferramentas Utilizadas
* JavaScript: Utilizado para implementar a lógica de criptografia e descriptografia, manipulando e validando o texto inserido pelo usuário.

* HTML: Estrutura a interface do usuário, incluindo os campos de entrada e saída de texto, bem como os botões de ação.

* CSS: Responsável pela estilização da aplicação, garantindo uma interface visualmente agradável e responsiva.

* Git: Utilizado para controle de versão, permitindo acompanhar o desenvolvimento do projeto e gerenciar alterações no código.
* Visual Studio Code: Editor de código escolhido para escrever e depurar o código-fonte, aproveitando suas funcionalidades como extensão de plugins e integração com Git.

## 💡Funcionalidade
O codificador de texto é projetado para trabalhar exclusivamente com letras minúsculas, números e espaços, excluindo acentos e caracteres especiais.

* Filtragem de Entrada: O sistema permite apenas letras minúsculas, números e espaços. Qualquer caractere diferente, como acentos e símbolos especiais, é removido automaticamente.

* Remoção de Acentos: Quando o texto é digitado, ele é normalizado para decompor caracteres acentuados. Por exemplo, "é" é transformado em "e" sem acento. Em seguida, os acentos são removidos, resultando apenas nas letras básicas.

* Remoção de Caracteres Especiais: Após a remoção dos acentos, todos os caracteres que não sejam letras, números ou espaços são eliminados. Isso remove pontuações e símbolos não permitidos.

* Atualização do Campo de Texto: O texto limpo, agora livre de acentos e caracteres especiais, é exibido no campo de texto. Apenas letras minúsculas, números e espaços são permitidos.

* Criptografia: Após a limpeza e normalização do texto, ele é criptografado usando um algoritmo específico. O texto criptografado é então exibido no campo apropriado. A criptografia garante que o texto original seja transformado em uma forma segura e ilegível. 

* Colar e Descriptografar: Usuários podem colar texto no campo que já foi criptografado anteriormente. O sistema aplica as mesmas regras de filtragem para garantir que o texto colado esteja em conformidade com os requisitos, permitindo uma descriptografia correta.

## 📲 Acesso à Aplicação

* Clique no seguinte link da aplicação para abrir a aplicação no seu navegador: <a href="https://text-decoder-psi.vercel.app/">Text Decoder</a>

* Inserção de Texto: No campo de entrada, digite o texto que deseja criptografar ou descriptografar. Certifique-se de usar apenas letras minúsculas, números e espaços, pois caracteres especiais e acentos serão removidos automaticamente.
  
* Criptografar Texto: Clique no botão Encrypt (Criptografar). O texto inserido será criptografado e o resultado será exibido no campo de saída. 

* Descriptografar Texto: Se você tiver um texto criptografado, cole-o no campo de entrada e clique no botão Decrypt (Descriptografar). O texto será descriptografado e o resultado será mostrado no campo de saída. 

* Copiar Texto: Após a criptografia ou descriptografia, clique no botão Copy (Copiar) para copiar o texto do campo de saída para a área de transferência. 

* Verificação e Ajustes: Verifique o texto no campo de saída. Caso o texto não esteja no formato esperado, ajuste o texto no campo de entrada e repita o processo de criptografia ou descriptografia conforme necessário.

## 🎞️ Imagens
<img src="https://github.com/user-attachments/assets/373f56c9-c08e-46c0-bd9e-40bd054ce79e" width="45%" height="auto" alt="Image 1">
<img src="https://github.com/user-attachments/assets/da00cc92-9065-4060-9af6-0c1fd89ca76e" width="45%" height="auto" alt="Image 2">
