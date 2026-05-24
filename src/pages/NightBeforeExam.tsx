import { Card, Row, Col, Alert } from 'react-bootstrap';
import { Moon, Star, AlertCircle } from 'lucide-react';
import nightData from '../data/night-before-exam.json';
import { motion } from 'framer-motion';

const NightBeforeExam = () => {
  return (
    <div>
      <div className="mb-5 border-bottom pb-4 text-center">
        <h2 className="fw-bold d-flex align-items-center justify-content-center text-info">
          <Moon className="me-2 ms-3" size={32} />
          {nightData.title}
        </h2>
        <p className="text-muted lead">{nightData.subtitle}</p>
      </div>

      <Row className="justify-content-center">
        <Col lg={10}>
          <Alert variant="warning" className="d-flex align-items-start border-0 rounded-4 mb-5 shadow-sm">
            <AlertCircle size={28} className="ms-3 flex-shrink-0 mt-1 text-warning" />
            <div>
              <h5 className="fw-bold mb-2">نصيحة سريعة:</h5>
              <p className="mb-0 fs-6 lh-lg">
                الامتحان دايماً بيركز على الفهم مش الحفظ. لو فهمت الفرق بين الـ Models، والفرق بين العلاقات في الـ UML (Include/Extend) و (Aggregation/Composition)، هتضمن درجة كبيرة جداً.
              </p>
            </div>
          </Alert>

          {nightData.sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="mb-4 border-0 shadow-sm rounded-4 overflow-hidden">
                <Card.Header className="bg-info text-white p-3 border-0 d-flex align-items-center">
                  <Star size={20} className="ms-2" />
                  <h4 className="mb-0 fw-bold">{section.title}</h4>
                </Card.Header>
                <Card.Body className="p-4 bg-white">
                  <ul className="list-unstyled mb-0">
                    {section.points.map((point, ptIdx) => (
                      <li key={ptIdx} className="mb-3 d-flex align-items-start">
                        <div className="bg-info bg-opacity-25 text-info rounded-circle d-flex justify-content-center align-items-center flex-shrink-0 ms-3 mt-1" style={{ width: '24px', height: '24px', fontSize: '12px' }}>
                          {ptIdx + 1}
                        </div>
                        <span className="fs-5 lh-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default NightBeforeExam;
