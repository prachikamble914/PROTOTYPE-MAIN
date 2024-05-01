import React, { useState } from 'react';

const FractionatedMorseCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState('');

  const morseAlphabet = {
    A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....',
    I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.',
    Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
    Y: '-.--', Z: '--..'
  };

  const fractionatedMorseEncrypt = (text, key) => {
    // Remove duplicate characters from the key
    const uniqueKey = Array.from(new Set(key.toUpperCase())).join('');

    // Generate the fractionated Morse code based on the key
    let fractionatedMorseCode = '';
    for (let char of uniqueKey) {
      if (morseAlphabet[char]) {
        fractionatedMorseCode += morseAlphabet[char];
      }
    }

    // Map each plaintext character to its fractionated Morse code
    let encryptedText = '';
    for (let char of text.toUpperCase()) {
      if (morseAlphabet[char]) {
        encryptedText += morseAlphabet[char] + ' ';
      }
    }

    return encryptedText.trim().replaceAll(' ', fractionatedMorseCode + ' ');
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(fractionatedMorseEncrypt(event.target.value, key)); // Update output on input change
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
        <h2>Fractionated Morse Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
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
      <div className="input-container">
        <input
          type="text"
          value={key}
          onChange={(event) => setKey(event.target.value)}
          className="custom-keyword"
          placeholder="Enter key (no duplicates)..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>
              <b>Fractionated Morse Cipher:</b> A variant of the Morse code cipher that uses
              a key to create a unique mapping of characters to Morse code.
            </li>
            <li>
              <b>Key:</b> A string of characters with no duplicates, used to generate a unique
              fractionated Morse code mapping.
            </li>
            <li>
              <b>Encryption:</b> Each character in the plaintext is mapped to its corresponding
              fractionated Morse code based on the key.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FractionatedMorseCipher;
