import React, { useState } from 'react';

const DancingMenCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState('');

  const dancingMenAlphabet = {
    '👨‍👦': 'A', '👨‍👧': 'B', '👩‍👦': 'C', '👩‍👧': 'D',
    '👨‍👨‍👦': 'E', '👨‍👨‍👧': 'F', '👩‍👩‍👦': 'G', '👩‍👩‍👧': 'H',
    '👨‍👦‍👦': 'I', '👨‍👧‍👧': 'J', '👩‍👦‍👦': 'K', '👩‍👧‍👧': 'L'
  };

  const dancingMenDecrypt = (text, key) => {
    // Reverse the dancing men alphabet to create the decryption mapping
    const decryptionMapping = {};
    for (let symbol in dancingMenAlphabet) {
      const letter = dancingMenAlphabet[symbol];
      decryptionMapping[letter] = symbol;
    }

    // Decrypt text using the decryption mapping
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
      const symbol = text.substring(i, i + 2);
      if (dancingMenAlphabet[symbol]) {
        decryptedText += dancingMenAlphabet[symbol];
      } else {
        decryptedText += symbol;
      }
    }

    return decryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(dancingMenDecrypt(event.target.value, key)); // Update output on input change
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
        <h2>Dancing Men Cipher</h2>
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
          placeholder="Enter key..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>
              <b>Dancing Men Cipher:</b> A substitution cipher where symbols representing
              dancing men are used to encode letters of the alphabet.
            </li>
            <li>
              <b>Key:</b> The mapping of dancing men symbols to letters of the alphabet.
            </li>
            <li>
              <b>Decryption:</b> Each dancing men symbol in the ciphertext is replaced with
              its corresponding letter based on the key.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DancingMenCipher;
