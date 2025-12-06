import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import ConceptMap from './pages/ConceptMap';
import Library from './pages/Library';
import Projects from './pages/Projects';
import TeacherMode from './pages/TeacherMode';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/concepts" element={<ConceptMap />} />
      <Route path="/library" element={<Library />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/teach" element={<TeacherMode />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
