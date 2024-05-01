import React, { useState } from 'react';

const MatrixCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(matrixCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const matrixCipher = (text) => {
    // Define the matrix key
    const matrixKey = [
      ['A', 'B', 'C', 'D'],
      ['E', 'F', 'G', 'H'],
      ['I', 'J', 'K', 'L'],
      ['M', 'N', 'O', 'P'],
    ];

    // Convert text to uppercase
    text = text.toUpperCase();

    // Initialize output string
    let output = '';

    // Iterate through the text characters
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);

      // Find the position of the character in the matrix
      let row, col;
      for (let r = 0; r < matrixKey.length; r++) {
        const index = matrixKey[r].indexOf(char);
        if (index !== -1) {
          row = r;
          col = index;
          break;
        }
      }

      // If the character exists in the matrix, add its position to the output
      if (row !== undefined && col !== undefined) {
        output += `${row + 1}${col + 1} `;
      } else {
        // If the character is not in the matrix, add it directly to the output
        output += char;
      }
    }

    return output.trim();
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Matrix Cipher</h2>
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
            The Matrix Cipher is a substitution cipher where each letter in the plaintext is represented by its position in a matrix.
          </p>
          <p>To encrypt using the Matrix Cipher, simply enter your text.</p>
          <ul>
            <li>Substitution Cipher: Each letter in the plaintext is replaced by its position in a matrix.</li>
            <li>Matrix Key: The matrix determines the position of each letter. It's typically a predefined arrangement of letters.</li>
            <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding position in the matrix.</li>
            <li>Decryption: The Matrix Cipher can be decrypted by reversing the process using the same matrix key.</li>
            <li>Example: 'A' might be represented by '11', 'B' by '12', 'C' by '13', and so forth.</li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default MatrixCipher;
