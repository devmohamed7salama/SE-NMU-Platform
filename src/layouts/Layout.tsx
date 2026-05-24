import type { ReactNode } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, CheckSquare, Layers, Moon, Zap, Play, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navLinks = [
    { path: '/', name: 'الرئيسية', icon: <BookOpen size={18} className="ms-2" /> },
    { path: '/lectures', name: 'المحاضرات', icon: <Layers size={18} className="ms-2" /> },
    { path: '/methodologies', name: 'المنهجيات', icon: <GitBranch size={18} className="ms-2" /> },
    { path: '/use-cases', name: 'الرسومات', icon: <Play size={18} className="ms-2" /> },
    { path: '/exam-prep', name: 'بنك الأسئلة', icon: <CheckSquare size={18} className="ms-2" /> },
    { path: '/flashcards', name: 'البطاقات الذكية', icon: <Zap size={18} className="ms-2" /> },
    { path: '/night-before-exam', name: 'ليلة الامتحان', icon: <Moon size={18} className="ms-2" /> },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="white" expand="lg" className="shadow-sm sticky-top py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-primary d-flex align-items-center">
            <span className="ms-2">NMU SE</span>
            <span className="bg-primary text-white p-2 rounded-3 d-flex">
               <BookOpen size={24} />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navLinks.map((link) => (
                <Nav.Link 
                  as={Link} 
                  to={link.path} 
                  key={link.path}
                  className={`px-3 d-flex align-items-center ${location.pathname === link.path ? 'text-primary fw-bold' : ''}`}
                >
                  {link.icon}
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1 container py-5">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="bg-dark text-white py-4 mt-auto">
        <Container className="text-center">
          <p className="mb-1 footer-branding">إعداد: المهندس محمد سلامة</p>
          <p className="mb-0 text-white-50 small">كلية علوم وهندسة الحاسب - جامعة المنصورة الجديدة</p>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
