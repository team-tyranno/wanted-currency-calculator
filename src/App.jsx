import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate}>과제 1</button>
      <button>과제 2</button>
      <Routes>
        <Route />
        <Route />
      </Routes>
    </>
  );
}
export default App;
