import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import LecturesList from './pages/LecturesList';
import LectureDetail from './pages/LectureDetail';
import UseCases from './pages/UseCases';
import Methodologies from './pages/Methodologies';
import ExamPrep from './pages/ExamPrep';
import Flashcards from './pages/Flashcards';
import NightBeforeExam from './pages/NightBeforeExam';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lectures" element={<LecturesList />} />
          <Route path="/lectures/:id" element={<LectureDetail />} />
          <Route path="/methodologies" element={<Methodologies />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/exam-prep" element={<ExamPrep />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/night-before-exam" element={<NightBeforeExam />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
