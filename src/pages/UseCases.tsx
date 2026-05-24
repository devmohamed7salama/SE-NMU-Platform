import { Card, Badge, Row, Col, Alert } from 'react-bootstrap';
import useCasesData from '../data/use-cases.json';
import { Play, Users, Activity, HelpCircle } from 'lucide-react';
import Mermaid from '../components/common/Mermaid';

const UseCases = () => {
  // Helper to render text with bold highlights
  const renderHighlightedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={i} className="keyword-highlight">{part.slice(2, -2)}</span>;
      }
      return part;
    });
  };

  return (
    <div>
      <div className="mb-5 border-bottom pb-4">
        <h2 className="fw-bold d-flex align-items-center text-success">
          <Play className="me-2 ms-3" size={32} />
          تحليل الرسومات واستراتيجية الامتحان
        </h2>
        <p className="text-muted lead">هنا بنتعلم إزاي نقرأ المسألة، نطلع الـ Actors والـ Requirements، ونرسم الـ Diagram الصح.</p>
      </div>

      {useCasesData.map(uc => (
        <Card key={uc.id} className="mb-5 border-0 shadow-sm rounded-4 overflow-hidden">
          <Card.Header className="bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center flex-wrap">
              <h3 className="mb-0 fw-bold text-dark">{uc.title}</h3>
              <Badge bg="primary" className="me-3 px-2 py-1 small shadow-sm">
                {uc.category === 'Activity Diagram' ? 'نشاط (Activity)' : 
                 uc.category === 'Class Diagram' ? 'فئات (Class)' : 
                 uc.category === 'Sequence Diagram' ? 'تسلسل (Sequence)' : 'حالة استخدام (Use Case)'}
              </Badge>
            </div>
          </Card.Header>
          <Card.Body className="p-4">
            
            <Row className="g-4">
              <Col lg={12}>
                {/* 1. Descriptions at Top */}
                <div className="mb-4 p-4 bg-light rounded-4 border-start border-success border-4">
                  <div className="mb-4">
                    <h5 className="fw-bold text-success mb-3">وصف الحالة (Scenario):</h5>
                    <p className="fs-5 lh-lg mb-0">{renderHighlightedText(uc.scenarioAr)}</p>
                  </div>
                  <div className="text-english text-muted">
                    <p className="mb-0 fs-6">{renderHighlightedText(uc.scenarioEn)}</p>
                  </div>
                </div>

                {/* 2. Exam Solving Strategy */}
                <div className="mb-4">
                  <h5 className="fw-bold text-danger mb-3 d-flex align-items-center">
                    <HelpCircle size={24} className="ms-2" />
                    إزاي تحل السؤال ده في الامتحان؟
                  </h5>
                  <Alert variant="danger" className="bg-opacity-10 border-0 rounded-4 p-4 shadow-sm">
                    <p className="fs-5 lh-lg mb-0 text-dark">
                      {renderHighlightedText(uc.examStrategyAr)}
                    </p>
                  </Alert>
                </div>

                {/* 3. Actors / Elements */}
                <div className="mb-4">
                  <h5 className="fw-bold text-primary mb-3 d-flex align-items-center">
                    <Users size={20} className="ms-2" />
                    العناصر الأساسية (Actors / Classes):
                  </h5>
                  <div className="d-flex flex-wrap gap-2 text-english">
                    {uc.actors.map(actor => (
                      <Badge bg="white" text="dark" className="border px-3 py-2 shadow-sm" key={actor}>{actor}</Badge>
                    ))}
                  </div>
                </div>

                {/* 4. The Diagram at Bottom */}
                <div className="mt-5 pt-3 border-top">
                  <h5 className="fw-bold text-dark mb-4 d-flex align-items-center">
                    <Activity size={24} className="ms-2 text-primary" />
                    رسم الـ {uc.category === 'Activity Diagram' ? 'نشاط (Activity Diagram)' : 
                             uc.category === 'Class Diagram' ? 'فئات (Class Diagram)' : 
                             uc.category === 'Sequence Diagram' ? 'تسلسل (Sequence Diagram)' : 'حالة استخدام (Use Case Diagram)'}:
                  </h5>
                  <Mermaid chart={uc.mermaid} />
                </div>
              </Col>
            </Row>

          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UseCases;
