import React, { useState } from 'react';

const GronsfeldCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(gronsfeldCipher(event.target.value, key));
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
    setOutput(gronsfeldCipher(input, event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const gronsfeldCipher = (text, key) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();
      const keyChar = key[i % key.length];
      const keyIndex = parseInt(keyChar) % alphabet.length;
      if (char >= 'A' && char <= 'Z') {
        const index = alphabet.indexOf(char);
        const shiftedIndex = (index - keyIndex + alphabet.length) % alphabet.length;
        result += alphabet[shiftedIndex];
      } else {
        result += char;
      }
    }
    return result;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Gronsfeld Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-output-container">
        <div className="input-container">
          <input
            type="text"
            value={key}
            onChange={handleKeyChange}
            className="custom-input"
            placeholder="Enter key..."
          />
          <textarea
            type="text"
            value={input}
            onChange={handleInputChange}
            className="custom-input"
            placeholder="Enter text..."
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
            The Gronsfeld Cipher is a variant of the Vigenère Cipher, where each letter in the plaintext is shifted according to a key consisting of digits.
          </p>
          <p>To encrypt using the Gronsfeld Cipher, enter your text along with a key consisting of digits.</p>
          <ul>
            <li>Variant of Vigenère Cipher: Similar to Vigenère Cipher but uses a numerical key.</li>
            <li>Key: A sequence of digits used to shift the letters in the plaintext.</li>
            <li>Encryption: Each letter in the plaintext is shifted according to the corresponding digit in the key.</li>
            <li>Example: If the key is '123', 'A' is shifted by 1, 'B' by 2, and 'C' by 3, and so forth.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default GronsfeldCipher;
