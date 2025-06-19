import React from 'react';
import MainPageLayout from './layout/MainPageLayout';
import { Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import ToolsPage from './pages/Tools.Page';
import AgeCalculator from './tools/AgeCalculator';
import ImageResizer from './tools/ImageResizer'
import { tools } from './data';
import AboutPage from './components/AboutPage';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPageLayout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='tools' element={<ToolsPage />} />
          {
            tools.map((tool, ind) => (
              <Route
                key={ind}
                path={tool.path} element={tool.Component} />
              
            ))
          }

        </Route>
        <Route path='*' element={<h1>Page not Found </h1>} />
    </Routes>
    </>
  );
}

export default App;
