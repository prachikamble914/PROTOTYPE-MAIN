// import React, { useState } from 'react';

// const PortaCipher = ({ darkMode }) => {
//   const [input, setInput] = useState('');
//   const [key, setKey] = useState('');
//   const [output, setOutput] = useState('');
//   const [showInfo, setShowInfo] = useState(false);

//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//     setOutput(encryptPorta(event.target.value, key));
//   };

//   const handleKeyChange = (event) => {
//     setKey(event.target.value);
//     setOutput(encryptPorta(input, event.target.value));
//   };

//   const handleInfoClick = () => {
//     setShowInfo(!showInfo);
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(output);
//   };

//   const encryptPorta = (text, key) => {
//     let result = '';
//     for (let i = 0; i < text.length; i++) {
//       const charCode = text.charCodeAt(i);
//       const keyCode = key.charCodeAt(i % key.length);
//       const offset = key.charCodeAt(Math.floor(i / key.length)) - 65;
//       const encryptedCharCode = ((charCode - 65 + offset) % 26) + 65;
//       result += String.fromCharCode((encryptedCharCode - keyCode + 26) % 26 + 65);
//     }
//     return result;
//   };

//   return (
//     <div className="cipher-container">
//       <div className="heading-container">
//         <h2>Porta Cipher</h2>
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
//             The Porta Cipher is a polyalphabetic substitution cipher similar to the Vigenère Cipher, where each letter in the plaintext is shifted using a keyword.
//           </p>
//           <p>To encrypt using the Porta Cipher, enter your text and a keyword.</p>
//           <ul>
//             <li>Polyalphabetic Cipher: The cipher uses multiple alphabets to encrypt the plaintext, providing greater security.</li>
//             <li>Encryption: To encrypt, shift each letter in the plaintext by the corresponding letter in the keyword.</li>
//             <li>Decryption: The same keyword is used for both encryption and decryption.</li>
//             <li>Example: 'A' with a key 'KEY' becomes 'K', 'B' becomes 'E', 'C' becomes 'Y', and so forth.</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PortaCipher;
import React, { useState } from 'react';

const PortaCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState('');

  const portaEncrypt = (text, key) => {
    // Remove spaces and convert text to uppercase
    text = text.replace(/\s/g, '').toUpperCase();

    // Generate the Porta Cipher key by repeating the original key to match the text length
    const repeatedKey = key.repeat(Math.ceil(text.length / key.length)).slice(0, text.length);

    // Encrypt the text using the Porta Cipher algorithm
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) - 65;
      const keyCode = repeatedKey.charCodeAt(i) - 65;
      const offset = repeatedKey.charCodeAt(Math.floor(i / key.length)) - 65;
      const encryptedCharCode = ((charCode - 65 + offset) % 26) + 65;
      encryptedText += String.fromCharCode((encryptedCharCode - keyCode + 26) % 26 + 65);
    }

    return encryptedText;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(portaEncrypt(event.target.value, key)); // Update output on input change
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
        <h2>Porta Cipher</h2>
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
              <b>Porta Cipher:</b> A polyalphabetic substitution cipher similar to the Vigenère Cipher.
            </li>
            <li>
              <b>Key:</b> A string used as the encryption key.
            </li>
            <li>
              <b>Encryption:</b> Each letter in the plaintext is shifted using the corresponding letter in the key.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PortaCipher;
