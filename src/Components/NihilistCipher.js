import React, { useState } from 'react';

const NihilistCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState('');

  const nihilistEncrypt = (text, key) => {
    // Validate key: Ensure it's a string of digits
    if (!key || !/^\d+$/.test(key)) {
      return 'Invalid key: Must be a string of digits.';
    }

    let encryptedText = '';
    for (let char of text.toUpperCase()) {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) { // Only encrypt letters
        const keyValue = parseInt(key[encryptedText.length % key.length]);
        const plaintextValue = charCode - 65; // Convert letter to number
        const encryptedValue = (keyValue + plaintextValue) % 10; // Perform Nihilist encryption
        encryptedText += encryptedValue.toString();
      }
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(nihilistEncrypt(event.target.value, key)); // Update output on input change
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
        <h2>Nihilist Cipher</h2>
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
          placeholder="Enter key (digits)..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>
              <b>Nihilist Cipher:</b> A variant of the Polybius square cipher that
              uses a numerical key to encrypt letters.
            </li>
            <li>
              <b>Key:</b> A string of digits that determines the encryption process.
            </li>
            <li>
              <b>Encryption:</b> Each letter in the plaintext is converted to a number
              (A=0, B=1, ..., Z=25), then added to the corresponding digit in the key
              modulo 10. The result is the ciphertext.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NihilistCipher;
