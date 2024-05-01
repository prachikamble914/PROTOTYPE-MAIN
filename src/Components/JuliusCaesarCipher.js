import React, { useState } from 'react';

const JuliusCaesarCipher = () => {
  const [input, setInput] = useState('');
  const [shift, setShift] = useState(0); // Default shift value
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const caesarCipherEncrypt = (text, shift) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);

    const upperText = text.toUpperCase();

    let encryptedText = '';
    for (let char of upperText) {
      const index = alphabet.indexOf(char);
      if (index !== -1) {
        encryptedText += shiftedAlphabet[index];
      } else {
        encryptedText += char; // Keep non-alphabetic characters unchanged
      }
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(caesarCipherEncrypt(event.target.value, shift));
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
        <h2>Julius Caesar Cipher</h2>
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
          <input
            type="number"
            value={shift}
            onChange={(event) => setShift(parseInt(event.target.value))}
            className="custom-shift"
            placeholder="Enter shift..."
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
            The Julius Caesar Cipher, named after Julius Caesar, is one of the simplest and most widely known encryption techniques. It is a substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.
          </p>
          <p>To encrypt using the Julius Caesar Cipher, enter your text and specify the shift value.</p>
        </div>
      )}
    </div>
  );
};

export default JuliusCaesarCipher;
