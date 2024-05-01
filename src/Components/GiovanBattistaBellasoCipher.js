import React, { useState } from 'react';

const GiovanBattistaBellasoCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const bellasoCipherEncrypt = (text, key) => {
    // Define the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const keyLength = key.length;
    let encryptedText = '';

    // Convert input text to uppercase and remove spaces
    const cleanedText = text.toUpperCase().replace(/\s+/g, '');

    // Encrypt each character based on the key
    for (let i = 0; i < cleanedText.length; i++) {
      const charIndex = alphabet.indexOf(cleanedText[i]);
      const keyIndex = alphabet.indexOf(key[i % keyLength]);
      const encryptedIndex = (charIndex + keyIndex) % 26;
      encryptedText += alphabet[encryptedIndex];
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(bellasoCipherEncrypt(event.target.value, key));
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
        <h2>Giovan Battista Bellaso Cipher</h2>
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
            onChange={(event) => setKey(event.target.value.toUpperCase())}
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
            The Giovan Battista Bellaso Cipher is a variant of the Vigenère Cipher using a keyword to encrypt text.
          </p>
          <p>To encrypt using the Bellaso Cipher, enter your text and key.</p>
          {/* Add more information here as needed */}
        </div>
      )}
    </div>
  );
};

export default GiovanBattistaBellasoCipher;
