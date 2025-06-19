// src/components/ui/Footer.jsx

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black  text-center py-4   text-sm text-gray-200">
      <div>© {new Date().getFullYear()} Smartbox. All rights reserved.</div>
    </footer>
  );
}
