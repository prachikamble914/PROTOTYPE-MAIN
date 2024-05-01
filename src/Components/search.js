import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Search from 'search';
const search = () => {
  // Define ciphers array
  const ciphers = ["Caesar", "Atbash", "ROT13"];

  // Handlers for dark mode and cipher change
  const handleDarkModeChange = () => {
    // Implement dark mode change logic
  };

  const handleCipherChange = (cipher) => {
    // Implement cipher change logic
  };

  return (
    <div className="App">
      <Navbar
        darkMode={true} // Pass dark mode state and handler
        setDarkMode={handleDarkModeChange}
        handleCipherChange={handleCipherChange} // Pass cipher change handler
        ciphers={ciphers} // Pass ciphers array
      />
      {/* Other components and content of your application */}
    </div>
  );
};

export default search;

