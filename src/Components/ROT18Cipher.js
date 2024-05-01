import React, { useState } from 'react';

const ROT18Cipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(rot18Cipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const rot18Cipher = (text) => {
    return text
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0);
        let newCode = code;
        if (code >= 65 && code <= 90) { // Uppercase letters
          newCode = ((code - 65 + 18) % 26) + 65;
        } else if (code >= 97 && code <= 122) { // Lowercase letters
          newCode = ((code - 97 + 18) % 26) + 97;
        }
        return String.fromCharCode(newCode);
      })
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>ROT18 Cipher</h2>
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
            The ROT18 Cipher is a simple Caesar cipher technique where each letter in the plaintext is shifted 18 positions forward in the alphabet.
          </p>
          <p>To encrypt using the ROT18 Cipher, simply enter your text.</p>
          <ul>
            <li>Caesar Cipher: Each letter in the plaintext is shifted a fixed number of positions forward or backward in the alphabet.</li>
            <li>Encryption: To encrypt, shift each letter 18 positions forward in the alphabet.</li>
            <li>Decryption: To decrypt, shift each letter 8 positions backward in the alphabet.</li>
            <li>Example: 'A' becomes 'S', 'B' becomes 'T', 'C' becomes 'U', and so forth.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ROT18Cipher;
