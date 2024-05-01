import React, { useState } from 'react';

const PermutationCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(permutationCipherEncrypt(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const permutationCipherEncrypt = (text) => {
    
    const upperText = text.toUpperCase();
    
    const characters = upperText.split('');
    
    const shuffledCharacters = shuffleArray(characters);
    
    const encryptedText = shuffledCharacters.join('');
    
    return encryptedText;
  };
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Permutation Cipher</h2>
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
            The Permutation Cipher is a transposition cipher that rearranges the characters of a message.
          </p>
          <p>To encrypt using the Permutation Cipher, simply enter your text.</p>
        </div>
      )}
    </div>
  );
};

export default PermutationCipher;
