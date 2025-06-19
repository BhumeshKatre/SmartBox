import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        rows="10"
        cols="50"
        placeholder="Type or paste your text here..."
      />
      <div>
        <h2>Character Count: {text.length}</h2>
      </div>
    </div>
  );
};

export default CharacterCounter;