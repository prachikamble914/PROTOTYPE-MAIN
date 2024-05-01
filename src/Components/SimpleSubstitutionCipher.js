import React, { useState } from 'react';

const SimpleSubstitutionCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [key, setKey] = useState('ZYXWVUTSRQPONMLKJIHGFEDCBA');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(simpleSubstitutionCipher(event.target.value, key));
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value.toUpperCase());
    setOutput(simpleSubstitutionCipher(input, event.target.value.toUpperCase()));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const simpleSubstitutionCipher = (text, key) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const normalizedText = text.toUpperCase();
    let result = '';
    for (let i = 0; i < normalizedText.length; i++) {
      const char = normalizedText[i];
      const index = alphabet.indexOf(char);
      if (index !== -1) {
        result += key[index];
      } else {
        result += char;
      }
    }
    return result;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Simple Substitution Cipher</h2>
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
            placeholder="Enter substitution key..."
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
            The Simple Substitution Cipher is a type of monoalphabetic substitution cipher where each letter in the plaintext is replaced with another letter from the alphabet.
          </p>
          <p>To encrypt using the Simple Substitution Cipher, enter your text along with a substitution key.</p>
          <ul>
            <li>Monoalphabetic Substitution: Each letter in the plaintext is mapped to a single unique letter in the ciphertext.</li>
            <li>Substitution Key: A mapping of each letter in the alphabet to its substitute letter.</li>
            <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding substitute letter according to the key.</li>
            <li>Decryption: The decryption process involves reversing the substitution using the inverse of the key.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SimpleSubstitutionCipher;
