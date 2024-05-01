import React, { useState } from 'react';

const GrayCodeCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(grayCodeCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const grayCodeCipher = (text) => {
    const binaryToGray = (binary) => {
      return parseInt(binary, 2) ^ (parseInt(binary, 2) >> 1);
    };

    const textToBinary = (text) => {
      return text.split('').map((char) => char.charCodeAt(0).toString(2)).join('');
    };

    const binaryToText = (binary) => {
      const chunks = binary.match(/.{1,8}/g);
      return chunks.map((chunk) => String.fromCharCode(parseInt(chunk, 2))).join('');
    };

    const grayToBinary = (gray) => {
      let binary = '';
      binary += gray[0];
      for (let i = 1; i < gray.length; i++) {
        binary += (parseInt(gray[i - 1], 2) ^ parseInt(gray[i], 2)).toString();
      }
      return binary;
    };

    const textToGray = (text) => {
      const binary = textToBinary(text);
      const gray = binaryToGray(binary).toString();
      return gray.padStart(binary.length, '0');
    };

    const grayToText = (gray) => {
      const binary = grayToBinary(gray);
      return binaryToText(binary);
    };

    return textToGray(text);
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Gray Code Cipher</h2>
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
            The Gray Code Cipher is a binary numeral system where each successive value differs in only one bit. It is named after Frank Gray, who patented the binary reflected Gray code in 1953.
          </p>
          <p>To encrypt using the Gray Code Cipher, simply enter your text.</p>
          <ul>
            <li>Binary to Gray Code Conversion: The Gray code for a binary number is obtained by exclusive ORing each bit of the binary number with its adjacent bit (starting from the leftmost bit).</li>
            <li>Text to Binary Conversion: Convert the plaintext into binary representation.</li>
            <li>Binary to Gray Code Conversion: Convert the binary representation into Gray code.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default GrayCodeCipher;
