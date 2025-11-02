import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; // مثال لو عندك صفحة تانية
import FancyProjectsPage from './components/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<FancyProjectsPage />} />

      </Routes>
    </Router>
  )
}

export default App;
