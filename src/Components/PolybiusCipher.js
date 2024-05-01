// PolybiusSquareCipher.js
import React, { useState } from 'react';

const PolybiusSquareCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInput(text);
    setOutput(polybiusSquareEncrypt(text));
  };

  const polybiusSquareEncrypt = (text) => {
    const square = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I', 'K'],
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z']
    ];
    return text.toUpperCase().split('').map(char => {
      if (char === 'J') char = 'I'; // Handling the 'J' and 'I' combination
      if (char.match(/[A-Z]/)) {
        for (let i = 0; i < square.length; i++) {
          for (let j = 0; j < square[i].length; j++) {
            if (square[i][j] === char) {
              return `${i + 1}${j + 1}`;
            }
          }
        }
      }
      return char;
    }).join('');
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
      <h2>Polybius Square Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-output-container">
        <div className="input-container">
          <textarea
            type="number"
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
      </div>
      {showInfo && (
  <div className="info-container">
    <ul>
      <li>Substitution Cipher: Polybius Square Cipher is a type of substitution cipher.</li>
      <li>Grid Representation: It uses a 5x5 grid of letters, usually omitting 'J' and combining 'I' and 'J' into one cell.</li>
      <li>Encoding Process: Each letter is represented by its row and column number in the grid.</li>
      <li>Numeric Output: The encrypted output consists of pairs of numbers, representing the coordinates of each letter in the grid.</li>
      <li>Example: For example, 'HELLO' might become '23 15 31 31 34'.</li>
    </ul>
  </div>
)}

    </div>
  );
};

export default PolybiusSquareCipher;
