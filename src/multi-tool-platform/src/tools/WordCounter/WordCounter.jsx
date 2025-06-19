import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    const words = inputText.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  return (
    <div>
      <h1>Word Counter</h1>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Type or paste your text here..."
      />
      <div>
        <h2>Word Count: {wordCount}</h2>
      </div>
    </div>
  );
};

export default WordCounter;