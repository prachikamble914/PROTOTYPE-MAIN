import React, { useState } from 'react';

const Rot13Cipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(rot13Cipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const rot13Cipher = (text) => {
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + 13) % 26) + 65);
        } else {
          return char;
        }
      })
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>ROT13 Cipher</h2>
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
            The ROT13 Cipher is a simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet.
          </p>
          <p>To encrypt using the ROT13 Cipher, simply enter your text.</p>
          <ul>
            <li>Substitution Cipher: Each letter in the plaintext is replaced by the letter 13 positions ahead of it in the alphabet.</li>
            <li>Encryption: To encrypt, replace each letter in the plaintext with the letter 13 positions ahead of it.</li>
            <li>Decryption: ROT13 is its own inverse; applying ROT13 to an encrypted text will decrypt it.</li>
            <li>Example: 'A' becomes 'N', 'B' becomes 'O', 'C' becomes 'P', and so forth.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Rot13Cipher;
