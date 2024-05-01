import React, { useState } from 'react';

const BellasoCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(bellasoCipher(event.target.value, key));
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
    setOutput(bellasoCipher(input, event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const bellasoCipher = (text, key) => {
    const keyLength = key.length;
    return text
      .toUpperCase()
      .split('')
      .map((char, index) => {
        const keyIndex = index % keyLength;
        const shift = key.charCodeAt(keyIndex) - 'A'.charCodeAt(0);
        return shiftCharacter(char, shift);
      })
      .join('');
  };

  const shiftCharacter = (char, shift) => {
    const alphabetSize = 26;
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % alphabetSize) + 65);
    }
    return char;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Bellaso Cipher</h2>
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
            The Bellaso Cipher is a type of polyalphabetic substitution cipher where each letter in the plaintext is shifted according to a keyword.
          </p>
          <p>To encrypt using the Bellaso Cipher, enter your text along with a key.</p>
          <ul>
            <li>Polyalphabetic Substitution: Each letter in the plaintext is shifted by a different amount based on a keyword.</li>
            <li>Key: A keyword determines the amount of shift applied to each letter.</li>
            <li>Encryption: To encrypt, shift each letter in the plaintext by the corresponding amount specified by the key.</li>
            <li>Decryption: Decryption is performed by shifting each letter in the ciphertext in the opposite direction of the key.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BellasoCipher;
