import React, { useState } from 'react';

const VigenereCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [keyword, setKeyword] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(vigenereCipher(event.target.value, keyword));
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
    setOutput(vigenereCipher(input, event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const vigenereCipher = (text, keyword) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let outputText = '';
    let keywordIndex = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();
      if (char >= 'A' && char <= 'Z') {
        const shift = alphabet.indexOf(keyword[keywordIndex].toUpperCase());
        const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
        const index = alphabet.indexOf(char);
        outputText += shiftedAlphabet[index];
        keywordIndex = (keywordIndex + 1) % keyword.length;
      } else {
        outputText += char;
      }
    }
    return outputText;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Vigenère Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      
      <div className="input-output-container">
        <div className="input-container">
          <input
            type="text"
            value={keyword}
            onChange={handleKeywordChange}
            className="custom-input"
            placeholder="Enter keyword..."
          />
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
            The Vigenère Cipher is a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution. It uses a keyword to shift the letters in the plaintext.
          </p>
          <p>To encrypt using the Vigenère Cipher, enter your text and a keyword.</p>
          <ul>
            <li>Polyalphabetic Substitution: Each letter in the plaintext is shifted by a different amount based on the keyword.</li>
            <li>Keyword: The keyword determines the amount of shift for each letter in the plaintext.</li>
            <li>Encryption: To encrypt, shift each letter in the plaintext according to the corresponding letter in the keyword.</li>
            <li>Example: If the keyword is "KEY", and the plaintext is "HELLO", the encrypted text would be "RIJVS".</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default VigenereCipher;
