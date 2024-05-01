import React, { useState } from 'react';

const NihilistSubstitutionCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const nihilistSubstitutionCipherEncrypt = (text, key) => {
    // Define the Nihilist Substitution Cipher grid
    const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'; // Excluding 'J' as per Nihilist Cipher convention
    const grid = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I', 'K'],
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z']
    ];

    // Convert input text to uppercase and remove spaces
    const cleanedText = text.toUpperCase().replace(/\s+/g, '');

    // Prepare the key for encryption by converting it to uppercase and removing spaces
    const cleanedKey = key.toUpperCase().replace(/\s+/g, '');

    let result = '';

    // Encryption process
    for (let i = 0; i < cleanedText.length; i++) {
      const char = cleanedText[i];
      const charIndex = alphabet.indexOf(char);
      if (charIndex !== -1) {
        const row = Math.floor(charIndex / 5);
        const col = charIndex % 5;
        result += grid[row][col];
      }
    }

    // Combine the result with the key
    let encryptedText = '';
    for (let j = 0; j < result.length; j++) {
      const index = (alphabet.indexOf(result[j]) + alphabet.indexOf(cleanedKey[j % cleanedKey.length])) % 25;
      encryptedText += alphabet[index];
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(nihilistSubstitutionCipherEncrypt(event.target.value, key));
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
        <h2>Nihilist Substitution Cipher</h2>
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
            value={key}
            onChange={(event) => setKey(event.target.value)}
            className="custom-keyword"
            placeholder="Enter key..."
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
            The Nihilist Substitution Cipher is a variant of the Nihilist Cipher using a simple substitution method.
          </p>
          <p>To encrypt using the Nihilist Substitution Cipher, enter your text and key.</p>
        </div>
      )}
    </div>
  );
};

export default NihilistSubstitutionCipher;
