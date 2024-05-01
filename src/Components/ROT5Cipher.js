// ROT5Cipher.js
import React, { useState } from 'react';

const ROT5Cipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInput(text);
    setOutput(rot5Encrypt(text));
  };

  const rot5Encrypt = (text) => {
    return text.replace(/[A-Za-z0-4]/g, (match) => {
      // If the character is a digit
      if (match.match(/\d/)) {
        const encryptedDigit = (parseInt(match) + 5) % 10;
        return encryptedDigit.toString();
      }
      // If the character is an alphabet
      else if (match.match(/[A-Za-z]/)) {
        let charCode = match.charCodeAt(0);
        let encryptedCharCode = charCode + 5;
        // Wrap around if the character exceeds 'Z' or 'z'
        if ((match <= 'Z' && encryptedCharCode > 'Z'.charCodeAt(0)) || (match <= 'z' && encryptedCharCode > 'z'.charCodeAt(0))) {
          encryptedCharCode -= 26;
        }
        return String.fromCharCode(encryptedCharCode);
      }
      return match;
    });
  };
  

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="cipher-container">
      
      <div className="heading-container">
      <h2>ROT5 Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-output-container">
        <div className="input-container">
          <textarea
            type="number"
            value={input}
            className="custom-input"
            onChange={handleInputChange}
            placeholder="Enter text..."
          />
          <textarea
            type="text"
            value={output}
            className="custom-output"
            readOnly
            placeholder="Output..."
          />
          <button className="copy-button" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
      {showInfo && (
  <div className="info-container">
    <ul>
      <li>Substitution Cipher: ROT5 Cipher is a type of substitution cipher.</li>
      <li>Shift Characters: Each letter in the plaintext is shifted five places down the alphabet.</li>
      <li>Numeric Characters: Numeric characters are also shifted by five places.</li>
      <li>Alphabetic Characters: For alphabetic characters, the shift wraps around if it reaches 'Z'.</li>
      <li>Example: For example, 'A' becomes 'F', 'B' becomes 'G', and '5' becomes '0'.</li>
    </ul>
  </div>
)}

    </div>
  );
};

export default ROT5Cipher;
