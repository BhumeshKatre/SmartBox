import React from "react";
import { Link } from "react-router-dom";
import { tools } from "../data.jsx";
import { Helmet } from "react-helmet";
import { FaCalculator, FaTools, FaExchangeAlt, FaImage, FaFileAlt } from "react-icons/fa";

const ToolBox = ({ head, tools, icon }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <h2
        className="text-2xl font-bold text-start mb-5">{head}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <Link
            key={index}
            to={tool.path}
            className="bg-white border border-gray-100  hover:bg-blue-100  transition p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
          >
            <div className="text-3xl mb-2 text-blue-600">{tool.icon} </div>
            <span className="text-sm font-medium">{tool.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

const ToolsPage = () => {
  const calculatorToos = tools.filter(
    (tool) => tool.category === "Calculators"
  );

  const utilityTools = tools.filter(
    (tool) => tool.category === "Text & Utility Tools"
  );

  const converterTools = tools.filter(
    (tool) => tool.category === "Converters"
  );
  const imgTools = tools.filter(
    (tool) => tool.category === "Image Tools"
  );

  const fileTools = tools.filter(
    (tool) => tool.category === "File Tools"
  );
  return (
    <>
      <Helmet>
        <title>All-in-One Utility Tool Platform | Tools</title>
        <meta
          name="description"
          content="Choose from a variety of calculator and utility tools to simplify your tasks. All-in-one platform for productivity."
        />
      </Helmet>
      <div className="text-center px-4 py-10 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          All-in-One Utility Tool Platform
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Choose a tool below to get started.
        </p>
         <ToolBox head="Calculators" tools={calculatorToos} icon="FaCalculator" />        
        <ToolBox head="File Tools" tools={fileTools} />
        <ToolBox head="Image Tools" tools={imgTools} />
        <ToolBox head="Utility Tools" tools={utilityTools} />
        <ToolBox head="Converters" tools={converterTools} />  


      </div>
    </>
  );
};

export default ToolsPage;
