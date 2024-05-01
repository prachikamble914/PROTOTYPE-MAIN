import React, { useState } from 'react';

const NullCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleEncrypt = () => {
    setOutput(input);
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Null Cipher</h2>
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
          <button className="convert-button" onClick={handleEncrypt}>
            Encrypt
          </button>
        </div>
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>Null Cipher: Also known as the zero cipher or a non-cipher, it does not transform plaintext but instead sends it as is.</li>
            <li>No Encryption: The Null Cipher does not perform any encryption on the text.</li>
            <li>Example: If you input 'HELLO', the output will also be 'HELLO'.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NullCipher;
