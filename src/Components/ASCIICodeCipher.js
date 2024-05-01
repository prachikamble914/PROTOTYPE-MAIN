import React, { useState } from 'react';

const ASCIICodeCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(asciiCodeCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const asciiCodeCipher = (text) => {
    return text
      .split('')
      .map((char) => {
        const asciiCode = char.charCodeAt(0);
        return asciiCode.toString();
      })
      .join(' ');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>ASCII Code Cipher</h2>
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
            The ASCII Code Cipher is a simple cipher that converts each character in the plaintext into its corresponding ASCII code.
          </p>
          <p>To encrypt using the ASCII Code Cipher, simply enter your text.</p>
          <ul>
            <li>Each character in the plaintext is converted into its ASCII code representation.</li>
            <li>The ASCII code for each character is then concatenated with spaces between them.</li>
            <li>Decryption involves converting the ASCII codes back into their corresponding characters.</li>
            <li>Example: 'A' is represented as '65' in ASCII.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ASCIICodeCipher;
