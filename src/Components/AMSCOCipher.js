import React, { useState } from 'react';

const AMSCOCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState('');

  const amscoDecrypt = (text, key) => {
    // Perform AMSCO decryption here
    return 'Decrypted output';
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(amscoDecrypt(event.target.value, key)); // Update output on input change
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
        <h2>AMSCO Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-container">
        <textarea
          type="text"
          value={input}
          className="custom-input"
          onChange={handleInputChange}
          placeholder="Enter text..."
        />
        <textarea
          type="text"
          value={output}
          className="custom-output"
          readOnly
          placeholder="Output..."
        />
        <button className="copy-button" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={key}
          onChange={(event) => setKey(event.target.value)}
          className="custom-keyword"
          placeholder="Enter key..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>
              <b>AMSCO Cipher:</b> A transposition cipher where a keyword is used to create
              a grid for encryption and decryption.
            </li>
            <li>
              <b>Key:</b> The keyword used to create the grid for encryption and decryption.
            </li>
            <li>
              <b>Decryption:</b> The ciphertext is decrypted using the same grid created by
              the keyword.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AMSCOCipher;
