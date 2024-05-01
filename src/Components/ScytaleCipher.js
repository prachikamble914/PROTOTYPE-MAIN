import React, { useState } from 'react';

const ScytaleCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState(0);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(scytaleCipher(event.target.value, key));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const scytaleCipher = (text, key) => {
    const numRows = key;
    const numCols = Math.ceil(text.length / numRows);
    const matrix = [];
    let index = 0;

    // Initialize matrix
    for (let i = 0; i < numRows; i++) {
      matrix.push([]);
      for (let j = 0; j < numCols; j++) {
        matrix[i].push(text[index] || ' ');
        index++;
      }
    }

    // Transpose matrix
    const transposedMatrix = [];
    for (let j = 0; j < numCols; j++) {
      transposedMatrix.push([]);
      for (let i = 0; i < numRows; i++) {
        transposedMatrix[j].push(matrix[i][j]);
      }
    }

    // Flatten transposed matrix
    return transposedMatrix.flat().join('');
  };

  const handleKeyChange = (event) => {
    const newKey = parseInt(event.target.value, 10);
    if (!isNaN(newKey)) {
      setKey(newKey);
      setOutput(scytaleCipher(input, newKey));
    }
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Scytale Cipher</h2>
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
        <div className="key-container">
          <label htmlFor="keyInput">Key:</label>
          <input
            type="number"
            id="keyInput"
            value={key}
            onChange={handleKeyChange}
            className="key-input"
            min="1"
            max={input.length}
          />
        </div>
      </div>

      {showInfo && (
        <div className="info-container">
          <p>
            The Scytale Cipher is a transposition cipher performed by writing the message across a
            device called a scytale in a spiral manner.
          </p>
          <p>To encrypt using the Scytale Cipher, enter your text and set the key.</p>
          <ul>
            <li>Transposition Cipher: The characters of the plaintext are rearranged.</li>
            <li>Key: The number of turns around the scytale.</li>
            <li>Encryption: Write the plaintext across the scytale in a spiral manner, then read it off in rows.</li>
            <li>Decryption: The same process can be used for decryption by writing the ciphertext across the scytale and reading it off in rows.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScytaleCipher;
