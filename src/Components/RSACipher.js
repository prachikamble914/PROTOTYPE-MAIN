import React, { useState } from 'react';

const RSACipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const rsaEncrypt = (text, publicKey) => {
    // Perform RSA encryption here
    return 'Encrypted output';
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(rsaEncrypt(event.target.value, publicKey)); // Update output on input change
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
        <h2>RSA Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-container">
        <textarea
          type="text"
          value={input}
          className="custom-input"
          onChange={handleInputChange}
          placeholder="Enter text..."
        />
        <textarea
          type="text"
          value={output}
          className="custom-output"
          readOnly
          placeholder="Output..."
        />
        <button className="copy-button" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={publicKey}
          onChange={(event) => setPublicKey(event.target.value)}
          className="custom-keyword"
          placeholder="Enter public key..."
        />
        <input
          type="text"
          value={privateKey}
          onChange={(event) => setPrivateKey(event.target.value)}
          className="custom-keyword"
          placeholder="Enter private key..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>
              <b>RSA Cipher:</b> A public-key encryption technique widely used for secure communication.
            </li>
            <li>
              <b>Public Key:</b> Used for encryption.
            </li>
            <li>
              <b>Private Key:</b> Used for decryption.
            </li>
            <li>
              <b>Encryption:</b> The plaintext is encrypted using the public key, producing ciphertext.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RSACipher;
