import React, { useState } from 'react';

const SubstitutionTablesCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [substitutionKey, setSubstitutionKey] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(substitutionTablesCipher(event.target.value, substitutionKey));
  };

  const handleKeyChange = (event) => {
    setSubstitutionKey(event.target.value);
    setOutput(substitutionTablesCipher(input, event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const substitutionTablesCipher = (text, key) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const keyAlphabet = key.toUpperCase();
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        const index = alphabet.indexOf(char);
        return index !== -1 ? keyAlphabet[index] || char : char;
      })
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Substitution Tables Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      
      <div className="input-output-container">
        <div className="input-container">
          <input
            type="text"
            value={substitutionKey}
            onChange={handleKeyChange}
            className="custom-input"
            placeholder="Enter substitution key..."
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
            The Substitution Tables Cipher is a method of encryption where each letter in the plaintext is replaced by a corresponding letter in the substitution key.
          </p>
          <p>To encrypt using the Substitution Tables Cipher, enter your text and a substitution key.</p>
          <ul>
            <li>Substitution Cipher: Each letter in the plaintext is replaced by its corresponding letter in the substitution key.</li>
            <li>Substitution Key: An alphabet that maps each letter of the plaintext alphabet to a unique letter in the ciphertext alphabet.</li>
            <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding letter in the substitution key.</li>
            <li>Decryption: Decryption is performed by reversing the substitution, using the inverse of the substitution key.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubstitutionTablesCipher;
