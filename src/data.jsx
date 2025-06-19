import {
  FaCalendarAlt, FaFilePdf, FaVolumeUp, FaMoneyBill,
  FaFileAlt, FaQrcode, FaKey, FaGraduationCap, FaRuler, FaLock, FaCalculator,
  FaCompressArrowsAlt, FaCrop, FaImages, FaWeight, FaPercentage, FaThermometerHalf,
  FaBalanceScale, FaMicrophone, FaFileWord, FaFileImage, FaFileArchive, FaChartPie
} from "react-icons/fa";

import AgeCalculator from "./tools/AgeCalculator";
import ImageResizer from './tools/ImageResizer';
import GPACalculator from "./tools/GPACalculator";
import PdfMerge from "./tools/PdfMerge";
import PdfCompressor from "./tools/PdfCompressor/PdfCompressor";
import CurrencyConverter from "./tools/CurrencyConverter/CurrencyConverter";
import BasicCalculator from "./tools/BasicCalculator/BasicCalculator";
import BMICalculator from "./tools/BMICalculator/BMICalculator";
import PercentageCalculator from "./tools/PercentageCalculator/PercentageCalculator";
import LoanCalculator from "./tools/LoanCalculator/LoanCalculator";
import DiscountCalculator from "./tools/DiscountCalculator/DiscountCalculator";
import TaxCalculator from "./tools/TaxCalculator/TaxCalculator";
import PdfToWord from "./tools/PdfToWord/PdfToWord";
import WordToPdf from "./tools/WordToPdf/WordToPdf";
import ImageToPdf from "./tools/ImageToPdf/ImageToPdf";
import PdfSplitter from "./tools/PdfSplitter/PdfSplitter";
import ImageCompressor from "./tools/ImageCompressor/ImageCompressor";
import ImageFormatConverter from "./tools/ImageFormatConverter/ImageFormatConverter";
import BackgroundRemover from "./tools/BackgroundRemover/BackgroundRemover";
import UnitConverter from "./tools/UnitConverter/UnitConverter";
import TemperatureConverter from "./tools/TemperatureConverter/TemperatureConverter";
import NumberToWords from "./tools/NumberToWords/NumberToWords";
import WordCounter from "./tools/WordCounter/WordCounter";
import CharacterCounter from "./tools/CharacterCounter/CharacterCounter";
import TextToSpeech from "./tools/TextToSpeech/TextToSpeech";
import SpeechToText from "./tools/SpeechToText/SpeechToText";
import QRCodeGenerator from './tools/QRCodeGenerator/QRCodeGenerator'
import ImageCropper from "./tools/ImageCropper/ImageCropper";
import PasswordGenerator from "./tools/PasswordGenerator/PasswordGenerator";
import SecurePassword from "./tools/SecurePassword/SecurePassword";

export const tools = [
  // Calculators
  {
    key: "age-calculator",
    category: "Calculators",
    name: "Age Calculator",
    icon: <FaCalendarAlt />,
    path: "/tools/age-calculator",
    Component: <AgeCalculator />
  },
  {
    key: "gpa-calculator",
    category: "Calculators",
    name: "GPA Calculator",
    icon: <FaGraduationCap />,
    path: "/tools/gpa-calculator",
    Component: <GPACalculator />
  },
  {
    key: "basic-calculator",
    category: "Calculators",
    name: "Basic Calculator",
    icon: <FaCalculator />,
    path: "/tools/basic-calculator",
    Component: <BasicCalculator />
  },
  {
    key: "bmi-calculator",
    category: "Calculators",
    name: "BMI Calculator",
    icon: <FaWeight />,
    path: "/tools/bmi-calculator",
    Component: <BMICalculator />
  },
  {
    key: "percentage-calculator",
    category: "Calculators",
    name: "Percentage Calculator",
    icon: <FaPercentage />,
    path: "/tools/percentage-calculator",
    Component: <PercentageCalculator />
  },
  {
    key: "loan-calculator",
    category: "Calculators",
    name: "Loan EMI Calculator",
    icon: <FaBalanceScale />,
    path: "/tools/loan-calculator",
    Component: <LoanCalculator />
  },
  {
    key: "discount-calculator",
    category: "Calculators",
    name: "Discount Calculator",
    icon: <FaChartPie />,
    path: "/tools/discount-calculator",
    Component: <DiscountCalculator />
  },
  {
    key: "tax-calculator",
    category: "Calculators",
    name: "Tax Calculator",
    icon: <FaMoneyBill />,
    path: "/tools/tax-calculator",
    Component: <TaxCalculator />
  },

  // File Tools
  {
    key: "pdf-merge",
    category: "File Tools",
    name: "PDF Merge",
    icon: <FaFilePdf />,
    path: "/tools/pdf-merge",
    Component: <PdfMerge />
  },
  {
    key: "pdf-to-word",
    category: "File Tools",
    name: "PDF to Word Converter",
    icon: <FaFileWord />,
    path: "/tools/pdf-to-word",
    Component: <PdfToWord />
  },
  {
    key: "word-to-pdf",
    category: "File Tools",
    name: "Word to PDF Converter",
    icon: <FaFileWord />,
    path: "/tools/word-to-pdf",
    Component: <WordToPdf />
  },
  {
    key: "image-to-pdf",
    category: "File Tools",
    name: "Image to PDF Converter",
    icon: <FaFileImage />,
    path: "/tools/image-to-pdf",
    Component: <ImageToPdf />
  },
  {
    key: "pdf-compressor",
    category: "File Tools",
    name: "PDF Compressor",
    icon: <FaCompressArrowsAlt />,
    path: "/tools/pdf-compressor",
    Component: <PdfCompressor />
  },
  {
    key: "pdf-splitter",
    category: "File Tools",
    name: "PDF Splitter",
    icon: <FaFileArchive />,
    path: "/tools/pdf-splitter",
    Component: <PdfSplitter />
  },

  // Image Tools
  {
    key: "image-resizer",
    category: "Image Tools",
    name: "Image Resizer",
    icon: <FaRuler />,
    path: "/tools/image-resizer",
    Component: <ImageResizer />
  },
  {
    key: "image-compressor",
    category: "Image Tools",
    name: "Image Compressor",
    icon: <FaCompressArrowsAlt />,
    path: "/tools/image-compressor",
    Component: <ImageCompressor />
  },
  {
    key: "image-cropper",
    category: "Image Tools",
    name: "Image Cropper",
    icon: <FaCrop />,
    path: "/tools/image-cropper",
    Component: <ImageCropper />
  },
  {
    key: "image-format-converter",
    category: "Image Tools",
    name: "Image Format Converter",
    icon: <FaImages />,
    path: "/tools/image-format-converter",
    Component: <ImageFormatConverter />
  },
  {
    key: "background-remover",
    category: "Image Tools",
    name: "Background Remover",
    icon: <FaFileImage />,
    path: "/tools/background-remover",
    Component: <BackgroundRemover />
  },

  // Converters
  {
    key: "currency-converter",
    category: "Converters",
    name: "Currency Converter",
    icon: <FaMoneyBill />,
    path: "/tools/currency-converter",
    Component: <CurrencyConverter />
  },
  {
    key: "unit-converter",
    category: "Converters",
    name: "Unit Converter",
    icon: <FaBalanceScale />,
    path: "/tools/unit-converter",
    Component: <UnitConverter />
  },
  {
    key: "temperature-converter",
    category: "Converters",
    name: "Temperature Converter",
    icon: <FaThermometerHalf />,
    path: "/tools/temperature-converter",
    Component: <TemperatureConverter />
  },
  {
    key: "number-to-words",
    category: "Converters",
    name: "Number to Words Converter",
    icon: <FaCalculator />,
    path: "/tools/number-to-words",
    Component: <NumberToWords />
  },

  // Text & Utility Tools
  {
    key: "word-counter",
    category: "Text & Utility Tools",
    name: "Word Counter",
    icon: <FaFileAlt />,
    path: "/tools/word-counter",
    Component: <WordCounter />
  },
  {
    key: "character-counter",
    category: "Text & Utility Tools",
    name: "Character Counter",
    icon: <FaFileAlt />,
    path: "/tools/character-counter",
    Component: <CharacterCounter />
  },
  {
    key: "text-to-speech",
    category: "Text & Utility Tools",
    name: "Text to Speech",
    icon: <FaVolumeUp />,
    path: "/tools/text-to-speech",
    Component: <TextToSpeech />
  },
  {
    key: "speech-to-text",
    category: "Text & Utility Tools",
    name: "Speech to Text",
    icon: <FaMicrophone />,
    path: "/tools/speech-to-text",
    Component: <SpeechToText />
  },
  {
    key: "qr-code-generator",
    category: "Text & Utility Tools",
    name: "QR Code Generator",
    icon: <FaQrcode />,
    path: "/tools/qr-code-generator",
    Component: <QRCodeGenerator />
  },
  {
    key: "password-generator",
    category: "Text & Utility Tools",
    name: "Password Generator",
    icon: <FaKey />,
    path: "/tools/password-generator",
    Component: <PasswordGenerator />
  },
  {
    key: "secure-password",
    category: "Text & Utility Tools",
    name: "Secure Password Checker",
    icon: <FaLock />,
    path: "/tools/secure-password",
    Component: <SecurePassword />
  }
];
