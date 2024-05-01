import React, { useState } from 'react';

const UnionCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(unionCipherEncrypt(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const unionCipherEncrypt = (text) => {
    // Define the Union Cipher encryption logic
    // Example: Combination of Caesar Cipher and Atbash Cipher
    const caesarShift = 3; // Shift value for Caesar Cipher
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Caesar Cipher encryption
    const caesarEncrypt = (char) => {
      const index = alphabet.indexOf(char);
      if (index !== -1) {
        const newIndex = (index + caesarShift) % alphabet.length;
        return alphabet[newIndex];
      }
      return char;
    };
    
    // Atbash Cipher encryption
    const atbashEncrypt = (char) => {
      const reversedAlphabet = alphabet.split('').reverse().join('');
      const index = alphabet.indexOf(char);
      if (index !== -1) {
        return reversedAlphabet[index];
      }
      return char;
    };
    
    // Apply both encryption methods to each character in the text
    let encryptedText = '';
    for (let char of text.toUpperCase()) {
      // Apply Caesar Cipher first
      char = caesarEncrypt(char);
      // Apply Atbash Cipher second
      char = atbashEncrypt(char);
      encryptedText += char;
    }
    
    return encryptedText;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Union Cipher</h2>
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
            The Union Cipher is a combination of multiple ciphers, often used to enhance security.
          </p>
          <p>To encrypt using the Union Cipher, simply enter your text.</p>
          {/* Add more information here as needed */}
        </div>
      )}
    </div>
  );
};

export default UnionCipher;
