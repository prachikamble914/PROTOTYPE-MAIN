import React, { useState } from 'react';

const HomophonicSubstitutionCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(homophonicSubstitutionCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const homophonicSubstitutionCipher = (text) => {
    const homophones = {
      'A': ['@', '4'],
      'B': ['8', '6'],
      'C': ['(', '{'],
      'D': ['[)', '|)'],
      'E': ['3', '&'],
      'F': ['ph', '|='],
      'G': ['6', '9'],
      'H': ['#', '|-|'],
      'I': ['1', '!'],
      'J': ['_|', '_/'],
      'K': ['|<', '|{'],
      'L': ['1', '|_'],
      'M': ['/\/\\', '|v|'],
      'N': ['|\\|', '/\\/'],
      'O': ['0', '()'],
      'P': ['|>', '|D'],
      'Q': ['(,)', '0,'],
      'R': ['|2', '|?'],
      'S': ['5', '$'],
      'T': ['7', '+'],
      'U': ['|_|', '(_)'],
      'V': ['\/', '|/'],
      'W': ['\/\/', '\^/'],
      'X': ['><', '}{'],
      'Y': ['j', '`/'],
      'Z': ['2', '>_']
    };

    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        const homophoneList = homophones[char] || [char];
        const randomIndex = Math.floor(Math.random() * homophoneList.length);
        return homophoneList[randomIndex];
      })
      .join(' ');
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Homophonic Substitution Cipher</h2>
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
            The Homophonic Substitution Cipher is a substitution cipher where each letter in the plaintext can be replaced by multiple different characters.
          </p>
          <p>To encrypt using the Homophonic Substitution Cipher, simply enter your text.</p>
          <ul>
            <li>Substitution Cipher: Each letter in the plaintext can be replaced by multiple characters.</li>
            <li>Homophones: Each letter has multiple alternative characters that can be used for encryption.</li>
            <li>Encryption: To encrypt, replace each letter in the plaintext with one of its homophones.</li>
            <li>Decryption: Decryption involves determining the original letters from the homophones used.</li>
            <li>Example: 'A' can be replaced by '@', '4', or other characters.</li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default HomophonicSubstitutionCipher;
