import React, { useState } from 'react';

const LarrabeeCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const larrabeeCipherEncrypt = (text, key) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const cleanedText = text.toUpperCase().replace(/\s+/g, '');

    const cleanedKey = key.toUpperCase().replace(/\s+/g, '');

    let encryptedText = '';

    for (let i = 0; i < cleanedText.length; i++) {
      const char = cleanedText[i];
      const charIndex = alphabet.indexOf(char);
      if (charIndex !== -1) {
        const keyIndex = alphabet.indexOf(cleanedKey[i % cleanedKey.length]);
        const newIndex = (charIndex + keyIndex) % 26;
        encryptedText += alphabet[newIndex];
      }
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(larrabeeCipherEncrypt(event.target.value, key));
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
        <h2>Larrabee Cipher</h2>
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
            value={key}
            onChange={(event) => setKey(event.target.value)}
            className="custom-keyword"
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
            The Larrabee Cipher is a simple substitution cipher that shifts each letter in the plaintext by a certain key.
          </p>
          <p>To encrypt using the Larrabee Cipher, enter your text and key.</p>
        </div>
      )}
    </div>
  );
};

export default LarrabeeCipher;
