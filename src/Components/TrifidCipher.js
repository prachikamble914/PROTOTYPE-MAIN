// import React, { useState } from 'react';

// const TrifidCipher = ({ darkMode }) => {
//   const [input, setInput] = useState('');
//   const [key, setKey] = useState('');
//   const [output, setOutput] = useState('');
//   const [showInfo, setShowInfo] = useState(false);

//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//     setOutput(encryptTrifid(event.target.value, key));
//   };

//   const handleKeyChange = (event) => {
//     setKey(event.target.value);
//     setOutput(encryptTrifid(input, event.target.value));
//   };

//   const handleInfoClick = () => {
//     setShowInfo(!showInfo);
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(output);
//   };

//   const encryptTrifid = (text, key) => {
//     const cube = [
//       [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']],
//       [['J', 'K', 'L'], ['M', 'N', 'O'], ['P', 'Q', 'R']],
//       [['S', 'T', 'U'], ['V', 'W', 'X'], ['Y', 'Z', '.']]
//     ];

//     text = text.replace(/\s/g, '').toUpperCase();

//     const letterPositions = {};
//     for (let i = 0; i < cube.length; i++) {
//       for (let j = 0; j < cube[i].length; j++) {
//         for (let k = 0; k < cube[i][j].length; k++) {
//           letterPositions[cube[i][j][k]] = `${i}${j}${k}`;
//         }
//       }
//     }

//     let encryptedText = '';

//     for (let i = 0; i < text.length; i++) {
//       const letter = text[i];
//       const position = letterPositions[letter];
//       const row = parseInt(position[0]);
//       const column = parseInt(position[1]);
//       const depth = parseInt(position[2]);
//       encryptedText += `${row + 1}${column + 1}${depth + 1}`;
//     }

//     return encryptedText;
//   };

//   return (
//     <div className="cipher-container">
//       <div className="heading-container">
//         <h2>Trifid Cipher</h2>
//         <button className="info-button" onClick={handleInfoClick}>
//           ℹ
//         </button>
//       </div>
      
//       <div className="input-output-container">
//         <div className="input-container">
//           <textarea
//             type="text"
//             value={input}
//             onChange={handleInputChange}
//             className="custom-input"
//             placeholder="Enter text..."
//           />
//           <textarea
//             type="text"
//             value={key}
//             onChange={handleKeyChange}
//             className="custom-key"
//             placeholder="Enter key..."
//           />
//           <textarea
//             type="text"
//             value={output}
//             readOnly
//             className="custom-output"
//             placeholder="Output..."
//           />
//           <button className="copy-button" onClick={handleCopy}>
//             Copy
//           </button>
//         </div>
//       </div>
//       {showInfo && (
//         <div className="info-container">
//           <p>
//             The Trifid Cipher is a polygraphic substitution cipher, where each letter in the plaintext is encrypted to a series of three numbers, and vice versa.
//           </p>
//           <p>To encrypt using the Trifid Cipher, enter your text and a key.</p>
//           <ul>
//             <li>Polygraphic Cipher: The cipher operates on groups of three letters at a time.</li>
//             <li>Encryption: Each letter is mapped to a series of three numbers (row, column, and depth) according to a 3x3x3 cube.</li>
//             <li>Decryption: The same key is used for both encryption and decryption.</li>
//             <li>Example: 'A' with a key 'KEY' might become '121 231 111'.</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrifidCipher;
import React, { useState } from 'react';

const TrifidCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState('');

  const trifidEncrypt = (text, key) => {
    // Define the Trifid Cipher grid
    const grid = [
      ['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I'],
      ['J', 'K', 'L'], ['M', 'N', 'O'], ['P', 'Q', 'R'],
      ['S', 'T', 'U'], ['V', 'W', 'X'], ['Y', 'Z', '.']
    ];

    // Remove spaces and convert text to uppercase
    text = text.replace(/\s/g, '').toUpperCase();

    // Create a map to store the positions of each letter in the grid
    const letterPositions = {};
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        letterPositions[grid[i][j]] = [i, j];
      }
    }

    // Initialize arrays to store row and column coordinates of each letter
    const rowCoords = [];
    const colCoords = [];
    const depthCoords = [];

    // Iterate through the text to get the row, column, and depth coordinates of each letter
    for (let i = 0; i < text.length; i++) {
      const [row, col] = letterPositions[text[i]];
      rowCoords.push(row);
      colCoords.push(col);
      depthCoords.push(Math.floor(i / 3));
    }

    // Generate encrypted text by combining row, column, and depth coordinates
    let encryptedText = '';
    for (let i = 0; i < rowCoords.length; i++) {
      encryptedText += grid[rowCoords[i]][colCoords[i]][depthCoords[i]];
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(trifidEncrypt(event.target.value, key)); // Update output on input change
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
        <h2>Trifid Cipher</h2>
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
          value={key}
          onChange={(event) => setKey(event.target.value.toUpperCase())}
          className="custom-keyword"
          placeholder="Enter key..."
        />
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>
              <b>Trifid Cipher:</b> A fractionating transposition cipher similar to the Bifid Cipher.
            </li>
            <li>
              <b>Key:</b> This cipher doesn't require a key.
            </li>
            <li>
              <b>Encryption:</b> Each letter in the plaintext is converted to its coordinates in a 3x3x3 grid and then combined to generate the ciphertext.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrifidCipher;

