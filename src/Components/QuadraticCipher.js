import React, { useState } from 'react';

const QuadraticCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(quadraticCipherEncrypt(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const quadraticCipherEncrypt = (text) => {
    // Define the Quadratic Cipher encryption logic
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Convert input text to uppercase
    const upperText = text.toUpperCase();
    
    // Encrypt each character based on its position in the alphabet
    let encryptedText = '';
    for (let char of upperText) {
      const index = alphabet.indexOf(char);
      if (index !== -1) {
        encryptedText += (index + 1) ** 2 + ' '; // Square the index and add to the output
      } else {
        encryptedText += char; // Keep non-alphabetic characters unchanged
      }
    }
    
    return encryptedText.trim();
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Quadratic Cipher</h2>
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
            The Quadratic Cipher is a substitution cipher that replaces each letter of the alphabet with the square of its position.
          </p>
          <p>To encrypt using the Quadratic Cipher, simply enter your text.</p>
          {/* Add more information here as needed */}
        </div>
      )}
    </div>
  );
};

export default QuadraticCipher;
