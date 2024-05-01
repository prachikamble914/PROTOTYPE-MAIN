import React, { useState } from 'react';

const ElianScriptCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(elianScriptCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const elianScriptCipher = (text) => {
    // Define Elian Script alphabet mapping
    const elianAlphabet = {
      A: '\u25D0',
      B: '\u25D1',
      C: '\u25D2',
      D: '\u25D3',
      E: '\u25D4',
      F: '\u25D5',
      G: '\u25D6',
      H: '\u25D7',
      I: '\u25D8',
      J: '\u25D9',
      K: '\u25DA',
      L: '\u25DB',
      M: '\u25DC',
      N: '\u25DD',
      O: '\u25DE',
      P: '\u25DF',
      Q: '\u25E0',
      R: '\u25E1',
      S: '\u25E2',
      T: '\u25E3',
      U: '\u25E4',
      V: '\u25E5',
      W: '\u25E6',
      X: '\u25E7',
      Y: '\u25E8',
      Z: '\u25E9',
      ' ': ' ', // Space remains unchanged
    };
    // Convert text to uppercase and map each character to its Elian Script equivalent
    return text
      .toUpperCase()
      .split('')
      .map((char) => elianAlphabet[char] || char)
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Elian Script Cipher</h2>
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
            The Elian Script Cipher is a substitution cipher where each letter in the plaintext is replaced with its corresponding character in the Elian Script, a constructed script used primarily for artistic purposes.
          </p>
          <p>To encrypt using the Elian Script Cipher, simply enter your text.</p>
          <ul>
            <li>Substitution Cipher: Each letter in the plaintext is replaced by its Elian Script counterpart.</li>
            <li>Elian Script: A constructed script featuring a series of circles and lines arranged in various configurations.</li>
            <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding Elian Script character.</li>
            <li>Decryption: As the Elian Script Cipher is based on substitution, decryption involves reversing the process by replacing Elian Script characters with their corresponding plaintext letters.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ElianScriptCipher;
