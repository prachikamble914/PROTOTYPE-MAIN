import React, { useState } from 'react';

const DoubleTranspositionCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [rowKey, setRowKey] = useState('');
  const [colKey, setColKey] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleRowKeyChange = (event) => {
    setRowKey(event.target.value);
  };

  const handleColKeyChange = (event) => {
    setColKey(event.target.value);
  };

  const handleEncrypt = () => {
    const encryptedText = doubleTranspositionCipher(input, rowKey, colKey);
    setOutput(encryptedText);
  };

  const handleDecrypt = () => {
    const decryptedText = doubleTranspositionDecipher(output, rowKey, colKey);
    setInput(decryptedText);
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const doubleTranspositionCipher = (text, rowKey, colKey) => {
    // Implement the double transposition cipher encryption logic here
  };

  const doubleTranspositionDecipher = (text, rowKey, colKey) => {
    // Implement the double transposition cipher decryption logic here
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Double Transposition Cipher</h2>
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
          <div className="key-input">
            <input
              type="text"
              value={rowKey}
              onChange={handleRowKeyChange}
              placeholder="Enter Row Key..."
            />
            <input
              type="text"
              value={colKey}
              onChange={handleColKeyChange}
              placeholder="Enter Column Key..."
            />
          </div>
          <div className="button-group">
            <button className="encrypt-button" onClick={handleEncrypt}>
              Encrypt
            </button>
            <button className="decrypt-button" onClick={handleDecrypt}>
              Decrypt
            </button>
            <button className="copy-button" onClick={handleCopy}>
              Copy
            </button>
          </div>
          <textarea
            type="text"
            value={output}
            readOnly
            className="custom-output"
            placeholder="Output..."
          />
        </div>
      </div>
      {showInfo && (
        <div className="info-container">
          <p>
            The Double Transposition Cipher is a method of encryption where the text is transposed twice using keys provided by the user.
          </p>
          <p>
            To encrypt using the Double Transposition Cipher, enter your text and provide both row and column keys.
          </p>
          <p>
            To decrypt, enter the ciphertext along with the row and column keys used for encryption.
          </p>
          <p>
            The Double Transposition Cipher provides a higher level of security compared to simple substitution ciphers.
          </p>
        </div>
      )}
    </div>
  );
};

export default DoubleTranspositionCipher;
