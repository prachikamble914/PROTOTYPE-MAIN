import React, { useState } from 'react';

const BCDEncodingCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(bcdEncodingCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const bcdEncodingCipher = (text) => {
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(charCode - 64);
        } else {
          return char;
        }
      })
      .join(' ');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>BCD Encoding Cipher</h2>
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
            The BCD Encoding Cipher is a simple encoding technique where each letter in the plaintext is encoded into its corresponding number in the alphabet (e.g., A=1, B=2, C=3, ..., Z=26).
          </p>
          <p>To encode using the BCD Encoding Cipher, simply enter your text, and each letter will be replaced by its corresponding number.</p>
          <ul>
            <li>Encoding: Each letter is replaced by its position in the alphabet.</li>
            <li>Example: 'A' becomes '1', 'B' becomes '2', 'C' becomes '3', and so forth.</li>
            <li>Non-alphabetic characters are left unchanged.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BCDEncodingCipher;
