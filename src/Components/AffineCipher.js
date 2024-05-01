import React, { useState } from 'react';

const AffineCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(affineCipher(event.target.value, a, b));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const affineCipher = (text, a, b) => {
    const mod = 26;
    const sanitize = (x) => ((x % mod) + mod) % mod; // Ensures result is within [0, 25]
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        if (char >= 'A' && char <= 'Z') {
          const index = char.charCodeAt(0) - 'A'.charCodeAt(0);
          const encryptedIndex = sanitize(a * index + b);
          return String.fromCharCode(encryptedIndex + 'A'.charCodeAt(0));
        }
        return char;
      })
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Affine Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-output-container">
        <div className="input-container">
          <input
            type="number"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
            className="custom-input"
            placeholder="Enter a value for 'a'..."
          />
          <input
            type="number"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value))}
            className="custom-input"
            placeholder="Enter a value for 'b'..."
          />
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
            The Affine Cipher is a type of monoalphabetic substitution cipher, where each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter.
          </p>
          <p>To encrypt using the Affine Cipher, enter your text along with values for 'a' and 'b'. 'a' must be chosen such that 'a' and the alphabet size are coprime. Common choices for 'a' include 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, and 25.</p>
          <ul>
            <li>Monoalphabetic Substitution: Each letter in the plaintext is mapped to its encrypted counterpart using a mathematical function.</li>
            <li>Encryption Function: \( E(x) = (ax + b) \mod 26 \)</li>
            <li>Decryption Function: \( D(x) = a^{-1}(x - b) \mod 26 \), where \(a^{-1}\) is the modular multiplicative inverse of 'a'</li>
            <li>Coprime Condition: 'a' and the alphabet size must be coprime (i.e., their greatest common divisor must be 1).</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AffineCipher;
