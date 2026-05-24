import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Zap, RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react';
import flashcardsData from '../data/flashcards.json';
import { motion } from 'framer-motion';

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcardsData.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length);
    }, 150);
  };

  const card = flashcardsData[currentIndex];

  return (
    <div>
      <div className="mb-5 border-bottom pb-4 text-center">
        <h2 className="fw-bold d-flex align-items-center justify-content-center text-warning">
          <Zap className="me-2 ms-3" size={32} />
          البطاقات الذكية (Flashcards)
        </h2>
        <p className="text-muted lead">دوس على الكارت عشان تقلبه وتشوف الشرح بالعربي.</p>
      </div>

      <div className="d-flex justify-content-center mb-5">
        <div style={{ width: '100%', maxWidth: '600px', perspective: '1000px' }}>
          <motion.div
            style={{ width: '100%', height: '350px', position: 'relative', transformStyle: 'preserve-3d', cursor: 'pointer' }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front */}
            <Card 
              className="position-absolute w-100 h-100 border-0 shadow rounded-4 d-flex align-items-center justify-content-center text-center p-4 bg-white"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div>
                <h3 className="fw-bold text-primary mb-3 text-english">{card.frontEn}</h3>
                <h5 className="text-muted">{card.frontAr}</h5>
                <div className="mt-4 text-muted small d-flex align-items-center justify-content-center">
                  <RotateCcw size={16} className="ms-1" />
                  اضغط للقلب
                </div>
              </div>
            </Card>

            {/* Back */}
            <Card 
              className="position-absolute w-100 h-100 border-0 shadow rounded-4 d-flex align-items-center justify-content-center text-center p-4 bg-warning bg-opacity-10"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div>
                <p className="fs-5 lh-lg fw-semibold mb-4 text-dark">{card.backAr}</p>
                <p className="text-muted text-english border-top border-warning pt-3">{card.backEn}</p>
              </div>
            </Card>
          </motion.div>

          <div className="d-flex justify-content-between align-items-center mt-4 px-3">
            <Button variant="outline-secondary" className="rounded-circle p-2" onClick={handlePrev}>
              <ChevronRight size={24} />
            </Button>
            <span className="fw-bold text-muted">
              {currentIndex + 1} / {flashcardsData.length}
            </span>
            <Button variant="outline-secondary" className="rounded-circle p-2" onClick={handleNext}>
              <ChevronLeft size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
