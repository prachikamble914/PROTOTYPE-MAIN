import React, { useState } from 'react';

const ColumnarTranspositionCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [key, setKey] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleEncrypt = () => {
    setOutput(encryptColumnarTransposition(input, key));
  };

  const handleDecrypt = () => {
    setOutput(decryptColumnarTransposition(input, key));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const encryptColumnarTransposition = (plaintext, key) => {
    // Remove spaces from the key and convert to uppercase
    const cleanedKey = key.replace(/\s/g, '').toUpperCase();
    
    // Calculate number of columns
    const numColumns = cleanedKey.length;
    
    // Pad plaintext to fit the grid
    const paddedPlaintext = plaintext + '_'.repeat(numColumns - (plaintext.length % numColumns));
    
    // Initialize an array to hold columns
    const columns = Array.from({ length: numColumns }, () => []);

    // Populate columns
    for (let i = 0; i < paddedPlaintext.length; i++) {
      const columnIndex = i % numColumns;
      columns[columnIndex].push(paddedPlaintext[i]);
    }

    // Sort columns based on key order
    const sortedColumns = cleanedKey.split('').map(char => columns[key.indexOf(char)]);
    
    // Join columns to form ciphertext
    return sortedColumns.flat().join('');
  };

  const decryptColumnarTransposition = (ciphertext, key) => {
    // Remove spaces from the key and convert to uppercase
    const cleanedKey = key.replace(/\s/g, '').toUpperCase();

    // Calculate number of columns
    const numColumns = cleanedKey.length;

    // Calculate number of rows
    const numRows = Math.ceil(ciphertext.length / numColumns);

    // Initialize an array to hold columns
    const columns = Array.from({ length: numColumns }, () => []);

    // Populate columns
    for (let i = 0; i < ciphertext.length; i++) {
      const columnIndex = i % numColumns;
      const rowIndex = Math.floor(i / numColumns);
      columns[columnIndex][rowIndex] = ciphertext[i];
    }

    // Sort columns based on key order
    const sortedColumns = Array.from({ length: numColumns }, (_, index) => columns[cleanedKey.indexOf(key[index])]);

    // Join columns to form plaintext
    return sortedColumns.flat().join('').trimEnd('_');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Columnar Transposition Cipher</h2>
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
          <input
            type="text"
            value={key}
            onChange={handleKeyChange}
            className="custom-input"
            placeholder="Enter key..."
          />
          <button className="encrypt-button" onClick={handleEncrypt}>
            Encrypt
          </button>
          <button className="decrypt-button" onClick={handleDecrypt}>
            Decrypt
          </button>
          <textarea
            type="text"
            value={output}
            readOnly
            className="custom-output"
            placeholder="Output..."
          />
        </div>
      </div>
      {showInfo && (
        <div className="info-container">
          <p>
            The Columnar Transposition Cipher is a transposition cipher where the order of the characters in the plaintext is rearranged according to a specified columnar key.
          </p>
          <p>To encrypt using the Columnar Transposition Cipher, enter your text and a key. To decrypt, enter the ciphertext and the same key.</p>
          <ul>
            <li>Transposition Cipher: Characters are rearranged according to a specific rule or pattern.</li>
            <li>Encryption: Text is arranged in a grid according to the length of the key, and columns are reordered based on the key.</li>
            <li>Decryption: Text is arranged in a grid according to the length of the key, and columns are reordered back to their original positions based on the key.</li>
            <li>Key: The key determines the order in which columns are arranged.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ColumnarTranspositionCipher;
