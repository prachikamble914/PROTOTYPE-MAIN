import React, { useState } from 'react';

const Base64EncodingCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(base64Encode(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const base64Encode = (text) => {
    return btoa(text); // Using built-in btoa function for Base64 encoding
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Base64 Encoding Cipher</h2>
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
            Base64 encoding is a method of encoding binary data into an ASCII string format by converting it into a base64 representation.
          </p>
          <p>
            Base64 encoding is commonly used in email, HTTP headers, and other contexts to transmit data that may not be readable characters.
          </p>
          <ul>
            <li>Character Set: Base64 uses a set of 64 characters to represent binary data, consisting of A-Z, a-z, 0-9, '+', and '/'.</li>
            <li>Padding: Base64 may use padding characters '=' at the end to ensure that the encoded output is a multiple of 4 characters.</li>
            <li>Encoding: To encode text using Base64, simply convert each character to its ASCII value, then convert those values to a base64 representation.</li>
            <li>Decoding: Decoding Base64 involves reversing the encoding process, converting each base64 character back to its ASCII value and then to the original binary data.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Base64EncodingCipher;
