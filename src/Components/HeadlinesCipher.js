import React, { useState } from 'react';

const HeadlinesCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const headlinesCipherEncrypt = (text) => {
    // Define the Headlines Cipher encryption logic
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Convert input text to uppercase and remove non-alphabetic characters
    const cleanedText = text.toUpperCase().replace(/[^A-Z]/g, '');

    // Perform encryption
    let encryptedText = '';
    for (let i = 0; i < cleanedText.length; i++) {
      const char = cleanedText[i];
      const index = alphabet.indexOf(char);
      if (index !== -1) {
        const newIndex = (index + 1) % 26; // Shift each character by 1 position to the right
        encryptedText += alphabet[newIndex];
      }
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(headlinesCipherEncrypt(event.target.value));
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
        <h2>Headlines Cipher</h2>
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
            The Headlines Cipher shifts each letter in the plaintext by one position to the right in the alphabet.
          </p>
          <p>To encrypt using the Headlines Cipher, simply enter your text.</p>
          {/* Add more information here as needed */}
        </div>
      )}
    </div>
  );
};

export default HeadlinesCipher;
