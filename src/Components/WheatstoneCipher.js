import React, { useState } from 'react';

const WheatstoneCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(wheatstoneCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const wheatstoneCipher = (text) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const key = 'PHQGIUMEAYLNOFDXJKRCVSTZWB';
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        const index = alphabet.indexOf(char);
        return index !== -1 ? key[index] : char;
      })
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Wheatstone Cipher</h2>
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
            The Wheatstone Cipher is a substitution cipher similar to the Atbash Cipher but uses a different substitution key.
          </p>
          <p>To encrypt using the Wheatstone Cipher, simply enter your text.</p>
          <ul>
            <li>Substitution Cipher: Each letter in the plaintext is replaced by its corresponding letter in the Wheatstone key.</li>
            <li>Wheatstone Key: The key determines the substitution of each letter. It's typically a shuffled version of the alphabet.</li>
            <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding letter in the Wheatstone key.</li>
            <li>Decryption: The Wheatstone Cipher can be decrypted by reversing the substitution using the same Wheatstone key.</li>
            <li>Example: 'A' might be replaced by 'P', 'B' by 'H', 'C' by 'Q', and so forth.</li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default WheatstoneCipher;
