// MorseCodeCipher.js
import React, { useState } from "react";

const MorseCodeCipher = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(morseCodeEncrypt(event.target.value));
  };

  const morseCodeEncrypt = (text) => {
    const morseCodeMap = {
      A: ".-",
      B: "-...",
      C: "-.-.",
      D: "-..",
      E: ".",
      F: "..-.",
      G: "--.",
      H: "....",
      I: "..",
      J: ".---",
      K: "-.-",
      L: ".-..",
      M: "--",
      N: "-.",
      O: "---",
      P: ".--.",
      Q: "--.-",
      R: ".-.",
      S: "...",
      T: "-",
      U: "..-",
      V: "...-",
      W: ".--",
      X: "-..-",
      Y: "-.--",
      Z: "--..",
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "'": ".----.",
      "!": "-.-.--",
      "/": "-..-.",
      "(": "-.--.",
      ")": "-.--.-",
      "&": ".-...",
      ":": "---...",
      ";": "-.-.-.",
      "=": "-...-",
      "+": ".-.-.",
      "-": "-....-",
      _: "..--.-",
      '"': ".-..-.",
      $: "...-..-",
      "@": ".--.-.",
    };

    return text
      .toUpperCase()
      .split("")
      .map((char) => {
        if (char === " ") return "/";
        else if (morseCodeMap[char]) return morseCodeMap[char];
        return char;
      })
      .join(" ");
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
        <h2>Morse Code Cipher</h2>
        <button className="info-button" onClick={handleInfoClick}>
          ℹ
        </button>
      </div>
      <div className="input-output-container">
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
      </div>
      {showInfo && (
        <div className="info-container">
          <ul>
            <li>
              Substitution Cipher: Morse Code Cipher is a type of substitution
              cipher.
            </li>
            <li>
              Symbol Representation: Each letter in the plaintext is replaced by
              a series of dots and dashes.
            </li>
            <li>
              International Morse Code: The cipher follows the International
              Morse Code standard.
            </li>
            <li>
              Space Representation: Space between words is represented by '/'.{" "}
            </li>
            <li>
              Example: For example, 'A' is represented as '.-', 'B' as '-...',
              and '5' as '.....'.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MorseCodeCipher;
