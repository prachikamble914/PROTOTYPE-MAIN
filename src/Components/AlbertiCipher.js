import React, { useState } from 'react';

const AlbertiCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [shift, setShift] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(albertiCipher(event.target.value, shift));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const albertiCipher = (text, shift) => {
    const outerDisk = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const innerDisk = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        if (char >= 'A' && char <= 'Z') {
          const index = outerDisk.indexOf(char);
          return innerDisk[(index + shift) % 26];
        }
        return char;
      })
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Alberti Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-output-container">
        <div className="input-container">
          {/* <input
            type="number"
            value={shift}
            onChange={(e) => setShift(parseInt(e.target.value))}
            className="custom-input"
            placeholder="Enter a shift value..."
          /> */}
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
        <input 
        style={{marginLeft:'600px'}}
            type="number"
            value={shift}
            onChange={(e) => setShift(parseInt(e.target.value))}
            // className="custom-input"
            placeholder="Enter a shift value..."
          />
      </div>
      {showInfo && (
        <div className="info-container">
          <p>
            The Alberti Cipher is a type of polyalphabetic substitution cipher invented by Leon Battista Alberti in the 15th century.
          </p>
          <p>To encrypt using the Alberti Cipher, enter your text along with a shift value to determine the position of the inner disk relative to the outer disk.</p>
          <ul>
            <li>Polyalphabetic Substitution: Each letter in the plaintext is mapped to its encrypted counterpart using two interlocking disks.</li>
            <li>Inner and Outer Disks: The outer disk contains a normal alphabet, while the inner disk contains a shifted alphabet.</li>
            <li>Encryption: To encrypt, find the corresponding letter on the inner disk for each letter on the outer disk.</li>
            <li>Decryption: The decryption process involves knowing the shift value and reversing the encryption process.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AlbertiCipher;
