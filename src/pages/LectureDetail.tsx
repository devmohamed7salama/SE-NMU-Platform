import { useParams, Link } from 'react-router-dom';
import { Badge, Card, Alert, Row, Col } from 'react-bootstrap';
import lecturesData from '../data/lectures.json';
import { ArrowRight, Lightbulb, AlertTriangle, Key, ChevronLeft, ChevronRight } from 'lucide-react';

interface Topic {
  id: string;
  title: string;
  titleAr: string;
  contentEn: string;
  contentAr: string;
  whyItMatters?: string;
  examTrick?: string;
  keywords?: string[];
}

interface Lecture {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  topics: Topic[];
}

const typedLecturesData = lecturesData as Lecture[];

const LectureDetail = () => {
  const { id } = useParams<{ id: string }>();
  const currentIndex = typedLecturesData.findIndex(l => l.id === id);
  const lecture = typedLecturesData[currentIndex];

  if (!lecture) {
    return <div className="text-center py-5">المحاضرة غير موجودة</div>;
  }

  const prevLecture = currentIndex > 0 ? typedLecturesData[currentIndex - 1] : null;
  const nextLecture = currentIndex < typedLecturesData.length - 1 ? typedLecturesData[currentIndex + 1] : null;

  return (
    <div>
      <Link to="/lectures" className="btn btn-light mb-4 d-inline-flex align-items-center rounded-pill shadow-sm">
        <ArrowRight size={18} className="ms-2" />
        العودة للمحاضرات
      </Link>

      <div className="mb-5 bg-white p-5 rounded-4 shadow-sm border-start border-primary border-5">
        <h1 className="fw-bold text-primary mb-2">{lecture.titleAr}</h1>
        <h4 className="text-muted text-english mb-4">{lecture.title}</h4>
        <p className="lead mb-0">{lecture.descriptionAr}</p>
      </div>

      <div className="topics-container mb-5">
        {lecture.topics.map((topic, index) => (
          <Card key={topic.id} className="mb-5 border-0 shadow-sm rounded-4 overflow-hidden">
            <Card.Header className="bg-light p-4 border-0">
              <div className="d-flex align-items-center">
                <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center fw-bold ms-3" style={{ width: '40px', height: '40px' }}>
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-0 fw-bold">{topic.titleAr}</h3>
                  <span className="text-muted text-english small">{topic.title}</span>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="p-4">
              
              <div className="mb-4 bg-light p-4 rounded-3 text-english border-start border-secondary border-4">
                <p className="mb-0 fs-5">{topic.contentEn}</p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold text-primary mb-3">الشرح بالعربي:</h5>
                <p className="fs-5 lh-lg">{topic.contentAr}</p>
              </div>

              {topic.whyItMatters && (
                <Alert variant="info" className="d-flex align-items-start border-0 rounded-4">
                  <Lightbulb size={24} className="ms-3 flex-shrink-0 mt-1 text-info" />
                  <div>
                    <h6 className="fw-bold mb-2">ليه المفهوم ده مهم؟</h6>
                    <p className="mb-0">{topic.whyItMatters}</p>
                  </div>
                </Alert>
              )}

              {topic.examTrick && (
                <Alert variant="danger" className="d-flex align-items-start border-0 rounded-4 mt-3 bg-opacity-10" style={{backgroundColor: '#fff3f3'}}>
                  <AlertTriangle size={24} className="ms-3 flex-shrink-0 mt-1 text-danger" />
                  <div>
                    <h6 className="fw-bold mb-2 text-danger">تريكة امتحان!</h6>
                    <p className="mb-0 text-dark">{topic.examTrick}</p>
                  </div>
                </Alert>
              )}

              {topic.keywords && topic.keywords.length > 0 && (
                <div className="mt-4 pt-4 border-top">
                  <h6 className="fw-bold mb-3 d-flex align-items-center text-secondary">
                    <Key size={18} className="ms-2" />
                    كلمات مفتاحية (Keywords):
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {topic.keywords.map(kw => (
                      <Badge bg="secondary" className="px-3 py-2 text-english" key={kw}>{kw}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Navigation Footer */}
      <hr className="my-5" />
      <Row className="g-4 pb-5">
        <Col xs={6}>
          {prevLecture && (
            <Link to={`/lectures/${prevLecture.id}`} className="text-decoration-none group">
              <Card className="h-100 border-0 shadow-sm hover-lift rounded-4 p-3 bg-white">
                <div className="text-muted small mb-2 d-flex align-items-center">
                  <ChevronRight size={16} className="ms-1" />
                  المحاضرة السابقة
                </div>
                <div className="fw-bold text-dark">{prevLecture.titleAr}</div>
              </Card>
            </Link>
          )}
        </Col>
        <Col xs={6} className="text-start">
          {nextLecture && (
            <Link to={`/lectures/${nextLecture.id}`} className="text-decoration-none group">
              <Card className="h-100 border-0 shadow-sm hover-lift rounded-4 p-3 bg-white">
                <div className="text-muted small mb-2 d-flex align-items-center justify-content-end">
                  المحاضرة التالية
                  <ChevronLeft size={16} className="me-1" />
                </div>
                <div className="fw-bold text-primary text-end">{nextLecture.titleAr}</div>
              </Card>
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default LectureDetail;

