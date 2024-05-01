import React, { useState } from 'react';

const StraddlingCheckerboardCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState('');
  const [extraCharacters, setExtraCharacters] = useState('');

  const STRADDLING_CHECKERBOARD = {
    'A': '1',
    'B': '2',
    'C': '3',
    'D': '4',
    'E': '5',
    'F': '6',
    'G': '7',
    'H': '8',
    'I': '9',
    'J': '0',
    'K': '1',
    'L': '2',
    'M': '3',
    'N': '4',
    'O': '5',
    'P': '6',
    'Q': '7',
    'R': '8',
    'S': '9',
    'T': '0',
    'U': '1',
    'V': '2',
    'W': '3',
    'X': '4',
    'Y': '5',
    'Z': '6',
  };

  const straddlingCheckerboardEncrypt = (text, key, extraChars) => {
    // Validate key: Ensure it's a string of digits
    if (!key || !/^\d+$/.test(key)) {
      return 'Invalid key: Must be a string of digits.';
    }

    let encryptedText = '';
    for (let char of text.toUpperCase()) {
      if (char in STRADDLING_CHECKERBOARD) {
        encryptedText += STRADDLING_CHECKERBOARD[char];
      } else if (extraChars.includes(char.toUpperCase())) {
        encryptedText += '7'; // Substitute for extra characters
      }
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(straddlingCheckerboardEncrypt(event.target.value, key, extraCharacters)); // Update output on input change
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
        <h2>Straddling Checkerboard Cipher</h2>
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
          onChange={(event) => setKey(event.target.value)}
          className="custom-keyword"
          placeholder="Enter key (digits)..."
        />
        <input
          type="text"
          value={extraCharacters}
          onChange={(event) => setExtraCharacters(event.target.value.toUpperCase())}
          className="custom-keyword"
          placeholder="Enter extra characters..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>
              <b>Straddling Checkerboard Cipher:</b> A variant of the standard
              checkerboard cipher with an additional row for extra characters.
            </li>
            <li>
              <b>Key:</b> A string of digits that determines the encryption process.
            </li>
            <li>
              <b>Extra Characters:</b> Additional characters included in the cipher.
            </li>
            <li>
              <b>Encryption:</b> Each letter in the plaintext is converted to a number
              based on its position in the checkerboard. Extra characters are substituted
              with a predefined number.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StraddlingCheckerboardCipher;
