import React, { useState } from 'react';

const FourSquareCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(fourSquareCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const fourSquareCipher = (text) => {
    const square1 = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I', 'K'],
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z']
    ];
    const square2 = [
      ['P', 'H', '0', 'Q', 'G'],
      ['6', 'M', 'E', 'A', '2'],
      ['Y', 'N', 'O', 'F', 'D'],
      ['X', 'K', 'R', '3', 'L'],
      ['V', 'W', '5', 'Z', '4']
    ];

    // Function to find coordinates of a letter in the squares
    const findCoordinates = (letter, square) => {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (square[i][j] === letter) {
            return [i, j];
          }
        }
      }
      return null;
    };

    // Function to encrypt a pair of letters
    const encryptPair = (pair) => {
      const [aRow, aCol] = findCoordinates(pair[0], square1);
      const [bRow, bCol] = findCoordinates(pair[1], square2);
      return square1[aRow][bCol] + square2[bRow][aCol];
    };

    // Processing text
    text = text.toUpperCase().replace(/[^A-Z]/g, '');
    let result = '';
    for (let i = 0; i < text.length; i += 2) {
      if (i + 1 === text.length) {
        result += text[i];
      } else {
        result += encryptPair([text[i], text[i + 1]]);
      }
    }
    return result;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Four-Square Cipher</h2>
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
            The Four-Square Cipher uses four 5x5 squares to encrypt and decrypt messages.
          </p>
          <p>
            To encrypt using the Four-Square Cipher, simply enter your text.
          </p>
          <ul>
            <li>Encryption: Each plaintext letter is substituted with a corresponding letter from the squares.</li>
            <li>Four Squares: Two pairs of 5x5 grids are used, typically called Square1 and Square2.</li>
            <li>Pairing: Each letter pair from the plaintext is encrypted using the corresponding positions in Square1 and Square2.</li>
            <li>Example: 'A' in Square1 pairs with 'P' in Square2, 'B' in Square1 pairs with 'H' in Square2, and so forth.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FourSquareCipher;
