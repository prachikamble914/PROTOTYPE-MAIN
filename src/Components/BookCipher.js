import React, { useState } from 'react';

const BookCipher = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(bookCipher(event.target.value));
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const bookCipher = (text) => {
    // Replace this example logic with your own book cipher algorithm
    // For demonstration purposes, let's use a simple algorithm
    const key = {
      'A': 'apple',
      'B': 'banana',
      'C': 'cherry',
      // Add more key-value pairs as needed
    };

    const sanitizedText = text.toUpperCase().replace(/[^A-Z]/g, ''); // Keep only uppercase letters
    let encryptedText = '';

    for (let i = 0; i < sanitizedText.length; i++) {
      const char = sanitizedText[i];
      encryptedText += key[char] ? key[char] + ' ' : char + ' '; // Use key value if available, otherwise keep the character
    }

    return encryptedText.trim(); // Trim trailing space
  };

  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Book Cipher</h2>
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
            The Book Cipher is a cryptographic technique that uses a book or other text as a key to encode and decode messages.
          </p>
          <p>To encrypt using the Book Cipher, enter your plaintext and use a book as the key.</p>
          <ul>
            <li>Key: The key for the Book Cipher is a book or text agreed upon by both the sender and receiver.</li>
            <li>Encoding: Each character in the plaintext is encoded using the agreed-upon book or text.</li>
            <li>Decoding: To decode, reverse the process by using the key to retrieve the original plaintext.</li>
            <li>Security: The security of the Book Cipher relies on the secrecy of the key text.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookCipher;
