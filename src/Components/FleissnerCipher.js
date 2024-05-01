import React, { useState } from 'react';

const FleissnerCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const fleissnerCipherEncrypt = (text, key) => {
    // Define the Fleissner Cipher grid
    const grid = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I', 'K'],
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z']
    ];

    // Remove spaces and convert text to uppercase
    const cleanedText = text.toUpperCase().replace(/\s+/g, '');

    // Prepare the key for encryption by converting it to uppercase and removing spaces
    const cleanedKey = key.toUpperCase().replace(/\s+/g, '');

    // Initialize the encrypted text
    let encryptedText = '';

    // Encryption process
    for (let i = 0; i < cleanedText.length; i++) {
      const row = Math.floor((i * cleanedKey.length) / cleanedText.length);
      const col = (i * cleanedKey.length) % cleanedText.length;
      encryptedText += grid[row % grid.length][col % grid[0].length];
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(fleissnerCipherEncrypt(event.target.value, key));
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
        <h2>Fleissner Cipher</h2>
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
            The Fleissner Cipher is a grid-based encryption technique used in cryptography.
          </p>
          <p>To encrypt using the Fleissner Cipher, enter your text and key.</p>
          {/* Add more information here as needed */}
        </div>
      )}
    </div>
  );
};

export default FleissnerCipher;
