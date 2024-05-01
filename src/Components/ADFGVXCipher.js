import React, { useState } from 'react';

const ADFGVXCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState('');

  const ADFGVX_TABLE = [
    ['A', 'D', 'F', 'G', 'V', 'X'],
    ['N', 'B', 'E', 'C', 'K', 'Z'],
    ['P', 'Q', 'R', 'S', 'T', 'U'],
    ['W', 'I', 'J', 'L', 'M', 'O'],
    ['Y'],
  ];

  const adfgvxEncrypt = (text, key) => {
    // Validate key: Ensure 6 unique uppercase letters
    if (!key || key.length !== 6 || !/^[A-Z]+$/.test(key) || new Set(key.split('')).size !== 6) {
      return 'Invalid key: Must be 6 unique uppercase letters.';
    }

    let adfgvxText = '';
    for (let char of text.toUpperCase()) {
      let rowIndex, colIndex;
      for (let i = 0; i < ADFGVX_TABLE.length; i++) {
        if (ADFGVX_TABLE[i].includes(char)) {
          rowIndex = i;
          colIndex = ADFGVX_TABLE[i].indexOf(char);
          break;
        }
      }
      if (typeof rowIndex === 'undefined' || typeof colIndex === 'undefined') {
        continue; // Skip characters not in the table
      }
      adfgvxText += ADFGVX_TABLE[rowIndex][colIndex];
    }

    let encryptedText = '';
    for (let i = 0; i < adfgvxText.length; i++) {
      const keyIndex = key[i % key.length].charCodeAt(0) - 65; // Get index from key character
      const tableIndex = Math.floor(keyIndex / 6) * 6 + (keyIndex % 6); // Calculate table index

      encryptedText += adfgvxText[i] === ADFGVX_TABLE[Math.floor(tableIndex / 6)][tableIndex % 6] ? 'X' : 'A';
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(adfgvxEncrypt(event.target.value, key)); // Update output on input change
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
        <h2>ADFGVX Cipher</h2>
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
          onChange={(event) => setKey(event.target.value.toUpperCase())} // Ensure uppercase key
          className="custom-keyword"
          placeholder="Enter key (6 unique letters)..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>
              <b>ADFGVX Cipher:</b> A polybius square transposition cipher used
              during WWI by the German Army.
            </li>
            <li>
              <b>Key:</b> A keyword with 6 unique uppercase letters. The
              key determines the mapping between plaintext characters and
              encrypted characters.
            </li>
            <li>
              <b>Encryption:</b> The plaintext is converted to ADFGVX characters
              using their positions in the cipher table. Then, each ADFGVX
              character is checked against the key. If the character's position
              in the table matches the position of a character in the key, it
              is replaced with 'X'. Otherwise, it is replaced with 'A'.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ADFGVXCipher;



