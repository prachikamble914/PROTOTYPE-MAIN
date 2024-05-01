import React, { useState } from 'react';

const BaconianCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(baconianCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const baconianCipher = (text) => {
    const alphabet = {
      A: 'AAAAA',
      B: 'AAAAB',
      C: 'AAABA',
      D: 'AAABB',
      E: 'AABAA',
      F: 'AABAB',
      G: 'AABBA',
      H: 'AABBB',
      I: 'ABAAA',
      J: 'ABAAB',
      K: 'ABABA',
      L: 'ABABB',
      M: 'ABBAA',
      N: 'ABBAB',
      O: 'ABBBA',
      P: 'ABBBB',
      Q: 'BAAAA',
      R: 'BAAAB',
      S: 'BAABA',
      T: 'BAABB',
      U: 'BABAA',
      V: 'BABAB',
      W: 'BABBA',
      X: 'BABBB',
      Y: 'BBAAA',
      Z: 'BBAAB',
    };
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        return alphabet[char] || char;
      })
      .join(' ');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Baconian Cipher</h2>
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
            The Baconian Cipher is a substitution cipher where each letter of the plaintext is replaced with a group of five characters, traditionally 'A' and 'B', to form a binary code.
          </p>
          <p>To encrypt using the Baconian Cipher, simply enter your text.</p>
          <ul>
            <li>Substitution Cipher: Each letter in the plaintext is replaced by a binary code of 'A's and 'B's.</li>
            <li>Binary Code: Each letter is represented by a group of five characters, typically 'A' and 'B'.</li>
            <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding binary code.</li>
            <li>Decryption: To decrypt, decode the binary string back to plaintext.</li>
            <li>Example: 'A' might be encoded as 'AAAAA', 'B' as 'AAAAB', 'C' as 'AAABA', and so on.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BaconianCipher;
