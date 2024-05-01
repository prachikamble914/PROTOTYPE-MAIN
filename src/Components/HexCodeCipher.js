import React, { useState } from 'react';

const HexCodeCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(hexCodeCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const hexCodeCipher = (text) => {
    return text
      .split('')
      .map((char) => {
        const hexCode = char.charCodeAt(0).toString(16).toUpperCase();
        return hexCode;
      })
      .join(' ');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Hex Code Cipher</h2>
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
            The Hex Code Cipher is a simple encryption technique where each character in the plaintext is converted to its hexadecimal representation.
          </p>
          <p>To encrypt using the Hex Code Cipher, enter your text.</p>
          <ul>
            <li>Hexadecimal Representation: Each character in the plaintext is converted to its hexadecimal representation using its ASCII value.</li>
            <li>Example: 'A' becomes '41', 'B' becomes '42', 'C' becomes '43', and so forth.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HexCodeCipher;
