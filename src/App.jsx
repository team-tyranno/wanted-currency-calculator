import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Calculator1, Calculator2 } from './pages';
import { checkSchedule } from './utils/localStorage';

function App() {
  useEffect(() => {
    checkSchedule();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Calculator1 />} />
        <Route path="/2" element={<Calculator2 />} />
      </Routes>
    </Layout>
  );
}

export default App;
