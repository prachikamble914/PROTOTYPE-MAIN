import React, { useState } from 'react';

const VisionaireCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(visionaireCipherEncrypt(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const visionaireCipherEncrypt = (text) => {
    // Visionaire Cipher encryption logic
    const keyword = 'VISIONAIRE';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const keywordRepeated = keyword.repeat(Math.ceil(text.length / keyword.length)).slice(0, text.length);
    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();
      const shift = alphabet.indexOf(keywordRepeated[i]);
      if (alphabet.includes(char)) {
        const newIndex = (alphabet.indexOf(char) + shift) % alphabet.length;
        encryptedText += alphabet[newIndex];
      } else {
        encryptedText += char;
      }
    }

    return encryptedText;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Visionaire Cipher</h2>
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
            The Visionaire Cipher is a polyalphabetic substitution cipher that uses multiple cipher alphabets.
          </p>
          <p>To encrypt using the Visionaire Cipher, simply enter your text.</p>
          {/* Add more information here as needed */}
        </div>
      )}
    </div>
  );
};

export default VisionaireCipher;
