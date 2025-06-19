import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Index = () => {
  const [image, setImage] = useState(null); // Original image URL
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [resized, setResized] = useState(false);
  const [error, setError] = useState('');
  const canvasRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file.');
      return;
    }
    setError('');
    const imgURL = URL.createObjectURL(file);
    setImage(imgURL);
    setResized(false);
  };

  const handleResize = () => {
    if (!image) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new window.Image();
    img.src = image;
    img.onload = () => {
      canvas.width = Number(width);
      canvas.height = Number(height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, Number(width), Number(height));
      setResized(true);
    };
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'resized-image.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <>
      <Helmet>
        <title>Image Resizer | SmartBox</title>
      </Helmet>

      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 bg-white rounded-xl shadow p-6">
          {/* Left Panel: Controls */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-2xl font-bold text-blue-600 text-center md:text-left">
              Image Resizer
            </h1>

            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-700 font-medium">Select an image:</span>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                  onChange={handleImageChange}
                />
              </label>
              {error && <div className="text-red-500 text-sm">{error}</div>}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Width (px):</label>
                  <input
                    type="number"
                    name="width"
                    id="width"
                    min={1}
                    value={width}
                    onChange={e => setWidth(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Height (px):</label>
                  <input
                    type="number"
                    name="height"
                    id="height"
                    min={1}
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>

              <button
                className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition ${!image ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleResize}
                disabled={!image}
                type="button"
              >
                Resize
              </button>
              {resized && (
                <button
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                  onClick={handleDownload}
                  type="button"
                >
                  Download Resized Image
                </button>
              )}
            </div>
          </div>

          {/* Right Panel: Preview */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full h-64 bg-gray-100 border border-dashed border-gray-300 rounded flex items-center justify-center relative">
              {!image && (
                <span className="text-gray-400">Preview Section</span>
              )}
              {image && !resized && (
                <img
                  src={image}
                  alt="Original Preview"
                  className="max-h-60 max-w-full object-contain rounded"
                />
              )}
              {image && (
                <canvas
                  ref={canvasRef}
                  style={{
                    display: resized ? 'block' : 'none',
                    maxWidth: '100%',
                    maxHeight: '240px',
                    borderRadius: '0.5rem',
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full md:w-1/2 max-w-xl mt-10 md:mt-0 md:ml-12 space-y-4 p-2">
        <h3 className="text-xl font-semibold">How to Use</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Upload an image file (JPEG, PNG, etc.) from your device.</li>
          <li>Enter your desired width and height values.</li>
          <li>Click the "Resize" button to process the image.</li>
          <li>Download the resized image instantly.</li>
          <li>All processing happens locally in your browser. No data is uploaded.</li>
        </ul>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          What is an Image Resizer?
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2 text-sm">
          An Image Resizer allows you to adjust the dimensions of your images and reduce file size
          without losing too much quality. It's helpful for web uploads, emails, or saving storage space.
          Everything runs in your browser — no need to upload anything to a server.
        </p>

        <div className="mt-8 text-sm text-gray-700 max-w-xl mx-auto">
          <h3 className="font-medium mb-2">Example Use Cases:</h3>
          <ul className="list-disc list-inside">
            <li>Resize images before uploading to websites or apps</li>
            <li>Reduce images to lower email attachment size</li>
            <li>Optimize images for faster loading on blogs or portfolios</li>
            <li>Shrink large images without needing advanced tools like Photoshop</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/tools"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Explore More Tools on SmartBox
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
