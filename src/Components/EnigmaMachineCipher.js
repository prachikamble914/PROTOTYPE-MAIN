import React, { useState } from 'react';

const EnigmaMachineCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(enigmaMachineCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const enigmaMachineCipher = (text) => {
    // Your Enigma machine cipher logic here
    // This is just a placeholder implementation
    return text.toUpperCase();
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Enigma Machine Cipher</h2>
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
            The Enigma Machine Cipher is a complex encryption device used by the Germans during World War II.
          </p>
          <p>To use the Enigma Machine Cipher, simply enter your text.</p>
          <ul>
            <li>Complex Encryption: The Enigma machine used rotors, plugboards, and a reflector to encrypt messages.</li>
            <li>Each Key Press: Each key press would trigger a series of rotor movements and substitutions, making it highly secure.</li>
            <li>Decryption: Decryption required the exact settings used for encryption, making it very difficult to crack.</li>
            <li>Example: The Enigma machine had various configurations and settings, making it impossible to provide a simple example here.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default EnigmaMachineCipher;
