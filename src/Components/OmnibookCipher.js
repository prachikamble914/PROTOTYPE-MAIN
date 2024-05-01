import React, { useState } from 'react';

const OmnibookCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(omnibookCipherEncrypt(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const omnibookCipherEncrypt = (text) => {
    // Define the Omnibook Cipher encryption logic
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shiftedAlphabet = 'XYZABCDEFGHIJKLMNOPQRSTUVW'; // Example shifting by 3
    
    // Convert input text to uppercase
    const upperText = text.toUpperCase();
    
    // Encrypt each character based on the shifted alphabet
    let encryptedText = '';
    for (let char of upperText) {
      const index = alphabet.indexOf(char);
      if (index !== -1) {
        encryptedText += shiftedAlphabet[index];
      } else {
        encryptedText += char; // Keep non-alphabetic characters unchanged
      }
    }
    
    return encryptedText;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Omnibook Cipher</h2>
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
            The Omnibook Cipher is a historical cipher used in an ancient manuscript.
          </p>
          <p>To encrypt using the Omnibook Cipher, simply enter your text.</p>
          {/* Add more information here as needed */}
        </div>
      )}
    </div>
  );
};

export default OmnibookCipher;
