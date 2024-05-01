import React, { useState } from 'react';

const BinaryCodeCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(binaryCodeCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const binaryCodeCipher = (text) => {
    return text
      .split('')
      .map((char) => {
        const binaryChar = char.charCodeAt(0).toString(2);
        return binaryChar.padStart(8, '0');
      })
      .join(' ');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Binary Code Cipher</h2>
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
            The Binary Code Cipher is a technique where each character in the plaintext is converted into its binary representation.
          </p>
          <p>To encrypt using the Binary Code Cipher, simply enter your text.</p>
          <ul>
            <li>Conversion: Each character is converted into its binary representation using ASCII values.</li>
            <li>Padding: Each binary representation is padded to ensure it is 8 bits long.</li>
            <li>Output: The binary representations of each character are concatenated with spaces.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BinaryCodeCipher;
