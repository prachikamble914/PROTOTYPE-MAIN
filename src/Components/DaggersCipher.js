import React, { useState } from 'react';

const DaggersCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(daggersCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const daggersCipher = (text) => {
    // Define the transformation mapping here
    const transformationMap = {
      'A': '†',
      'B': '‡',
      'C': '⸱',
      'D': '◊',
      'E': '♦',
      'F': '♣',
      'G': '♠',
      'H': '•',
      'I': '◘',
      'J': '○',
      'K': '◙',
      'L': '♂',
      'M': '♀',
      'N': '♪',
      'O': '♫',
      'P': '☼',
      'Q': '►',
      'R': '◄',
      'S': '↕',
      'T': '‼',
      'U': '¶',
      'V': '§',
      'W': '▬',
      'X': '↨',
      'Y': '↑',
      'Z': '↓',
      ' ': ' '
    };

    return text
      .toUpperCase()
      .split('')
      .map((char) => transformationMap[char] || char)
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Dagger's Cipher</h2>
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
            Dagger's Cipher is a substitution cipher where each letter in the plaintext is replaced with a specific symbol or character.
          </p>
          <p>To encrypt using Dagger's Cipher, simply enter your text.</p>
          <p>Each letter of the alphabet is replaced with a predetermined symbol or character, creating the ciphertext.</p>
        </div>
      )}
    </div>
  );
};

export default DaggersCipher;
