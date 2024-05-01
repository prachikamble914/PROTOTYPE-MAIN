import React, { useState } from 'react';

const RouteCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  const routeEncrypt = (text, numRows, numCols) => {
    // Validate rows and columns
    if (numRows <= 0 || numCols <= 0) {
      return 'Invalid number of rows or columns.';
    }

    // Pad text with spaces if necessary
    let paddedText = text.padEnd(numRows * numCols, ' ');

    // Convert text into a matrix
    const matrix = [];
    for (let i = 0; i < numRows; i++) {
      matrix.push(paddedText.slice(i * numCols, (i + 1) * numCols).split(''));
    }

    // Read matrix in a zigzag pattern to generate the encrypted text
    let encryptedText = '';
    for (let i = 0; i < numRows; i++) {
      if (i % 2 === 0) {
        for (let j = 0; j < numCols; j++) {
          encryptedText += matrix[i][j];
        }
      } else {
        for (let j = numCols - 1; j >= 0; j--) {
          encryptedText += matrix[i][j];
        }
      }
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(routeEncrypt(event.target.value, rows, cols)); // Update output on input change
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
        <h2>Route Cipher</h2>
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
          type="number"
          value={rows}
          onChange={(event) => setRows(parseInt(event.target.value))}
          className="custom-keyword"
          placeholder="Enter number of rows..."
        />
        <input
          type="number"
          value={cols}
          onChange={(event) => setCols(parseInt(event.target.value))}
          className="custom-keyword"
          placeholder="Enter number of columns..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>
              <b>Route Cipher:</b> A transposition cipher where the plaintext is written
              out in a grid and then read off according to a route.
            </li>
            <li>
              <b>Rows:</b> Number of rows in the grid.
            </li>
            <li>
              <b>Columns:</b> Number of columns in the grid.
            </li>
            <li>
              <b>Encryption:</b> Text is written out in the grid row by row, then read off
              in a zigzag pattern to generate the ciphertext.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RouteCipher;
