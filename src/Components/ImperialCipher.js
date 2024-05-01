import React, { useState } from 'react';

const ImperialCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const imperialCipherEncrypt = (text, key) => {
    // Define the Imperial Cipher alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Convert input text to uppercase and remove spaces
    const cleanedText = text.toUpperCase().replace(/\s+/g, '');

    // Prepare the key for encryption by converting it to uppercase and removing spaces
    const cleanedKey = key.toUpperCase().replace(/\s+/g, '');

    let encryptedText = '';

    // Encryption process
    for (let i = 0; i < cleanedText.length; i++) {
      const char = cleanedText[i];
      const charIndex = alphabet.indexOf(char);
      if (charIndex !== -1) {
        // Calculate the shifted index based on the key
        const shiftedIndex = (charIndex + alphabet.indexOf(cleanedKey[i % cleanedKey.length])) % 26;
        encryptedText += alphabet[shiftedIndex];
      }
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(imperialCipherEncrypt(event.target.value, key));
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
        <h2>Imperial Cipher</h2>
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
            The Imperial Cipher is a substitution cipher that shifts each character based on the key.
          </p>
          <p>To encrypt using the Imperial Cipher, enter your text and key.</p>
          {/* Add more information here as needed */}
        </div>
      )}
    </div>
  );
};

export default ImperialCipher;
