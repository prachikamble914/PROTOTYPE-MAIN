import React, { useState } from 'react';

const ChaoCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [key, setKey] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(chaocipher(event.target.value, key));
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
    setOutput(chaocipher(input, event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const chaocipher = (text, key) => {
    // Alphabet for Chaocipher
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // Key setup
    const key1 = key.slice(0, 13);
    const key2 = key.slice(13);

    // Encryption and Decryption logic
    return text
      .toLowerCase()
      .split('')
      .map((char) => {
        const index = alphabet.indexOf(char);
        if (index !== -1) {
          if (text.length % 2 === 0) {
            return key1[index];
          } else {
            return key2[index];
          }
        }
        return char;
      })
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Chaocipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-output-container">
        <div className="input-container">
          <input
            type="text"
            value={key}
            onChange={handleKeyChange}
            className="custom-input"
            placeholder="Enter key..."
          />
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
            The Chaocipher is a cryptographic system invented by John F. Byrne in 1918. It employs two rotating alphabets, the first for encryption and the second for decryption.
          </p>
          <p>To use Chaocipher, enter your text and a key consisting of 26 unique letters. The plaintext will be encrypted using one of the alphabets in the key, alternating between them for each character.</p>
        </div>
      )}
    </div>
  );
};

export default ChaoCipher;
