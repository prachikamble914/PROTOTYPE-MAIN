import React, { useState } from 'react';

const SutraCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const sutraCipherEncrypt = (text, key) => {
    // Define the Sutra Cipher encryption logic
    // Example encryption logic: reverse the text
    return text.split('').reverse().join('');
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(sutraCipherEncrypt(event.target.value, key));
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
        <h2>Sutra Cipher</h2>
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
            The Sutra Cipher is a cipher technique that uses a specific method for encryption.
          </p>
          <p>To encrypt using the Sutra Cipher, enter your text and key.</p>
        </div>
      )}
    </div>
  );
};

export default SutraCipher;
