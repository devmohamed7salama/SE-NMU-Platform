import { Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import lecturesData from '../data/lectures.json';
import { BookOpen, ChevronLeft } from 'lucide-react';

const LecturesList = () => {
  return (
    <div>
      <div className="mb-5 border-bottom pb-4">
        <h2 className="fw-bold d-flex align-items-center text-primary">
          <BookOpen className="me-2 ms-3" size={32} />
          المحاضرات
        </h2>
        <p className="text-muted lead">اختار المحاضرة اللي عايز تذاكرها، كل محاضرة متقسمة لمواضيع عشان تسهل عليك المذاكرة.</p>
      </div>

      <Row className="g-4">
        {lecturesData.map((lecture) => (
          <Col md={6} key={lecture.id}>
            <Card className="h-100 border-0 shadow-sm hover-lift rounded-4">
              <Card.Body className="d-flex flex-column p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <Badge bg="primary" className="px-3 py-2 rounded-pill">
                    {lecture.topics.length} مواضيع
                  </Badge>
                </div>
                <Card.Title className="fw-bold fs-4 mb-2">{lecture.titleAr}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted text-english">{lecture.title}</Card.Subtitle>
                <Card.Text className="text-secondary flex-grow-1">
                  {lecture.descriptionAr}
                </Card.Text>
                <Link to={`/lectures/${lecture.id}`} className="btn btn-outline-primary rounded-pill mt-3 d-flex justify-content-center align-items-center">
                  ابدأ المذاكرة
                  <ChevronLeft size={18} className="me-2" />
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LecturesList;
