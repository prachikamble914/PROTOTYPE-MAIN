import React, { useState } from 'react';

const TrithemiusCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(trithemiusCipherEncrypt(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const trithemiusCipherEncrypt = (text) => {
    // Define the Trithemius Cipher encryption logic
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encryptedText = '';

    // Shift each character in the input text by its index in the alphabet
    for (let char of text.toUpperCase()) {
      const index = alphabet.indexOf(char);
      if (index !== -1) {
        encryptedText += alphabet[(index + index) % alphabet.length];
      } else {
        encryptedText += char; // Keep non-alphabetic characters unchanged
      }
    }

    return encryptedText;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Trithemius Cipher</h2>
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
            The Trithemius Cipher is a polyalphabetic substitution cipher based on the works of Johannes Trithemius.
          </p>
          <p>To encrypt using the Trithemius Cipher, simply enter your text.</p>
          {/* Add more information here as needed */}
        </div>
      )}
    </div>
  );
};

export default TrithemiusCipher;
