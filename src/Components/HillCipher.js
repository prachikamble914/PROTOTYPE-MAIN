import React, { useState } from 'react';

const HillCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [keyMatrix, setKeyMatrix] = useState([[1, 2], [3, 4]]);
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(hillCipher(event.target.value, keyMatrix));
  };

  const handleKeyMatrixChange = (event, rowIndex, colIndex) => {
    const newKeyMatrix = keyMatrix.map((row, i) =>
      row.map((val, j) => (i === rowIndex && j === colIndex ? parseInt(event.target.value) : val))
    );
    setKeyMatrix(newKeyMatrix);
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const hillCipher = (text, keyMatrix) => {
    // Check if key matrix is valid (determinant != 0)
    const determinant = keyMatrix[0][0] * keyMatrix[1][1] - keyMatrix[0][1] * keyMatrix[1][0];
    if (determinant === 0) return 'Invalid key matrix: Determinant is 0';

    // Calculate modular inverse of determinant
    const modInverse = (a, m) => {
      a = ((a % m) + m) % m;
      for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) return x;
      }
      return 1;
    };
    const mod = 26;
    const determinantInverse = modInverse(determinant, mod);

    // Calculate inverse of key matrix
    const inverseKeyMatrix = [
      [keyMatrix[1][1], -keyMatrix[0][1]],
      [-keyMatrix[1][0], keyMatrix[0][0]]
    ].map((row) => row.map((val) => (val * determinantInverse) % mod));

    // Encrypt/Decrypt
    const mod26 = (x) => ((x % 26) + 26) % 26; // Ensure result is within [0, 25]
    return text
      .toUpperCase()
      .replace(/[^A-Z]/g, '')
      .replace(/.{2}/g, (pair) => {
        const [a, b] = pair.split('').map((char) => char.charCodeAt(0) - 'A'.charCodeAt(0));
        const encryptedA = mod26((a * inverseKeyMatrix[0][0] + b * inverseKeyMatrix[0][1]) % 26);
        const encryptedB = mod26((a * inverseKeyMatrix[1][0] + b * inverseKeyMatrix[1][1]) % 26);
        return String.fromCharCode(encryptedA + 'A'.charCodeAt(0), encryptedB + 'A'.charCodeAt(0));
      });
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Hill Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-output-container">
        <div className="input-container">
          <input
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
          <div className="key-matrix">
            <h3>Key Matrix</h3>
            <input
              type="number"
              value={keyMatrix[0][0]}
              onChange={(e) => handleKeyMatrixChange(e, 0, 0)}
            />
            <input
              type="number"
              value={keyMatrix[0][1]}
              onChange={(e) => handleKeyMatrixChange(e, 0, 1)}
            />
            <input
              type="number"
              value={keyMatrix[1][0]}
              onChange={(e) => handleKeyMatrixChange(e, 1, 0)}
            />
            <input
              type="number"
              value={keyMatrix[1][1]}
              onChange={(e) => handleKeyMatrixChange(e, 1, 1)}
            />
          </div>
          <button className="copy-button" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
      {showInfo && (
        <div className="info-container">
          <p>
            The Hill Cipher is a polygraphic substitution cipher based on linear algebra, invented by Lester S. Hill in 1929. It uses a key matrix to encrypt and decrypt text.
          </p>
          <p>To encrypt using the Hill Cipher, enter your text along with a 2x2 key matrix.</p>
          <ul>
            <li>Polygraphic Substitution Cipher: Groups of letters are encrypted as opposed to individual letters in monoalphabetic ciphers.</li>
            <li>Key Matrix: The key matrix must be a 2x2 matrix with a non-zero determinant. The determinant of the key matrix determines the invertibility of the matrix.</li>
            <li>Encryption: Each pair of letters is multiplied by the key matrix modulo 26.</li>
            <li>Decryption: The ciphertext is multiplied by the modular inverse of the key matrix modulo 26 to obtain the plaintext.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HillCipher;
