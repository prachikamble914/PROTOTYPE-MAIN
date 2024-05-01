import React, { useState } from 'react';

const OneTimePadCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState('');

  const oneTimePadEncrypt = (text, key) => {
    // Ensure text and key are of the same length
    if (text.length !== key.length) {
      return 'Text and key must be of the same length for encryption.';
    }

    // Encrypt each character using XOR operation
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i);
      encryptedText += String.fromCharCode(charCode);
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(oneTimePadEncrypt(event.target.value, key)); // Update output on input change
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
        <h2>One-Time Pad Cipher</h2>
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
              <b>One-Time Pad Cipher:</b> A symmetric encryption technique where each
              character of the plaintext is encrypted by a character from a secret random
              key of the same length.
            </li>
            <li>
              <b>Key:</b> A random sequence of characters used only once for encryption.
            </li>
            <li>
              <b>Encryption:</b> Each character of the plaintext is XORed with the
              corresponding character in the key to produce the ciphertext.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OneTimePadCipher;
