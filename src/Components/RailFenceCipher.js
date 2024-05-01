// RailFenceCipher.js
import React, { useState } from 'react';

const RailFenceCipher = () => {
  const [input, setInput] = useState('');
  const [rails, setRails] = useState(3);
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(encryptRailFence(event.target.value, rails));
  };

  const handleRailsChange = (event) => {
    setRails(parseInt(event.target.value, 10));
    setOutput(encryptRailFence(input, parseInt(event.target.value, 10)));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const encryptRailFence = (text, rails) => {
    const result = Array.from({ length: rails }, () => []);
    let rail = 0;
    let direction = 1;

    for (let i = 0; i < text.length; i++) {
      result[rail].push(text[i]);
      rail += direction;
      if (rail === 0 || rail === rails - 1) {
        direction = -direction;
      }
    }

    return result.flat().join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Rail Fence Cipher</h2>
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
      <div className="input-container">
        <input
          type="number"
          value={rails}
          onChange={handleRailsChange}
          className="key-input"
          placeholder="Number of Rails..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <p>
            The Rail Fence Cipher is a transposition cipher that arranges plaintext characters in a diagonal pattern across a specified number of "rails".
          </p>
          <p>To encrypt using the Rail Fence Cipher, enter your text and specify the number of rails.</p>
        </div>
      )}
    </div>
  );
};

export default RailFenceCipher;
