import { useState } from 'react';
import { Card, Button, Form, Badge, Alert } from 'react-bootstrap';
import { CheckSquare, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import examData from '../data/exam-questions.json';
import { motion, AnimatePresence } from 'framer-motion';

const ExamPrep = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | string>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  const handleSelect = (questionId: string, optionIndex: number | string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleCheck = (questionId: string) => {
    setShowResults(prev => ({ ...prev, [questionId]: true }));
  };

  return (
    <div>
      <div className="mb-5 border-bottom pb-4">
        <h2 className="fw-bold d-flex align-items-center text-danger">
          <CheckSquare className="me-2 ms-3" size={32} />
          بنك أسئلة الامتحان
        </h2>
        <p className="text-muted lead">حل الأسئلة دي عشان تدرب على طريقة الامتحان، وشوف الشرح لو جاوبت غلط.</p>
      </div>

      <div className="questions-container">
        {examData.map((q, index) => {
          const isAnswered = selectedAnswers[q.id] !== undefined;
          const isChecked = showResults[q.id];
          const isCorrect = selectedAnswers[q.id] === q.correctAnswer;

          return (
            <Card key={q.id} className="mb-4 border-0 shadow-sm rounded-4">
              <Card.Header className="bg-white border-bottom-0 pt-4 px-4 pb-0 d-flex justify-content-between align-items-center">
                <Badge bg={q.type === 'MCQ' ? 'primary' : q.type === 'TrueFalse' ? 'warning' : 'info'} className="px-3 py-2">
                  سؤال {index + 1} - {q.type}
                </Badge>
              </Card.Header>
              <Card.Body className="p-4">
                <h5 className="fw-bold lh-lg mb-3 text-english">{q.questionEn}</h5>
                <h5 className="text-muted mb-4">{q.questionAr}</h5>

                <Form>
                  <div className="d-flex flex-column gap-3 mb-4 text-english">
                    {q.options.map((option, optIdx) => {
                      let variantClass = 'border-light-subtle';
                      if (isChecked) {
                        if (optIdx === q.correctAnswer) variantClass = 'border-success bg-success bg-opacity-10 text-success fw-bold';
                        else if (selectedAnswers[q.id] === optIdx) variantClass = 'border-danger bg-danger bg-opacity-10 text-danger';
                      } else if (selectedAnswers[q.id] === optIdx) {
                        variantClass = 'border-primary bg-primary bg-opacity-10';
                      }

                      return (
                        <div 
                          key={optIdx} 
                          className={`p-3 border rounded-3 cursor-pointer transition-all ${variantClass}`}
                          style={{ cursor: isChecked ? 'default' : 'pointer' }}
                          onClick={() => !isChecked && handleSelect(q.id, optIdx)}
                        >
                          <Form.Check 
                            type="radio"
                            id={`${q.id}-${optIdx}`}
                            label={option}
                            checked={selectedAnswers[q.id] === optIdx}
                            onChange={() => !isChecked && handleSelect(q.id, optIdx)}
                            disabled={isChecked}
                            className="mb-0"
                          />
                        </div>
                      );
                    })}
                  </div>
                </Form>

                {!isChecked ? (
                  <Button 
                    variant="danger" 
                    className="rounded-pill px-4" 
                    disabled={!isAnswered}
                    onClick={() => handleCheck(q.id)}
                  >
                    تأكيد الإجابة
                  </Button>
                ) : (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4"
                    >
                      <Alert variant={isCorrect ? "success" : "danger"} className="border-0 rounded-4 d-flex align-items-start">
                        {isCorrect ? (
                          <CheckCircle size={24} className="ms-3 flex-shrink-0 mt-1 text-success" />
                        ) : (
                          <XCircle size={24} className="ms-3 flex-shrink-0 mt-1 text-danger" />
                        )}
                        <div>
                          <h6 className="fw-bold mb-2">
                            {isCorrect ? 'إجابة صحيحة برافو!' : 'إجابة خاطئة، ركز المرة الجاية!'}
                          </h6>
                          <p className="mb-0 lh-lg">{q.explanationAr}</p>
                        </div>
                      </Alert>

                      {q.keywords && q.keywords.length > 0 && (
                        <div className="mt-3 text-muted small">
                          <AlertTriangle size={16} className="ms-1 d-inline" />
                          <span className="fw-bold">ركز على الكلمات دي: </span>
                          <span className="text-english">{q.keywords.join(', ')}</span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ExamPrep;
