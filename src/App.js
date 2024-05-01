// App.js
import React, { useState } from 'react';
import CaesarCipher from './Components/CaesarCipher';
import AtbashCipher from './Components/AtbashCipher';
import DecimalToBinary from './Components/DecimalToBinary';
import Navbar from './Components/Navbar';
import ROT5Cipher from './Components/ROT5Cipher';
import ROT47Cipher from './Components/ROT47Cipher';
import KeywordCipher from './Components/KeywordCipher';
import PolybiusSquareCipher from './Components/PolybiusCipher';
import MorseCodeCipher from './Components/MorseCode';
import NullCipher from './Components/NullCipher';
import RailFenceCipher from './Components/RailFenceCipher';
import ADFGVXCipher from './Components/ADFGVXCipher';
import CheckerboardCipher from './Components/CheckerboardCipher';
import NihilistSubstitutionCipher from './Components/NihilistSubstitutionCipher';
import StraddlingCheckerboardCipher from './Components/StraddlingCheckerboardCipher';
import QuagmireCipher from './Components/QuagmireCipher';
import RouteCipher from './Components/RouteCipher';
import AMSCOCipher from './Components/AMSCOCipher';
import DancingMenCipher from './Components/DancingMenCipher';
import RSACipher from './Components/RSACipher';
import OneTimePadCipher from './Components/OneTimePadCipher';
import FractionatedMorseCipher from './Components/FractionatedMorseCipher';
import NicodemusCipher from './Components/NicodemusCipher';
import BifidCipher from './Components/BifidCipher';
import TrifidCipher from './Components/TrifidCipher';
import RunningKeyCipher from './Components/RunningKeyCipher';
import PortaCipher from './Components/PortaCipher';
import BeaufortCipher from './Components/BeaufortCipher';
import YardleyCipher from './Components/YardleyCipher';
import XORCipher from './Components/XORCipher';
import SerpentCipher from './Components/SerpentCipher';
import TrithemiusCipher from './Components/TrithemiusCipher';
import UnionCipher from './Components/UnionCipher';
import VisionaireCipher from './Components/VisionaireCipher';
import OmnibookCipher from './Components/OmnibookCipher';
import PermutationCipher from './Components/PermutationCipher';
import QuadraticCipher from './Components/QuadraticCipher';
import RosicrucianCipher from './Components/RosicrucianCipher';
import LarrabeeCipher from './Components/LarrabeeCipher';
import SutraCipher from './Components/SutraCipher';
import JuliusCaesarCipher from './Components/JuliusCaesarCipher';
import ImperialCipher from './Components/ImperialCipher';
import HeadlinesCipher from './Components/HeadlinesCipher';
import GiovanBattistaBellasoCipher from './Components/GiovanBattistaBellasoCipher';
import FleissnerCipher from './Components/FleissnerCipher';
import WheatstoneCipher from './Components/WheatstoneCipher';
import ElianScriptCipher from './Components/ElianScriptCipher';
import DaggersCipher from './Components/DaggersCipher';
import ChaoCipher from './Components/ChaoCipher';
import BellasoCipher from './Components/BellasoCipher';
import AlbertiCipher from './Components/AlbertiCipher';
import VigenereCipher from './Components/VigenereCipher';
import AffineCipher from './Components/AffineCipher';
import A1Z26Cipher from './Components/A1Z26Cipher';
import A0Z25Cipher from './Components/A0Z25Cipher';
import PigPenCipher from './Components/PigPenCipher';
import GronsfeldCipher from './Components/GronsfeldCipher';
import BookCipher from './Components/BookCipher';
import ScytaleCipher from './Components/ScytaleCipher';
import FourSquareCipher from './Components/FourSquareCipher';
import TwoSquareCipher from './Components/TwoSquareCipher';
import Base64EncodingCipher from './Components/Base64EncodingCipher';
import BinaryCodeCipher from './Components/BinaryCodeCipher';
import HexCodeCipher from './Components/HexCodeCipher';
import OctalCodeCipher from './Components/OctalCodeCipher';
import HillCipher from './Components/HillCipher';
import MatrixCipher from './Components/MatrixCipher';
import DoubleTranspositionCipher from './Components/DoubleTranspositionCipher';
import EnigmaMachineCipher from './Components/EnigmaMachineCipher';
import ROT13Cipher from './Components/ROT13Cipher';
import SimpleSubstitutionCipher from './Components/SimpleSubstitutionCipher';
import ColumnarTranspositionCipher from './Components/ColumnarTranspositionCipher';
import MasonicCipher from './Components/MasonicCipher';
import AutokeyCipher from './Components/AutokeyCipher';
import HomophonicSubstitutionCipher from './Components/HomophonicSubstitutionCipher';
import SubstitutionTablesCipher from './Components/SubstitutionTablesCipher';
import BCDEncodingCipher from './Components/BCDEncodingCipher';
import ASCIICodeCipher from './Components/ASCIICodeCipher';
import ROT18Cipher from './Components/ROT18Cipher';
import NihilistCipher from './Components/NihilistCipher';
import BaconianCipher from './Components/BaconianCipher';
import GrayCodeCipher from './Components/GrayCodeCipher';
// import 94Cipher from'./Components/94Cipher';
import './App.css';


const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeCipher, setActiveCipher] = useState('caesar');

  const handleCipherChange = (cipher) => {
    setActiveCipher(cipher);
  };

  return (
    < div className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} handleCipherChange={handleCipherChange} />
      {activeCipher === 'caesar' && <CaesarCipher />}
      {activeCipher === 'atbash' && <AtbashCipher />}
      {activeCipher === 'decimal' && <DecimalToBinary />}
      {activeCipher === 'ROT5' && <ROT5Cipher />}
      {activeCipher === 'ROT47' && <ROT47Cipher />}
      {activeCipher === 'keyword' && <KeywordCipher />}
      {activeCipher === 'polybius' && <PolybiusSquareCipher />}
      {activeCipher === 'morse' && <MorseCodeCipher />}    
      {activeCipher === 'null' && <NullCipher />} 
      {activeCipher === 'railfence' && <RailFenceCipher />}
      {activeCipher === 'adfgvx' && <ADFGVXCipher />}
      {activeCipher === 'checkerboard' && <CheckerboardCipher />}
      {activeCipher === 'nihilistsubstitution' && <NihilistSubstitutionCipher />}
      {activeCipher === 'straddlingcheckerboard' && <StraddlingCheckerboardCipher />}
      {activeCipher === 'quagmire' && <QuagmireCipher />}
      {activeCipher === 'route' && <RouteCipher />}
      {activeCipher === 'amsco' && <AMSCOCipher />}
      {activeCipher === 'dancingmen' && <DancingMenCipher />}
      {activeCipher === 'rsa' && <RSACipher />}
      {activeCipher === 'onetimepad' && <OneTimePadCipher />}
      {activeCipher === 'fractionatedmorse' && <FractionatedMorseCipher />}
      {activeCipher === 'nicodemus' && <NicodemusCipher />}
      {activeCipher === 'bifid' && <BifidCipher />}
      {activeCipher === 'trifid' && <TrifidCipher />}
      {activeCipher === 'runningKey' && <RunningKeyCipher />}
      {activeCipher === 'porta' && <PortaCipher />}
      {activeCipher === 'beaufort' && <BeaufortCipher />}
      {activeCipher === 'yardley' && <YardleyCipher />}
      {activeCipher === 'xor' && <XORCipher />}
      {activeCipher === 'serpent' && < SerpentCipher />}
      {activeCipher === 'trithemius' && < TrithemiusCipher />}
      {activeCipher === 'union' && < UnionCipher />}
      {activeCipher === 'visionaire' && < VisionaireCipher />}
      {activeCipher === 'omnibook' && < OmnibookCipher />}
      {activeCipher === 'permutation' && <PermutationCipher />}
      {activeCipher === 'quadratic' && <QuadraticCipher />}
      {activeCipher === 'rosicrucian' && <RosicrucianCipher />}
      {activeCipher === 'larrabee' && <LarrabeeCipher />}
      {activeCipher === 'sutra' && <SutraCipher />}
      {activeCipher === 'juliuscaesar' && <JuliusCaesarCipher />}
      {activeCipher === 'imperial' && <ImperialCipher />}
      {activeCipher === 'headlines' && <HeadlinesCipher />}
      {activeCipher === 'giovanbattistabellaso' && <GiovanBattistaBellasoCipher />}
      {activeCipher === 'fleissner' && <FleissnerCipher />}
      {activeCipher === 'wheatstone' && <WheatstoneCipher />}
      {activeCipher === 'elianscript' && <ElianScriptCipher />}
      {activeCipher === 'daggers' && <DaggersCipher />}
      {activeCipher === 'chao' && <ChaoCipher />}
      {activeCipher === 'bellaso' && <BellasoCipher />}
      {activeCipher === 'alberti' && <AlbertiCipher />}
      {activeCipher === 'vigenere' && <VigenereCipher />}
      {activeCipher === 'affine' && <AffineCipher />}
      {activeCipher === 'A1Z26' && <A1Z26Cipher />}
      {activeCipher === 'A0Z25' && <A0Z25Cipher />}
      {activeCipher === 'pigpen' && <PigPenCipher />}
      {activeCipher === 'gronsfeld' && <GronsfeldCipher />}
      {activeCipher === 'book' && <BookCipher />}
      {activeCipher === 'scytale' && <ScytaleCipher />}
      {activeCipher === 'foursquare' && <FourSquareCipher />}
      {activeCipher === 'twosquare' && <TwoSquareCipher />}
      {activeCipher === 'enigmamachine' && <EnigmaMachineCipher />}
      {activeCipher === 'base64encoding' && <Base64EncodingCipher />}
      {activeCipher === 'binarycode' && <BinaryCodeCipher />}
      {activeCipher === 'hexcode' && <HexCodeCipher />}
      {activeCipher === 'octalcode' && <OctalCodeCipher />}
      {activeCipher === 'hill' && < HillCipher />}
      {activeCipher === 'doubletransposition' && <DoubleTranspositionCipher />}
      {activeCipher === 'matrix' && <MatrixCipher />}
      {activeCipher === 'ROT13' && <ROT13Cipher />}
      {activeCipher === 'simplesubstitution' && <SimpleSubstitutionCipher />}
      {activeCipher === 'columnartransposition' && <ColumnarTranspositionCipher />}
      {activeCipher === 'masonic' && <MasonicCipher />}
      {activeCipher === 'baconian' && <BaconianCipher />}
      {activeCipher === 'autokey' && <AutokeyCipher />}
      {activeCipher === 'homophonicsubstitution' && <HomophonicSubstitutionCipher />}
      {activeCipher === 'substitutiontables' && <SubstitutionTablesCipher />}
      {activeCipher === 'asciicode' && <ASCIICodeCipher />}
      {activeCipher === 'ROT18' && <ROT18Cipher />}
      {activeCipher === 'bcdencoding' && <BCDEncodingCipher />}
      {activeCipher === 'nihilist' && <NihilistCipher />}
      {activeCipher === 'graycode' && <GrayCodeCipher />}
     {/* {activeCipher === '94' && <94Cipher />} */}
      {/* {activeCipher === '' && <Cipher />}
      {activeCipher === '' && <Cipher />}
      {activeCipher === '' && <Cipher />}
      {activeCipher === '' && <Cipher />}
      {activeCipher === '' && <Cipher />}
      {activeCipher === '' && <Cipher />}
      {activeCipher === '' && <Cipher />}
  {activeCipher === '' && <Cipher />}      */}

     </div>
  );
};

export default App;
