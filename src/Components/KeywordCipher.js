// KeywordCipher.js
import React, { useState } from 'react';

const KeywordCipher = () => {
  const [input, setInput] = useState('');
  const [keyword, setKeyword] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(keywordCipherEncrypt(event.target.value, keyword));
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
    setOutput(keywordCipherEncrypt(input, event.target.value));
  };

  const keywordCipherEncrypt = (text, keyword) => {
    // Remove duplicate characters from the keyword
    const uniqueKeyword = Array.from(new Set(keyword)).join('');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let key = uniqueKeyword.toUpperCase() + alphabet.replace(new RegExp('[' + uniqueKeyword.toUpperCase() + ']', 'g'), '');

    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        if (char.match(/[A-Z]/)) {
          const index = alphabet.indexOf(char);
          return key[index];
        }
        return char;
      })
      .join('');
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
        <h2>Keyword Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-output-container">
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
        
      </div>
      <div className="input-container">
          <input
            type="text"
            value={keyword}
            onChange={handleKeywordChange}
            className="custom-keyword"
            placeholder="Enter keyword..."
          />
        </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>Substitution Cipher: Keyword Cipher is a type of substitution cipher.</li>
            <li>Keyword: A keyword is used to create a unique substitution alphabet.</li>
            <li>Encryption: Each letter in the plaintext is replaced by its corresponding letter in the keyword's substitution alphabet.</li>
            <li>Example: For example, if the keyword is 'KEYWORD', then 'A' might be replaced by 'K', 'B' by 'E', 'C' by 'Y', and so on.</li>
            <li>Case Insensitive: Keyword Cipher is case insensitive, so 'a' and 'A' will be treated the same.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default KeywordCipher;
