import React, { useState } from 'react';

const SerpentCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(serpentCipherEncrypt(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const serpentCipherEncrypt = (text) => {
    // Define the Serpent Cipher encryption logic
    // For demonstration purposes, let's reverse the input text
    return text.split('').reverse().join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Serpent Cipher</h2>
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
            The Serpent Cipher is a type of transposition cipher that rearranges the characters of a message.
          </p>
          <p>To encrypt using the Serpent Cipher, simply enter your text.</p>
          {/* Add more information here as needed */}
        </div>
      )}
    </div>
  );
};

export default SerpentCipher;
