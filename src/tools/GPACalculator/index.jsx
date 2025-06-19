import React, { useState } from "react";
import { Helmet } from "react-helmet";

const index = () => {
  const [courses, setCourses] = useState([
    { name: "", grade: "", credits: "" },
  ]);
  const [gpa, setGpa] = useState(null);

  const gradePoints = {
    A: 4.0,
    B: 3.0,
    C: 2.0,
    D: 1.0,
    F: 0.0,
  };

  const handleCourseChange = (index, field, value) => {
    const updated = [...courses];
    updated[index][field] = value;
    setCourses(updated);
  };

  const addCourse = () => {
    setCourses([...courses, { name: "", grade: "", credits: "" }]);
  };

  const calculateGpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(({ grade, credits }) => {
      const point = gradePoints[grade.toUpperCase()];
      const credit = parseFloat(credits);
      if (!isNaN(point) && !isNaN(credit)) {
        totalPoints += point * credit;
        totalCredits += credit;
      }
    });

    if (totalCredits === 0) {
      setGpa("Invalid input");
    } else {
      setGpa((totalPoints / totalCredits).toFixed(2));
    }
  };

  return (
    <>
      <Helmet>
        <title>GPA Calculator | SmartBox</title>
      </Helmet>
      <section className="bg-gray-50 py-5">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="max-w-3xl mx-auto p-6 ">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">GPA Calculator</h2>

              {courses.map((course, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Course Name"
                    value={course.name}
                    onChange={(e) => handleCourseChange(index, "name", e.target.value)}
                    className="flex-1 border p-2 rounded"
                  />
                  <select
                    value={course.grade}
                    onChange={(e) => handleCourseChange(index, "grade", e.target.value)}
                    className="flex-1 border p-2 rounded"
                  >
                    <option value="">Grade</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Credit Hours"
                    value={course.credits}
                    onChange={(e) => handleCourseChange(index, "credits", e.target.value)}
                    className="flex-1 border p-1 rounded"
                  />
                </div>
              ))}

              <div className="flex gap-4 mb-6">
                <button
                  onClick={addCourse}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Add Course
                </button>
                <button
                  onClick={calculateGpa}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Calculate GPA
                </button>
              </div>

              {gpa !== null && (
                <div className="text-xl text-center text-green-600 font-semibold">
                  GPA: {gpa}
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 max-w-xl space-y-4">
              <h3 className="text-xl font-semibold">How to Use</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Enter your subjects, credit hours, and corresponding grades.</li>
                <li>Click the "Calculate GPA" button.</li>
                <li>Your GPA will be displayed instantly below the button.</li>
                <li>No login or signup required — 100% private and secure.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-gray-800">What is a GPA Calculator?</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2 text-sm">
              A GPA Calculator helps students compute their Grade Point Average based on the credit hours and grades received in various subjects. It’s useful for tracking academic progress, qualifying for scholarships, and meeting graduation requirements — without manual calculations.
            </p>

            <div className="mt-8 text-sm text-gray-700 max-w-xl mx-auto">
              <h3 className="font-medium mb-2">Example Use Cases:</h3>
              <ul className="list-disc list-inside">
                <li>Form filling for academic records</li>
                <li>Calculate GPA for scholarships or program eligibility</li>
                <li>Track semester-wise academic performance</li>
                <li>Personal or academic use without saving data</li>
              </ul>
            </div>

            <div className="mt-10 text-center">
              <a
                href="/tools"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Explore More Tools on SmartBox
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
