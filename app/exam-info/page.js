'use client';
import { useState, useEffect } from 'react';
import Timer from '../../components/Timer';
import Alert from '../../components/Alert';

export default function ExamInfo() {
  const [examDetails, setExamDetails] = useState({
    moduleName: '',
    numStudents: '',
    examStart: '',
    examEnd: '',
    instructions: ''
  });
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const storedDetails = JSON.parse(localStorage.getItem('examDetails'));
    if (storedDetails) {
      setExamDetails(storedDetails);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedExams = JSON.parse(localStorage.getItem('exams')) || [];
    storedExams.push(examDetails);
    localStorage.setItem('exams', JSON.stringify(storedExams));
    setAlerts([...alerts, { message: 'Exam details saved successfully.', type: 'success' }]);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6">Exam Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Module Name</label>
          <input
            type="text"
            name="moduleName"
            value={examDetails.moduleName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Number of Students</label>
          <input
            type="number"
            name="numStudents"
            value={examDetails.numStudents}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Exam Start Time</label>
          <input
            type="datetime-local"
            name="examStart"
            value={examDetails.examStart}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Exam End Time</label>
          <input
            type="datetime-local"
            name="examEnd"
            value={examDetails.examEnd}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Instructions</label>
          <textarea
            name="instructions"
            value={examDetails.instructions}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">Save Details</button>
      </form>
      <Timer startTime={examDetails.examStart} endTime={examDetails.examEnd} />
      <Alert alerts={alerts} />
    </div>
  );
}
