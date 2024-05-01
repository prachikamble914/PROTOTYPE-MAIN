import React, { useState } from 'react';

const XORCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(xorCipher(event.target.value, key));
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
    setOutput(xorCipher(input, event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const xorCipher = (text, key) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      // Convert each character to its ASCII code
      const charCode = text.charCodeAt(i);
      const keyCode = key.charCodeAt(i % key.length);
      // Perform XOR operation on the character code and the key code
      const encryptedCharCode = charCode ^ keyCode;
      // Convert the result back to a character
      result += String.fromCharCode(encryptedCharCode);
    }
    return result;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>XOR Cipher</h2>
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
            value={key}
            onChange={handleKeyChange}
            className="custom-input"
            placeholder="Enter key..."
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
            The XOR Cipher is a symmetric encryption algorithm that operates by bitwise XORing the plaintext with a key.
          </p>
          <p>To encrypt using the XOR Cipher, simply enter your text and key.</p>
          <ul>
            <li>Symmetric Encryption: The same key is used for both encryption and decryption.</li>
            <li>XOR Operation: Each character in the plaintext is XORed with the corresponding character in the key.</li>
            <li>Decryption: To decrypt, XOR the ciphertext with the same key used for encryption.</li>
            <li>Example: For demonstration, the provided example performs a simple XOR operation on the input text and key.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default XORCipher;
