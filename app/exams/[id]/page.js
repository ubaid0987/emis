'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Timer from '../../../components/Timer';

export default function ExamDetail() {
  const { id } = useParams();
  const [examDetails, setExamDetails] = useState(null);

  useEffect(() => {
    const storedExams = JSON.parse(localStorage.getItem('exams')) || [];
    setExamDetails(storedExams[id]);
  }, [id]);

  if (!examDetails) {
    return <div>Loading...</div>;
  }

  const instructionsList = examDetails.instructions.split('\n').map((instruction, index) => (
    <li key={index} className="mb-2">{instruction}</li>
  ));

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6">{examDetails.moduleName}</h1>
      <h2 className='mt-5'><b>Instructions</b></h2>
      <ul className="list-disc pl-5 mb-4">
        {instructionsList}
      </ul>
      <Timer startTime={examDetails.examStart} endTime={examDetails.examEnd} />
    </div>
  );
}
