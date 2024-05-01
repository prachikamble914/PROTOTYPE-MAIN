import React, { useState } from 'react';

const YardleyCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(yardleyCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const yardleyCipher = (text) => {
    // Define your custom Yardley cipher logic here
    // For demonstration purposes, let's just reverse the input string
    return text.split('').reverse().join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Yardley Cipher</h2>
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
            The Yardley Cipher is a substitution cipher where each character in the plaintext is substituted according to a predetermined key.
          </p>
          <p>To encrypt using the Yardley Cipher, simply enter your text.</p>
          <ul>
            <li>Substitution Cipher: Each character in the plaintext is replaced by a character according to a key.</li>
            <li>Custom Logic: Implement custom logic to determine how characters are substituted.</li>
            <li>Encryption: To encrypt, apply the custom substitution logic to each character in the plaintext.</li>
            <li>Decryption: Decryption requires knowledge of the specific substitution logic used.</li>
            <li>Example: For demonstration, the provided example simply reverses the input text.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default YardleyCipher;
