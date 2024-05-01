import React, { useState } from 'react';

const TwoSquareCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(twoSquareCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const twoSquareCipher = (text) => {
    const square1 = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I', 'K'],
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z']
    ];
    const square2 = [
      ['P', 'H', '0', 'Q', 'G'],
      ['6', '4', 'A', 'O', 'L'],
      ['R', 'D', 'E', 'S', 'N'],
      ['V', '7', '2', 'Y', 'J'],
      ['3', '8', 'K', 'U', '1']
    ];

    let result = '';
    text = text.toUpperCase().replace(/[^A-Z]/g, '');

    for (let i = 0; i < text.length; i += 2) {
      let pair1 = text[i];
      let pair2 = (i + 1 < text.length) ? text[i + 1] : 'X'; // Assuming 'X' for odd length text
      let [r1, c1] = findPosition(square1, pair1);
      let [r2, c2] = findPosition(square2, pair2);
      result += square1[r1][c2] + square2[r2][c1];
    }

    return result;
  };

  const findPosition = (square, char) => {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (square[i][j] === char) {
          return [i, j];
        }
      }
    }
    return null;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Two Square Cipher</h2>
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
      The Two Square Cipher is a polygraphic substitution cipher.
    </p>
    <p>To encrypt using the Two Square Cipher, simply enter your text.</p>
    <ul>
      <li>Polygraphic Cipher: Operates on blocks of characters rather than individual characters.</li>
      <li>Two Square Technique: Uses two 5x5 grids, typically called the Playfair squares.</li>
      <li>Encryption: Text is broken into pairs, and each pair is encrypted using a rule based on the arrangement of characters in the squares.</li>
      <li>Decryption: Decryption follows the reverse process of encryption, using the same squares and rules.</li>
    </ul>
  </div>
)}

    </div>
  );
};

export default TwoSquareCipher;
