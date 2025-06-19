import React from "react";

const Index = () => {
  return (
    <>
      <section className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* PDF Merge UI */}
            <div className="w-full md:w-1/2 max-w-md bg-white p-6 rounded-xl shadow space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">PDF Merge</h2>
              <p className="text-sm text-gray-600">
                Combine multiple PDF files into a single document easily and
                securely.
              </p>
              {/* PDF upload form here */}
              <input
                type="file"
                multiple
                accept=".pdf"
                className="block w-full text-sm text-gray-700"
              />
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Merge PDFs
              </button>
            </div>

            {/* How to Use */}
            <div className="w-full md:w-1/2 max-w-xl space-y-4">
              <h3 className="text-xl font-semibold">How to Use</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Click the file input to select multiple PDF files.</li>
                <li>Ensure they’re in the correct order for merging.</li>
                <li>Click the "Merge PDFs" button.</li>
                <li>Your merged file will be ready to download instantly.</li>
                <li>No data is saved. 100% private and secure.</li>
              </ul>
            </div>
          </div>

          {/* What is a PDF Merge Tool? */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              What is a PDF Merge Tool?
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2 text-sm">
              A PDF Merge tool lets you combine multiple PDF documents into one
              seamless file. It’s useful for organizing reports, resumes,
              scanned documents, or notes — without needing a PDF editor.
            </p>

            <div className="mt-8 text-sm text-gray-700 max-w-xl mx-auto">
              <h3 className="font-medium mb-2">Example Use Cases:</h3>
              <ul className="list-disc list-inside">
                <li>Combining multiple scanned pages into a single document</li>
                <li>Merging assignments or reports before uploading</li>
                <li>
                  Bundling PDFs for job applications or school submissions
                </li>
                <li>No software install — works right in your browser</li>
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

export default Index;
