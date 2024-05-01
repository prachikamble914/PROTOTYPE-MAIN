import React, { useState } from 'react';

const PigpenCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(pigpenCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const pigpenCipher = (text) => {
    const pigpenMap = {
      A: '\u2709',
      B: '\u270B',
      C: '\u270A',
      D: '\u2708',
      E: '\u270C',
      F: '\u270F',
      G: '\u2712',
      H: '\u2711',
      I: '\u2714',
      J: '\u2716',
      K: '\u2715',
      L: '\u2717',
      M: '\u2718',
      N: '\u2719',
      O: '\u271A',
      P: '\u271B',
      Q: '\u271C',
      R: '\u271D',
      S: '\u271E',
      T: '\u271F',
      U: '\u2720',
      V: '\u2721',
      W: '\u2722',
      X: '\u2723',
      Y: '\u2724',
      Z: '\u2725',
    };

    return text
      .toUpperCase()
      .split('')
      .map((char) => (pigpenMap[char] ? pigpenMap[char] : char))
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Pigpen Cipher</h2>
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
            The Pigpen Cipher, also known as the Masonic Cipher, Freemason's Cipher, or Tic-Tac-Toe Cipher, is a geometric substitution cipher. It uses a set of symbols arranged in a grid, where each letter of the alphabet is represented by a different symbol or combination of symbols.
          </p>
          <p>To encrypt using the Pigpen Cipher, simply enter your text.</p>
          <ul>
            <li>Geometric Substitution Cipher: Each letter in the plaintext is replaced by a unique symbol or combination of symbols.</li>
            <li>Symbol Grid: The cipher uses a grid of symbols, typically arranged in a square or rectangle.</li>
            <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding symbol from the grid.</li>
            <li>Decryption: The decryption process involves reversing the encryption process by substituting the symbols with their corresponding letters.</li>
            <li>Example: 'A' might be represented by a dot in the top-left corner of the grid, 'B' by a dot in the top-middle position, and so on.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PigpenCipher;
