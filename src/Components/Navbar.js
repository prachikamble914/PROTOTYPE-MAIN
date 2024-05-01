import React from 'react';

const Navbar = ({ darkMode, setDarkMode, handleCipherChange }) => {
  return (
    <nav className="navbar">
      <div className="nav-menu">
        <a href="#caesar" onClick={() => handleCipherChange('caesar')}>Caesar Cipher</a>
        <a href="#atbash" onClick={() => handleCipherChange('atbash')}>Atbash Cipher</a>
        <a href="#decimal" onClick={() => handleCipherChange('decimal')}>Decimal to Binary</a>
        <a href="#ROT5" onClick={() => handleCipherChange('ROT5')}>ROT5 Cipher</a>
        <a href="#ROT47" onClick={() => handleCipherChange('ROT47')}>ROT47 Cipher</a>
        <a href="#keyword" onClick={() => handleCipherChange('keyword')}>Keyword Cipher</a>
        <a href="#polybius" onClick={() => handleCipherChange('polybius')}>Polybius Square Cipher</a>
        <a href="#morse" onClick={() => handleCipherChange('morse')}>Morse Code Cipher</a>
        <a href="#null" onClick={() => handleCipherChange('null')}>Null Cipher</a>
        <a href="#railfence" onClick={() => handleCipherChange('railfence')}>Rail Fence Cipher</a>
        <a href="#adfgvx" onClick={() => handleCipherChange('adfgvx')}>ADFGVX Cipher </a>
        <a href="#checkerboard" onClick={() => handleCipherChange('checkerboard')}>Checkerboard Cipher</a>
        <a href="#straddlingcheckerboard" onClick={() => handleCipherChange('straddlingcheckerboard')}>Straddling Checkerboard Cipher</a>
        <a href="#quagmire" onClick={() => handleCipherChange('quagmire')}>Quagmire Cipher</a>
        <a href="#route" onClick={() => handleCipherChange('route')}>Route Cipher</a>
        <a href="#amsco" onClick={() => handleCipherChange('amsco')}>AMSCO Cipher</a>
        <a href="#dancingmen" onClick={() => handleCipherChange('dancingmen')}> Dancing Men Cipher</a>
        <a href="#rsa" onClick={() => handleCipherChange('rsa')}>RSA Cipher</a>
        <a href="#onetimepad" onClick={() => handleCipherChange('onetimepad')}>One Time Pad Cipher</a>
        <a href="#fractionatedmorse" onClick={() => handleCipherChange('fractionatedmorse')}>Fractionated Morse Cipher</a>
        <a href="#nicodemus" onClick={() => handleCipherChange('nicodemus')}>Nicodemus Cipher</a>
        <a href="#bifid" onClick={() => handleCipherChange('bifid')}>Bifid Cipher</a>
        <a href="#trifid" onClick={() => handleCipherChange('trifid')}>Trifid Cipher</a>
        <a href="#runningKey" onClick={() => handleCipherChange('runningKey')}>Running Key Cipher</a>
        <a href="#porta" onClick={() => handleCipherChange('porta')}>Porta Cipher</a>
        <a href="#beaufort" onClick={() => handleCipherChange('beaufort')}>Beaufort Cipher</a>
        <a href="#yardley" onClick={() => handleCipherChange('yardley')}>Yardley Cipher</a>
        <a href="#xor" onClick={() => handleCipherChange('xor')}>XOR Cipher</a>
        <a href="#serpent" onClick={() => handleCipherChange('serpent')}> Serpent Cipher</a>
        <a href="#trithemius" onClick={() => handleCipherChange('trithemius')}>Trithemius Cipher</a>
        <a href="#union" onClick={() => handleCipherChange('union')}> Union Cipher</a>
        <a href="#visionaire" onClick={() => handleCipherChange('visionaire')}> Visionaire Cipher</a>
        <a href="#nihilistsubstituion" onClick={() => handleCipherChange('nihilistsubstitution')}> NihilistSubstitution Cipher</a>
        <a href="#omnibook" onClick={() => handleCipherChange('omnibook')}> Omnibook Cipher</a>
        <a href="#permutation" onClick={() => handleCipherChange('permutation')}>Permutation Cipher</a>
        <a href="#quadratic" onClick={() => handleCipherChange('quadratic')}> Quadratic Cipher</a>
        <a href="#rosicrucian" onClick={() => handleCipherChange('rosicrucian')}> Rosicrucian Cipher</a>
        <a href="#Larrabee" onClick={() => handleCipherChange('larrabee')}> Larrabee Cipher</a>
        <a href="#sutra" onClick={() => handleCipherChange('sutra')}> Sutra Cipher</a>
        <a href="#juliuscaesar" onClick={() => handleCipherChange('juliuscaesar')}> Julius Caesar Cipher</a>
        <a href="#imperial" onClick={() => handleCipherChange('imperial')}> Imperial Cipher</a>
        <a href="#headlines" onClick={() => handleCipherChange('headlines')}> Headlines Cipher</a>
        <a href="#giovanbattistabellaso" onClick={() => handleCipherChange('giovanbattistabellaso')}> GiovanBattistaBellaso Cipher</a>
        <a href="#fleissner" onClick={() => handleCipherChange('fleissner')}> Fleissner Cipher</a>
        <a href="#wheatstone" onClick={() => handleCipherChange('wheatstone')}> WheatStone Cipher</a>
        <a href="#elianscript" onClick={() => handleCipherChange('elianscript')}> ElianScript Cipher</a>
        <a href="#daggers" onClick={() => handleCipherChange('daggers')}> Daggers Cipher</a>
        <a href="#chao" onClick={() => handleCipherChange('chao')}> Chao Cipher</a>
        <a href="#bellaso" onClick={() => handleCipherChange('bellaso')}> Bellaso Cipher</a>
        <a href="#alberti" onClick={() => handleCipherChange('alberti')}> Alberti  Cipher</a>
        <a href="#vigenere" onClick={() => handleCipherChange('vigenere')}> Vigenere Cipher</a>
        <a href="#affine" onClick={() => handleCipherChange('affine')}> Affine Cipher</a>
        <a href="#A1Z26" onClick={() => handleCipherChange('A1Z26')}>  A1Z26 Cipher</a>
        <a href="#A0Z25" onClick={() => handleCipherChange('A0Z25')}> A0Z25 Cipher</a>
        <a href="#pigpen" onClick={() => handleCipherChange('pigpen')}> PigPen Cipher</a>
        <a href="#gronsfeld" onClick={() => handleCipherChange('gronsfeld')}> Gronsfeld Cipher</a>
        <a href="#book" onClick={() => handleCipherChange('book')}> Book Cipher</a>
        <a href="#scytale" onClick={() => handleCipherChange('scytale')}> Scytale Cipher</a>
        <a href="#enigmamachine" onClick={() => handleCipherChange('enigmamachine')}> EnigmaMachine Cipher</a>
        <a href="#foursquare" onClick={() => handleCipherChange('foursquare')}> FourSquare Cipher</a>
        <a href="#base64encoding" onClick={() => handleCipherChange('base64encoding')}> Base64Encoding Cipher</a>
        <a href="#graycode" onClick={() => handleCipherChange('graycode')}>  GrayCode Cipher</a>
        <a href="#binarycode" onClick={() => handleCipherChange('binarycode')}>  BinaryCode Cipher</a>
        <a href="#hexcode" onClick={() => handleCipherChange('hexcode')}>  HexCode Cipher</a>
        <a href="#octalcode" onClick={() => handleCipherChange('octalcode')}> OctalCode Cipher</a>
        <a href="#hill" onClick={() => handleCipherChange('hill')}> Hill Cipher</a>
        <a href="#doubletransposition" onClick={() => handleCipherChange('doubletransposition')}> DoubleTransposition Cipher</a>
        <a href="#matrix" onClick={() => handleCipherChange('matrix')}> Matrix Cipher</a>
        <a href="#ROT13" onClick={() => handleCipherChange('ROT13')}> ROT13 Cipher</a>
        <a href="#simplesubstitution" onClick={() => handleCipherChange('simplesubstitution')}> Simple Substitution Cipher</a>
        <a href="#columnartransposition" onClick={() => handleCipherChange('columnartransposition')}> Columnar Transposition Cipher</a>
        <a href="#masonic" onClick={() => handleCipherChange('masonic')}>Masonic  Cipher</a>
        <a href="#baconian" onClick={() => handleCipherChange('baconian')}> Baconian Cipher</a>
        <a href="#autokey" onClick={() => handleCipherChange('autokey')}> Autokey Cipher</a>
        <a href="#homophonicsubstitution" onClick={() => handleCipherChange('homophonicsubstitution')}>Homophonic Substitution  Cipher</a>
        <a href="#substitutiontables" onClick={() => handleCipherChange('substitutiontables')}> Substitution Tables Cipher</a>
        <a href="#asciicode" onClick={() => handleCipherChange('asciicode')}> ASCIICode Cipher</a>
        <a href="#ROT18" onClick={() => handleCipherChange('ROT18')}>ROT18  Cipher</a>
        <a href="#bcdencoding" onClick={() => handleCipherChange('bcdencoding')}> BCDEncoding Cipher</a>
        <a href="#nihilist" onClick={() => handleCipherChange('nihilist')}> Nihilist Cipher</a>
        <a href="#graycode" onClick={() => handleCipherChange('graycode')}>  GrayCodeCipher</a>
        {/* <a href="#" onClick={() => handleCipherChange('')}>  Cipher</a>
        <a href="#" onClick={() => handleCipherChange('')}>  Cipher</a>  */}







      </div>
      <div className="theme-toggler">
        <span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀</span>
        <span className="toggle">
          <input
            checked={darkMode}
            onChange={() => setDarkMode(prevMode => !prevMode)}
            type="checkbox"
            id="theme-checkbox"
          />
          <label htmlFor="theme-checkbox" />
        </span>
        <span style={{ color: darkMode ? 'slateblue' : 'grey' }}>☾</span>
      </div>
      
    </nav>
     
  );
};

export default Navbar;





