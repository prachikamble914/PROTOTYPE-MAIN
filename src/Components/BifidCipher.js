import React, { useState } from 'react';

const BifidCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState('');

  const bifidEncrypt = (text, key) => {
    // Define the Bifid Cipher grid
    const grid = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I', 'K'],
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z']
    ];

    // Remove spaces and convert text to uppercase
    text = text.replace(/\s/g, '').toUpperCase();

    // Create a map to store the positions of each letter in the grid
    const letterPositions = {};
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        letterPositions[grid[i][j]] = [i, j];
      }
    }

    // Initialize arrays to store row and column coordinates of each letter
    const rowCoords = [];
    const colCoords = [];

    // Iterate through the text to get the row and column coordinates of each letter
    for (let i = 0; i < text.length; i++) {
      const [row, col] = letterPositions[text[i]];
      rowCoords.push(row);
      colCoords.push(col);
    }

    // Generate encrypted text by combining row and column coordinates
    let encryptedText = '';
    for (let i = 0; i < rowCoords.length; i++) {
      encryptedText += grid[rowCoords[i]][colCoords[i]];
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(bifidEncrypt(event.target.value, key)); // Update output on input change
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
        <h2>Bifid Cipher</h2>
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
          onChange={(event) => setKey(event.target.value.toUpperCase())}
          className="custom-keyword"
          placeholder="Enter key..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>
              <b>Bifid Cipher:</b> A fractionating transposition cipher similar to the Trifid Cipher.
            </li>
            <li>
              <b>Key:</b> This cipher doesn't require a key.
            </li>
            <li>
              <b>Encryption:</b> Each letter in the plaintext is converted to its row and column coordinates in a 5x5 grid and then combined to generate the ciphertext.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BifidCipher;

