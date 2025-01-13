//import './styles/Home.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UpdatePost from './pages/UpdatePost';
import NewPost from './pages/NewPost';
import SearchPost from './pages/SearchPost';
import Header from './components/Header';
import Tailwind from './pages/Tailwind';

function App() {

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/update/:id' element={<UpdatePost />} />
          <Route path='/new-post' element={<NewPost />} />
          <Route path='/search/:title' element={<SearchPost />} />
          <Route path='/tailwind' element={<Tailwind />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;