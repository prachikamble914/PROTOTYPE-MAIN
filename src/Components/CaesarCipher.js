import React, { useState } from "react";

const CaesarCipher = ({ darkMode }) => {
  const [input, setInput] = useState("");
  const [shift, setShift] = useState(1);
  const [output, setOutput] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(caesarShift(event.target.value, shift));
  };

  const handleShiftChange = (event) => {
    setShift(parseInt(event.target.value, 10));
    setOutput(caesarShift(input, parseInt(event.target.value, 10)));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const caesarShift = (text, amount) => {
    return text
      .toUpperCase()
      .split("")
      .map((char) => {
        if (char.match(/[A-Z]/)) {
          let code = char.charCodeAt(0);
          code = code + amount;
          if (code < 65) {
            code = code + 26;
          } else if (code > 90) {
            code = code - 26;
          }
          return String.fromCharCode(code);
        }
        return char;
      })
      .join("");
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Caesar Cipher</h2>
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
          value={shift}
          onChange={handleShiftChange}
          className="key-input"
          placeholder="Shift amount..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <p>
            The Caesar Cipher is a substitution cipher where each letter in the
            plaintext is shifted a certain number of places down or up the
            alphabet.
          </p>
          <p>
            To encrypt using the Caesar Cipher, enter your text and specify the
            shift amount.
          </p>
          <ul>
            <li>
              Substitution Cipher: Each letter in the plaintext is replaced by a
              letter some fixed number of positions down or up the alphabet.
            </li>
            <li>
              Shifting Letters: Each letter in the plaintext is shifted by a
              certain number of places up or down the alphabet, known as the
              "key" or "shift value".
            </li>
            <li>
              Encryption: To encrypt, specify the shift amount, and shift each
              letter in the plaintext by that amount to get the ciphertext
              letter.
            </li>
            <li>
              Decryption: To decrypt, know the shift amount used for encryption,
              and shift each letter in the ciphertext back by that amount to
              retrieve the original plaintext letter.
            </li>
            <li>
              Example: With a shift of 3, 'A' would be replaced by 'D', 'B'
              would become 'E', and so on. Conversely, 'D' would be replaced by
              'A', 'E' would become 'B', and so forth.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CaesarCipher;
