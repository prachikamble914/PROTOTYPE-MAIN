import React, { useState } from 'react';

const CheckerboardCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(checkerboardCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const checkerboardCipher = (text) => {
    const checkerboard = {
      'A': '11', 'B': '12', 'C': '13', 'D': '14', 'E': '15',
      'F': '21', 'G': '22', 'H': '23', 'I': '24', 'J': '25',
      'K': '31', 'L': '32', 'M': '33', 'N': '34', 'O': '35',
      'P': '41', 'Q': '42', 'R': '43', 'S': '44', 'T': '45',
      'U': '51', 'V': '52', 'W': '53', 'X': '54', 'Y': '55',
      'Z': '00', ' ': '0', ',': '1', '.': '2', '!': '3', '?': '4'
    };

    return text
      .toUpperCase()
      .split('')
      .map((char) => checkerboard[char] || '')
      .join(' ');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Checkerboard Cipher</h2>
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
            The Checkerboard Cipher is a substitution cipher where each letter or symbol is represented by a two-digit code.
          </p>
          <p>To encrypt using the Checkerboard Cipher, simply enter your text.</p>
          <ul>
            <li>Substitution Cipher: Each character is replaced by its corresponding code from the checkerboard.</li>
            <li>Checkerboard: A grid where each letter or symbol has a unique two-digit code.</li>
            <li>Encryption: To encrypt, replace each character with its corresponding code.</li>
            <li>Decryption: Requires the checkerboard to decode the encrypted text.</li>
            <li>Example: 'A' becomes '11', 'B' becomes '12', ',' becomes '1', '.' becomes '2', and so on.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CheckerboardCipher;
