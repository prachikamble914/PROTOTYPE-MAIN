import React, { useState } from 'react';

const DecimalToBinary = ({ darkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    if (!isNaN(value)) {
      setOutput(decimalToBinary(value));
    } else {
      setOutput('');
    }
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const decimalToBinary = (number) => {
    return (number >>> 0).toString(2);
  };



  return (
    <div className="cipher-container">
      <div className="heading-container">
        <h2>Decimal to Binary Conversion</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      
      <div className="input-output-container">
        <div className="input-container">
          <textarea
            type="number"
            value={input}
            onChange={handleInputChange}
            className="custom-input"
            placeholder="Enter decimal number..."
          />
          <textarea className="custom-output" value={isNaN(output) ? '' : output.toString()} readOnly></textarea>

          <button className="copy-button" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
      {showInfo && (
  <div className="info-container">
    <p>
      Decimal to Binary Conversion is the process of converting a decimal number to its binary representation.
    </p>
    <ul>
      <li>Decimal Number: A number expressed in base-10, using digits from 0 to 9.</li>
      <li>Binary Representation: Binary is a base-2 numeral system, using only 0 and 1, where each digit represents a power of 2.</li>
      <li>Conversion Process: To convert a decimal number to binary, repeatedly divide the number by 2 and note the remainders, then read the remainders in reverse order to obtain the binary representation.</li>
      <li>Example: For decimal number 10, dividing by 2 yields remainders 0, 1, 0, 1 (reading in reverse gives binary 1010).</li>
      <li>Uses: Binary representation is commonly used in digital electronics and computing for storing and processing data.</li>
    </ul>
  </div>
)}

    </div>
  );
};

export default DecimalToBinary;
