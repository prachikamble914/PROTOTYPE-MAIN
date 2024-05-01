import React, { useState } from 'react';

const NicodemusCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(encryptNicodemus(event.target.value, key));
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
    setOutput(encryptNicodemus(input, event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const encryptNicodemus = (text, key) => {
    // Define the Nicodemus Cipher mapping
    const mapping = {
      'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V',
      'F': 'U', 'G': 'T', 'H': 'S', 'I': 'R', 'J': 'Q',
      'K': 'P', 'L': 'O', 'M': 'N', 'N': 'M', 'O': 'L',
      'P': 'K', 'Q': 'J', 'R': 'I', 'S': 'H', 'T': 'G',
      'U': 'F', 'V': 'E', 'W': 'D', 'X': 'C', 'Y': 'B',
      'Z': 'A'
    };

    // Remove spaces and convert text to uppercase
    text = text.replace(/\s/g, '').toUpperCase();

    // Encrypt text using Nicodemus mapping
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      encryptedText += mapping[text[i]] || text[i];
    }

    return encryptedText;
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Nicodemus Cipher</h2>
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
          {/* <textarea
            type="text"
            value={key}
            onChange={handleKeyChange}
            className="custom-key"
            placeholder="Enter key..."
            disabled
          /> */}
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
        <div className="input-container">
        <input
          type="number"
          
          className="key-input"
          placeholder="Shift amount..."
        />
      </div>
      </div>
      {showInfo && (
        <div className="info-container">
          <p>
            The Nicodemus Cipher is a simple substitution cipher where each letter in the plaintext is replaced by its counterpart in the reverse alphabet.
          </p>
          <p>To encrypt using the Nicodemus Cipher, enter your text.</p>
          <ul>
            <li>Substitution Cipher: Each letter in the plaintext is replaced by its reverse counterpart in the alphabet.</li>
            <li>Example: 'A' becomes 'Z', 'B' becomes 'Y', 'C' becomes 'X', and so forth.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NicodemusCipher;
// import React, { useState } from 'react';

// const NicodemusCipher = () => {
//   const [input, setInput] = useState('');
//   const [output, setOutput] = useState('');
//   const [showInfo, setShowInfo] = useState(false);
//   const [key, setKey] = useState('');

//   const nicodemusEncrypt = (text, key) => {
//     // Remove spaces and convert text to uppercase
//     text = text.replace(/\s/g, '').toUpperCase();

//     // Generate the Nicodemus Cipher key by repeating the original key to match the text length
//     const repeatedKey = key.repeat(Math.ceil(text.length / key.length)).slice(0, text.length);

//     // Encrypt the text using the Nicodemus Cipher algorithm
//     let encryptedText = '';
//     for (let i = 0; i < text.length; i++) {
//       const charCode = text.charCodeAt(i) - 65;
//       const keyCode = repeatedKey.charCodeAt(i) - 65;
//       const encryptedCharCode = ((charCode + keyCode) % 26) + 65;
//       encryptedText += String.fromCharCode(encryptedCharCode);
//     }

//     return encryptedText;
//   };

//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//     setOutput(nicodemusEncrypt(event.target.value, key)); // Update output on input change
//   };

//   const handleInfoClick = () => {
//     setShowInfo(!showInfo);
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(output);
//   };

//   return (
//     <div className="cipher-container">
//       <div className="heading-container">
//         <h2>Nicodemus Cipher</h2>
//         <button className="info-button" onClick={handleInfoClick}>
//           ℹ
//         </button>
//       </div>
//       <div className="input-container">
//         <textarea
//           type="text"
//           value={input}
//           className="custom-input"
//           onChange={handleInputChange}
//           placeholder="Enter text..."
//         />
//         <textarea
//           type="text"
//           value={output}
//           className="custom-output"
//           readOnly
//           placeholder="Output..."
//         />
//         <button className="copy-button" onClick={handleCopy}>
//           Copy
//         </button>
//       </div>
//       <div className="input-container">
//         <input
//           type="text"
//           value={key}
//           onChange={(event) => setKey(event.target.value.toUpperCase())}
//           className="custom-keyword"
//           placeholder="Enter key..."
//         />
//       </div>
//       {showInfo && (
//         <div className="info-container">
//           <ul>
//             <li>
//               <b>Nicodemus Cipher:</b> A polyalphabetic substitution cipher where the key is as long as the plaintext.
//             </li>
//             <li>
//               <b>Key:</b> A string used as the encryption key.
//             </li>
//             <li>
//               <b>Encryption:</b> Each letter in the plaintext is shifted using the corresponding letter in the key.
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NicodemusCipher;
