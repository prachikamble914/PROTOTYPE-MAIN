import React, { useState } from 'react';

const AtbashCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(atbashCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const atbashCipher = (text) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const reversedAlphabet = alphabet.split('').reverse().join('');
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        const index = alphabet.indexOf(char);
        return index !== -1 ? reversedAlphabet[index] : char;
      })
      .join('');
  };



  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Atbash Cipher</h2>
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
      The Atbash Cipher is a substitution cipher where each letter in the plaintext is replaced with its reverse in the alphabet.
    </p>
    <p>To encrypt using the Atbash Cipher, simply enter your text.</p>
    <ul>
      <li>Substitution Cipher: Each letter in the plaintext is replaced by its reverse counterpart in the alphabet.</li>
      <li>Reversed Alphabet: The alphabet is reversed, with 'A' becoming 'Z', 'B' becoming 'Y', and so on.</li>
      <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding reverse letter.</li>
      <li>Decryption: The Atbash Cipher is self-reciprocal, meaning the same algorithm is used for both encryption and decryption.</li>
      <li>Example: 'A' becomes 'Z', 'B' becomes 'Y', 'C' becomes 'X', and so forth.</li>
    </ul>
  </div>
)}

    </div>
  );
};

export default AtbashCipher;
