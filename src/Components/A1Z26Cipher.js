import React, { useState } from 'react';

const A1Z26Cipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(a1z26Cipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const a1z26Cipher = (text) => {
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        if (char >= 'A' && char <= 'Z') {
          return char.charCodeAt(0) - 64; // Convert A-Z to 1-26
        } else {
          return char; // Return non-alphabetic characters unchanged
        }
      })
      .join(' ');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>A1Z26 Cipher</h2>
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
            The A1Z26 Cipher is a simple substitution cipher where each letter of the alphabet is replaced by its corresponding number position in the alphabet.
          </p>
          <p>To encrypt using the A1Z26 Cipher, simply enter your text.</p>
          <ul>
            <li>Substitution Cipher: Each letter in the plaintext is replaced by its corresponding number position in the alphabet.</li>
            <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding number.</li>
            <li>Decryption: To decrypt, convert each number back to its corresponding letter in the alphabet.</li>
            <li>Example: 'A' becomes '1', 'B' becomes '2', 'C' becomes '3', and so forth.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default A1Z26Cipher;
