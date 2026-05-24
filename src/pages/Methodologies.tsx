import { Row, Col, Card, Alert, Badge, ListGroup } from 'react-bootstrap';
import methodologiesData from '../data/methodologies.json';
import { GitBranch, CheckCircle, XCircle, HelpCircle, Lightbulb, AlertTriangle, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Methodologies = () => {
  return (
    <div>
      <div className="mb-5 border-bottom pb-4">
        <h2 className="fw-bold d-flex align-items-center text-primary">
          <GitBranch className="me-2 ms-3" size={32} />
          منهجيات تطوير البرمجيات (Process Models)
        </h2>
        <p className="text-muted lead">استعراض كامل لكل الأنظمة والنماذج اللي في المحاضرات مع توضيح متى نستخدم كل واحد ومميزاته وعيوبه.</p>
      </div>

      {methodologiesData.map((model, idx) => (
        <motion.div
          key={model.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <Card className="mb-5 border-0 shadow-sm rounded-4 overflow-hidden">
            <Card.Header className="bg-primary text-white p-4 border-0">
              <h3 className="mb-1 fw-bold">{model.nameAr}</h3>
              <div className="text-white-50 text-english small">{model.name}</div>
            </Card.Header>
            <Card.Body className="p-4">
              
              <div className="mb-4 bg-light p-4 rounded-3 text-english border-start border-primary border-4">
                <p className="mb-0 fs-5">{model.description}</p>
              </div>

              <Row className="g-4 mb-4">
                <Col md={6}>
                  <div className="h-100 p-4 bg-white border rounded-4">
                    <h5 className="fw-bold text-dark mb-3 d-flex align-items-center">
                      <HelpCircle size={20} className="ms-2 text-primary" />
                      إمتى نستخدمه؟ (When to use)
                    </h5>
                    <p className="mb-0 lh-lg">{model.whenToUseAr}</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="h-100 p-4 bg-white border rounded-4">
                    <h5 className="fw-bold text-dark mb-3 d-flex align-items-center">
                      <Target size={20} className="ms-2 text-success" />
                      ليه بنختاره؟ (Why this model)
                    </h5>
                    <p className="mb-0 lh-lg">{model.whyAr}</p>
                  </div>
                </Col>
              </Row>

              <Row className="g-4">
                <Col md={6}>
                  <h6 className="fw-bold text-success mb-3 d-flex align-items-center">
                    <CheckCircle size={18} className="ms-2" />
                    المميزات (Advantages):
                  </h6>
                  <ListGroup variant="flush">
                    {model.advantages.map((adv, i) => (
                      <ListGroup.Item key={i} className="border-0 px-0 py-2 bg-transparent d-flex">
                        <span className="ms-2">•</span> {adv}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <h6 className="fw-bold text-danger mb-3 d-flex align-items-center">
                    <XCircle size={18} className="ms-2" />
                    العيوب (Disadvantages):
                  </h6>
                  <ListGroup variant="flush">
                    {model.disadvantages.map((dis, i) => (
                      <ListGroup.Item key={i} className="border-0 px-0 py-2 bg-transparent d-flex">
                        <span className="ms-2">•</span> {dis}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Row>

              <Alert variant="warning" className="mt-4 border-0 rounded-4 d-flex align-items-center bg-opacity-25">
                <AlertTriangle size={24} className="ms-3 text-warning flex-shrink-0" />
                <div>
                  <h6 className="fw-bold mb-1">تريكة امتحان!</h6>
                  <p className="mb-0 small">{model.examTrick}</p>
                </div>
              </Alert>

            </Card.Body>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Methodologies;
