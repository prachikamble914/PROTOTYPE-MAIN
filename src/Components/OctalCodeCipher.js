import React, { useState } from 'react';

const OctalCodeCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(octalCodeCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const octalCodeCipher = (text) => {
    return text
      .split('')
      .map((char) => {
        const charCode = char.charCodeAt(0);
        return '\\' + charCode.toString(8); // Convert ASCII code to octal representation
      })
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Octal Code Cipher</h2>
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
            The Octal Code Cipher is a simple cipher that converts each character in the plaintext into its corresponding octal ASCII code representation.
          </p>
          <p>To encrypt using the Octal Code Cipher, enter your text. Each character will be replaced by its octal ASCII code.</p>
          <ul>
            <li>Character Encoding: Each character in the plaintext is replaced by its octal ASCII code representation.</li>
            <li>Example: 'A' (ASCII code 65) becomes '\101' in octal representation.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OctalCodeCipher;
