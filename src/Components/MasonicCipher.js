import React, { useState } from 'react';

const MasonicCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(masonicCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const masonicCipher = (text) => {
    const masonicAlphabet = {
      A: 'G',
      B: 'E',
      C: 'B',
      D: 'D',
      E: 'A',
      F: 'J',
      G: 'C',
      H: 'F',
      I: 'I',
      J: 'H',
      K: 'R',
      L: 'L',
      M: 'Q',
      N: 'N',
      O: 'M',
      P: 'S',
      Q: 'K',
      R: 'P',
      S: 'O',
      T: 'W',
      U: 'U',
      V: 'Y',
      W: 'T',
      X: 'V',
      Y: 'X',
      Z: 'Z',
    };

    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        return masonicAlphabet[char] || char;
      })
      .join('');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Masonic Cipher</h2>
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
            The Masonic Cipher is a substitution cipher where each letter in
            the plaintext is replaced with a corresponding symbol or character.
          </p>
          <p>To encrypt using the Masonic Cipher, simply enter your text.</p>
          <ul>
            <li>
              Substitution Cipher: Each letter in the plaintext is replaced by
              a corresponding symbol or character.
            </li>
            <li>
              Masonic Alphabet: The Masonic Cipher uses a specific mapping of
              letters to symbols.
            </li>
            <li>
              Encryption: To encrypt, replace each letter in the plaintext
              with its corresponding symbol or character.
            </li>
            <li>
              Decryption: To decrypt, replace each symbol or character in the
              ciphertext with its corresponding letter.
            </li>
            <li>
              Example: 'A' might be represented by 'G', 'B' by 'E', and so
              forth.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MasonicCipher;
