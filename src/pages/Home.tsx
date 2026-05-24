import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Layers, Play, CheckSquare, Zap, Moon, GitBranch } from 'lucide-react';

const Home = () => {
  const features = [
    { title: 'المحاضرات', icon: <Layers size={40} />, path: '/lectures', desc: 'شرح مبسط للمحاضرات باللغتين العربية والإنجليزية', color: 'primary' },
    { title: 'منهجيات التطوير', icon: <GitBranch size={40} />, path: '/methodologies', desc: 'مقارنة بين Waterfall و Agile و Spiral وغيرها من النماذج', color: 'info' },
    { title: 'الرسومات والـ Use Cases', icon: <Play size={40} />, path: '/use-cases', desc: 'تحليل دقيق لكافة رسومات المنهج واستراتيجيات حلها', color: 'success' },
    { title: 'بنك الأسئلة', icon: <CheckSquare size={40} />, path: '/exam-prep', desc: 'تدرب على أسئلة الامتحان مع الشرح التفصيلي للإجابات', color: 'danger' },
    { title: 'البطاقات الذكية', icon: <Zap size={40} />, path: '/flashcards', desc: 'مراجعة سريعة للمصطلحات باستخدام الفلاش كاردز', color: 'warning' },
    { title: 'ليلة الامتحان', icon: <Moon size={40} />, path: '/night-before-exam', desc: 'خلاصة المنهج وتجميعة أهم التركات المتوقعة', color: 'dark' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="text-center py-5 mb-5 glass-card">
        <h1 className="display-4 fw-bold mb-4 text-primary">هندسة البرمجيات - المراجعة النهائية</h1>
        <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>
          منصة تعليمية تفاعلية مصممة خصيصاً لطلاب كلية علوم وهندسة الحاسب لمساعدتك على فهم المفاهيم المعقدة، التدرب على الأسئلة، وتجهيزك لامتحان السوفت وير.
        </p>
        <Link to="/lectures" className="btn btn-primary btn-lg px-5 rounded-pill shadow-sm">
          ابدأ المذاكرة الآن
        </Link>
      </div>

      {/* Features Grid */}
      <Row className="g-4">
        {features.map((feature, idx) => (
          <Col md={6} lg={4} key={idx}>
            <Card className="h-100 border-0 shadow-sm hover-lift text-center py-4 px-2 rounded-4">
              <Card.Body>
                <div className={`text-${feature.color} mb-3`}>
                  {feature.icon}
                </div>
                <Card.Title className="fw-bold mb-3 h4">{feature.title}</Card.Title>
                <Card.Text className="text-muted mb-4">{feature.desc}</Card.Text>
                <Link to={feature.path} className={`btn btn-outline-${feature.color} rounded-pill w-100`}>
                  تصفح القسم
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
