import { Component } from "react";
import {
  FaCalendarAlt, FaFilePdf, FaVolumeUp, FaMoneyBill,
  FaFileAlt, FaQrcode, FaKey, FaGraduationCap, FaRuler, FaLock, FaCalculator,
  FaCompressArrowsAlt, FaCrop, FaImages, FaWeight, FaPercentage, FaThermometerHalf,
  FaBalanceScale, FaMicrophone, FaFileWord, FaFileImage, FaFileArchive, FaChartPie
} from "react-icons/fa";

import AgeCalculator from "./tools/AgeCalculator/AgeCalculator";
import ImageResizer from './tools/ImageResizer/ImageResizer';
import GPACalculator from "./tools/GPACalculator/GPACalculator";
import PdfMerge from "./tools/PdfMerge/PdfMerge";
import CurrencyConverter from "./tools/CurrencyConverter/CurrencyConverter";
import DiscountCalculator from "./tools/DiscountCalculator/DiscountCalculator";
import TaxCalculator from "./tools/TaxCalculator/TaxCalculator";
import BasicCalculator from "./tools/BasicCalculator/BasicCalculator";
import BMICalculator from "./tools/BMICalculator/BMICalculator";
import PercentageCalculator from "./tools/PercentageCalculator/PercentageCalculator";
import LoanCalculator from "./tools/LoanCalculator/LoanCalculator";
import ImageCompressor from "./tools/ImageCompressor/ImageCompressor";
import ImageCropper from "./tools/ImageCropper/ImageCropper";
import ImageFormatConverter from "./tools/ImageFormatConverter/ImageFormatConverter";
import ImageToPDFConverter from "./tools/ImageToPDFConverter/ImageToPDFConverter";
import NumberToWords from "./tools/NumberToWords/NumberToWords";
import PasswordGenerator from "./tools/PasswordGenerator/PasswordGenerator";
import PDFCompressor from "./tools/PDFCompressor/PDFCompressor";
import PDFSplitter from "./tools/PDFSplitter/PDFSplitter";
import PDFToWord from "./tools/PDFToWord/PDFToWord";
import QRCodeGenerator from "./tools/QRCodeGenerator/QRCodeGenerator";
import SecurePasswordChecker from "./tools/SecurePasswordChecker/SecurePasswordChecker";
import SpeechToText from "./tools/SpeechToText/SpeechToText";
import TextToSpeech from "./tools/TextToSpeech/TextToSpeech";
import UnitConverter from "./tools/UnitConverter/UnitConverter";
import WordCounter from "./tools/WordCounter/WordCounter";
import WordToPDF from "./tools/WordToPDF/WordToPDF";

export const tools = [
  // Calculators
  { name: "Age Calculator", icon: <FaCalendarAlt />, path: "/tools/age-calculator", Component: <AgeCalculator /> },
  { name: "GPA Calculator", icon: <FaGraduationCap />, path: "/tools/gpa-calculator", Component: <GPACalculator /> },
  { name: "Basic Calculator", icon: <FaCalculator />, path: "/tools/basic-calculator", Component: <BasicCalculator /> },
  { name: "BMI Calculator", icon: <FaWeight />, path: "/tools/bmi-calculator", Component: <BMICalculator /> },
  { name: "Percentage Calculator", icon: <FaPercentage />, path: "/tools/percentage-calculator", Component: <PercentageCalculator /> },
  { name: "Loan EMI Calculator", icon: <FaBalanceScale />, path: "/tools/loan-calculator", Component: <LoanCalculator /> },
  { name: "Discount Calculator", icon: <FaChartPie />, path: "/tools/discount-calculator", Component: <DiscountCalculator /> },
  { name: "Tax Calculator", icon: <FaMoneyBill />, path: "/tools/tax-calculator", Component: <TaxCalculator /> },

  // File Tools
  { name: "PDF Merge", icon: <FaFilePdf />, path: "/tools/pdf-merge", Component: <PdfMerge /> },
  { name: "PDF to Word Converter", icon: <FaFileWord />, path: "/tools/pdf-to-word", Component: <PDFToWord /> },
  { name: "Word to PDF Converter", icon: <FaFileWord />, path: "/tools/word-to-pdf", Component: <WordToPDF /> },
  { name: "Image to PDF Converter", icon: <FaFileImage />, path: "/tools/image-to-pdf", Component: <ImageToPDFConverter /> },
  { name: "PDF Compressor", icon: <FaCompressArrowsAlt />, path: "/tools/pdf-compressor", Component: <PDFCompressor /> },
  { name: "PDF Splitter", icon: <FaFileArchive />, path: "/tools/pdf-splitter", Component: <PDFSplitter /> },

  // Image Tools
  { name: "Image Resizer", icon: <FaRuler />, path: "/tools/image-resizer", Component: <ImageResizer /> },
  { name: "Image Compressor", icon: <FaCompressArrowsAlt />, path: "/tools/image-compressor", Component: <ImageCompressor /> },
  { name: "Image Cropper", icon: <FaCrop />, path: "/tools/image-cropper", Component: <ImageCropper /> },
  { name: "Image Format Converter", icon: <FaImages />, path: "/tools/image-format-converter", Component: <ImageFormatConverter /> },
  { name: "Background Remover", icon: <FaFileImage />, path: "/tools/background-remover", Component: <BackgroundRemover /> },

  // Converters
  { name: "Currency Converter", icon: <FaMoneyBill />, path: "/tools/currency-converter", Component: <CurrencyConverter /> },
  { name: "Unit Converter", icon: <FaBalanceScale />, path: "/tools/unit-converter", Component: <UnitConverter /> },
  { name: "Temperature Converter", icon: <FaThermometerHalf />, path: "/tools/temperature-converter", Component: <TemperatureConverter /> },
  { name: "Number to Words Converter", icon: <FaCalculator />, path: "/tools/number-to-words", Component: <NumberToWords /> },

  // Text & Utility Tools
  { name: "Word Counter", icon: <FaFileAlt />, path: "/tools/word-counter", Component: <WordCounter /> },
  { name: "Character Counter", icon: <FaFileAlt />, path: "/tools/character-counter", Component: <CharacterCounter /> },
  { name: "Text to Speech", icon: <FaVolumeUp />, path: "/tools/text-to-speech", Component: <TextToSpeech /> },
  { name: "Speech to Text", icon: <FaMicrophone />, path: "/tools/speech-to-text", Component: <SpeechToText /> },
  { name: "QR Code Generator", icon: <FaQrcode />, path: "/tools/qr-code-generator", Component: <QRCodeGenerator /> },
  { name: "Password Generator", icon: <FaKey />, path: "/tools/password-generator", Component: <PasswordGenerator /> },
  { name: "Secure Password Checker", icon: <FaLock />, path: "/tools/secure-password", Component: <SecurePasswordChecker /> },
];