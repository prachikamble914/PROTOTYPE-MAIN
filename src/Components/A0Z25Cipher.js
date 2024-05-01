import React, { useState } from 'react';

const A0Z25Cipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(A0Z25CipherFunction(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const A0Z25CipherFunction = (text) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const cipher = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345';
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        const index = alphabet.indexOf(char);
        return index !== -1 ? cipher[index] : char;
      })
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>A0Z25 Cipher</h2>
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
            The A0Z25 Cipher is a substitution cipher where each letter in the plaintext is replaced with its corresponding letter or number in the alphabet.
          </p>
          <p>To encrypt using the A0Z25 Cipher, simply enter your text.</p>
          <ul>
            <li>Substitution Cipher: Each letter in the plaintext is replaced by its corresponding letter or number in the cipher alphabet.</li>
            <li>Cipher Alphabet: The cipher alphabet includes letters from 'A' to 'Z' followed by numbers from '0' to '25'.</li>
            <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding letter or number in the cipher alphabet.</li>
            <li>Decryption: The A0Z25 Cipher is self-reciprocal, meaning the same algorithm is used for both encryption and decryption.</li>
            <li>Example: 'A' remains 'A', 'B' remains 'B', 'C' becomes 'C', 'D' becomes 'D', and so forth. Numbers represent their own values.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default A0Z25Cipher;
