import React, { useState } from 'react';

const GPACalculator = () => {
  const [grades, setGrades] = useState([{ subject: '', grade: '' }]);
  const [gpa, setGpa] = useState(null);

  const handleGradeChange = (index, event) => {
    const newGrades = [...grades];
    newGrades[index][event.target.name] = event.target.value;
    setGrades(newGrades);
  };

  const addGrade = () => {
    setGrades([...grades, { subject: '', grade: '' }]);
  };

  const calculateGPA = () => {
    const totalPoints = grades.reduce((acc, curr) => {
      const gradePoint = parseFloat(curr.grade) || 0;
      return acc + gradePoint;
    }, 0);
    const gpaValue = totalPoints / grades.length;
    setGpa(gpaValue);
  };

  return (
    <div>
      <h1>GPA Calculator</h1>
      {grades.map((grade, index) => (
        <div key={index}>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={grade.subject}
            onChange={(event) => handleGradeChange(index, event)}
          />
          <input
            type="number"
            name="grade"
            placeholder="Grade"
            value={grade.grade}
            onChange={(event) => handleGradeChange(index, event)}
          />
        </div>
      ))}
      <button onClick={addGrade}>Add Grade</button>
      <button onClick={calculateGPA}>Calculate GPA</button>
      {gpa !== null && <h2>Your GPA: {gpa.toFixed(2)}</h2>}
    </div>
  );
};

export default GPACalculator;