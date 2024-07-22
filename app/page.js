'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const storedExams = JSON.parse(localStorage.getItem('exams')) || [];
    setExams(storedExams);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl w-6/12 text-center font-bold mb-8">Exam Management and Information System (EMIS)</h1>
      <div className="w-full max-w-2xl mb-6">
        <Link href="/exam-info">
          <p className="bg-blue-500 text-white py-2 px-4  text-center rounded hover:bg-blue-600 transition duration-200">Add New Exam</p>
        </Link>
      </div>
      <div className="w-full max-w-2xl bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">List of Exams</h2>
        <ul>
          {exams.map((exam, index) => (
            <li key={index} className="mb-2">
              <Link href={`/exams/${index}`}>
                <p className="text-blue-500 hover:underline">{exam.moduleName} - {new Date(exam.examStart).toLocaleString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
