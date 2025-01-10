import './styles/Home.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UpdatePost from './components/UpdatePost';

function App() {

  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/update/:id' element={<UpdatePost />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;