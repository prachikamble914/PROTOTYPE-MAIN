import React, { useState } from 'react';

const AutokeyCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(autokeyCipher(event.target.value, key));
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
    setOutput(autokeyCipher(input, event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const autokeyCipher = (text, key) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const extendedKey = key + text.toUpperCase().replace(/[^A-Z]/g, '');
    let output = '';
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();
      if (/[A-Z]/.test(char)) {
        const charIndex = alphabet.indexOf(char);
        const keyChar = extendedKey[keyIndex++].toUpperCase();
        const keyIndexInAlphabet = alphabet.indexOf(keyChar);
        const newIndex = (charIndex + keyIndexInAlphabet) % 26;
        output += alphabet[newIndex];
      } else {
        output += char;
      }
    }
    return output;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Autokey Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      
      <div className="input-output-container">
        <div className="input-container">
          <textarea
            type="text"
            value={input}
            onChange={handleInputChange}
            className="custom-input"
            placeholder="Enter text..."
          />
          <input
            type="text"
            value={key}
            onChange={handleKeyChange}
            className="custom-key"
            placeholder="Enter key..."
          />
          <textarea
            type="text"
            value={output}
            readOnly
            className="custom-output"
            placeholder="Output..."
          />
          <button className="copy-button" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
      {showInfo && (
  <div className="info-container">
    <p>
      The Autokey Cipher is a polyalphabetic substitution cipher where the key is concatenated with the plaintext.
    </p>
    <p>To encrypt using the Autokey Cipher, enter your text and key.</p>
    <ul>
      <li>Polyalphabetic Substitution Cipher: Each letter in the plaintext is replaced by a letter from one of several cipher alphabets.</li>
      <li>Concatenation: The key is concatenated with the plaintext to create a longer key.</li>
      <li>Encryption: To encrypt, add the corresponding key letter to each plaintext letter.</li>
      <li>Decryption: To decrypt, subtract the corresponding key letter from each ciphertext letter.</li>
    </ul>
  </div>
)}

    </div>
  );
};

export default AutokeyCipher;
