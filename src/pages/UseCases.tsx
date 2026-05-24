import { Card, Badge, Row, Col } from 'react-bootstrap';
import useCasesData from '../data/use-cases.json';
import { Play, Users, AlertTriangle, Highlighter, Activity, Layout as LayoutIcon, GitCommit } from 'lucide-react';
import Mermaid from '../components/common/Mermaid';

const UseCases = () => {
  return (
    <div>
      <div className="mb-5 border-bottom pb-4">
        <h2 className="fw-bold d-flex align-items-center text-success">
          <Play className="me-2 ms-3" size={32} />
          المعرض التفاعلي للرسومات والـ Use Cases
        </h2>
        <p className="text-muted lead">تم استخراج كافة الرسومات من المحاضرات وتحويلها لنماذج تفاعلية مع تسليط الضوء على العناصر الهامة.</p>
      </div>

      {useCasesData.map(uc => (
        <Card key={uc.id} className="mb-5 border-0 shadow-sm rounded-4 overflow-hidden">
          <Card.Header className="bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
            <div>
              <h3 className="mb-1 fw-bold text-dark">{uc.titleAr}</h3>
              <div className="text-muted text-english small">{uc.title}</div>
            </div>
            <Badge bg="success" className="px-3 py-2 rounded-pill">
              {uc.category === 'Activity Diagram' && <Activity size={14} className="ms-1" />}
              {uc.category === 'Class Diagram' && <LayoutIcon size={14} className="ms-1" />}
              {uc.category === 'Sequence Diagram' && <GitCommit size={14} className="ms-1" />}
              {uc.category}
            </Badge>
          </Card.Header>
          <Card.Body className="p-4">
            
            <div className="row g-4">
              <Col lg={7}>
                <div className="mb-4">
                  <h5 className="fw-bold text-success mb-3 d-flex align-items-center">
                    <Highlighter size={20} className="ms-2" />
                    الرسم التوضيحي (Interactive Diagram):
                  </h5>
                  <Mermaid chart={uc.mermaid} />
                </div>
              </Col>
              
              <Col lg={5}>
                <div className="mb-4">
                  <h5 className="fw-bold text-primary mb-3 d-flex align-items-center">
                    <Users size={20} className="ms-2" />
                    العناصر المشتركة (Actors/Classes):
                  </h5>
                  <div className="d-flex flex-wrap gap-2 text-english">
                    {uc.actors.map(actor => (
                      <Badge bg="light" text="dark" className="border px-3 py-2" key={actor}>{actor}</Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4 p-3 bg-light rounded-3">
                  <h6 className="fw-bold mb-2">شرح الحالة:</h6>
                  <p className="small lh-lg mb-0">{uc.scenarioAr}</p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold text-dark mb-3 d-flex align-items-center">
                    <Highlighter size={18} className="ms-2 text-warning" />
                    هايلايت على النقاط المهمة (Highlights):
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {uc.highlights.map(hl => (
                      <span key={hl} className="keyword-highlight small">{hl}</span>
                    ))}
                  </div>
                </div>

                {uc.examTricks.length > 0 && (
                  <div className="bg-danger bg-opacity-10 p-3 rounded-3 border-end border-danger border-4">
                    <h6 className="fw-bold text-danger mb-2 d-flex align-items-center small">
                      <AlertTriangle size={16} className="ms-2" />
                      تركات الامتحان:
                    </h6>
                    <ul className="mb-0 small ps-0 list-unstyled">
                      {uc.examTricks.map((trick, i) => (
                        <li key={i} className="mb-1 d-flex">
                          <span className="ms-2">•</span>
                          <span>{trick}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Col>
            </div>

          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UseCases;
