// ROT47Cipher.js
import React, { useState } from 'react';

const ROT47Cipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInput(text);
    setOutput(rot47Encrypt(text));
  };

  const rot47Encrypt = (text) => {
    return text.replace(/[\x21-\x7E]/g, (match) => {
      let charCode = match.charCodeAt(0);
      let encryptedCharCode = charCode + 47;
      // Wrap around if the character exceeds '~'
      if (encryptedCharCode > 126) {
        encryptedCharCode -= 94;
      }
      return String.fromCharCode(encryptedCharCode);
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
        <h2>ROT47 Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-output-container">
        <div className="input-container">
          <textarea
            type="text"
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
            <li>Substitution Cipher: ROT47 Cipher is an extension of the ROT13 Cipher.</li>
            <li>ASCII Characters: It shifts ASCII printable characters by 47 places.</li>
            <li>Character Set: The character set includes all printable ASCII characters from '!' to '~'.</li>
            <li>Wrapping: The shift wraps around if it reaches '~'.</li>
            <li>Example: For example, 'A' becomes 'p', 'B' becomes 'q', and '!' becomes '8'.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ROT47Cipher;
