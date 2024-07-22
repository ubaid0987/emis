import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'University Exam System',
  description: 'Exam Management and Information System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 flex items-center">
          <Image src="/images/university-logo.png" alt="University Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold ml-4">University Exam System</h1>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}