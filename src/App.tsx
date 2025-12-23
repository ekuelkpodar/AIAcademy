import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import ConceptMap from './pages/ConceptMap';
import Library from './pages/Library';
import Projects from './pages/Projects';
import TeacherMode from './pages/TeacherMode';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/concepts" element={<ConceptMap />} />
        <Route path="/library" element={<Library />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teach" element={<TeacherMode />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

