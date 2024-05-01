import React, { useState } from 'react';

const QuagmireCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState('');
  const [extraCharacters, setExtraCharacters] = useState('');

  const QUAGMIRE_ALPHABET = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';

  const quagmireEncrypt = (text, key, extraChars) => {
    // Validate key: Ensure it's a string of unique letters
    if (!key || !/^[A-Za-z]+$/.test(key) || new Set(key.toUpperCase()).size !== key.length) {
      return 'Invalid key: Must be a string of unique letters.';
    }

    const cipherAlphabet = key.toUpperCase() + QUAGMIRE_ALPHABET;
    let encryptedText = '';

    for (let char of text.toUpperCase()) {
      if (cipherAlphabet.includes(char)) {
        encryptedText += cipherAlphabet.indexOf(char) % 10; // Convert index to single digit
      } else if (extraChars.includes(char.toUpperCase())) {
        encryptedText += '7'; // Substitute for extra characters
      }
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(quagmireEncrypt(event.target.value, key, extraCharacters)); // Update output on input change
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Quagmire Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-container">
        <textarea
          type="text"
          value={input}
          className="custom-input"
          onChange={handleInputChange}
          placeholder="Enter text..."
        />
        <textarea
          type="text"
          value={output}
          className="custom-output"
          readOnly
          placeholder="Output..."
        />
        <button className="copy-button" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={key}
          onChange={(event) => setKey(event.target.value)}
          className="custom-keyword"
          placeholder="Enter key (unique letters)..."
        />
        <input
          type="text"
          value={extraCharacters}
          onChange={(event) => setExtraCharacters(event.target.value.toUpperCase())}
          className="custom-keyword"
          placeholder="Enter extra characters..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>
              <b>Quagmire Cipher:</b> A variant of the nomenclator cipher that uses
              a mixed alphabet.
            </li>
            <li>
              <b>Key:</b> A string of unique letters that determines the mixed alphabet.
            </li>
            <li>
              <b>Extra Characters:</b> Additional characters included in the cipher.
            </li>
            <li>
              <b>Encryption:</b> Each letter in the plaintext is converted to a number
              based on its position in the mixed alphabet. Extra characters are substituted
              with a predefined number.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuagmireCipher;
