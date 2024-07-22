import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Exam Management and Information System</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <main className="container mx-auto py-8 px-4">{children}</main>
      </body>
    </html>
  );
}
