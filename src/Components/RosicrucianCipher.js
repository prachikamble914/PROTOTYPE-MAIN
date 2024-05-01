import React, { useState } from 'react';

const RosicrucianCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState('ZYXWVUTSRQPONMLKJIHGFEDCBA');

  const rosicrucianCipherEncrypt = (text, key) => {
    // Convert the text to uppercase and remove non-alphabetic characters
    const cleanedText = text.toUpperCase().replace(/[^A-Z]/g, '');

    // Replace each letter in the plaintext with the corresponding letter from the secret key
    const encryptedText = cleanedText.split('').map(char => {
      const index = char.charCodeAt(0) - 65; // Convert character to index (0-25)
      return key[index] || char; // Replace with key letter or keep unchanged if not in key
    }).join('');

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(rosicrucianCipherEncrypt(event.target.value, key));
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
        <h2>Rosicrucian Cipher</h2>
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
            The Rosicrucian Cipher is a substitution cipher where each letter in the plaintext is replaced by another letter according to a secret key.
          </p>
          <p>To encrypt using the Rosicrucian Cipher, simply enter your text.</p>
          <p>The default key used here is "ZYXWVUTSRQPONMLKJIHGFEDCBA", which is the alphabet in reverse.</p>
        </div>
      )}
    </div>
  );
};

export default RosicrucianCipher;
