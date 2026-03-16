import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>CIJ Academy</h4>
            <p>
              Cebu International Junior Academy is a premier English language academy
              located in the beautiful city of Cebu, Philippines. We provide quality
              education for students of all ages.
            </p>
          </div>
          <div>
            <h4>About Us</h4>
            <ul className="footer-links">
              <li><Link href="/about/greeting">Greeting</Link></li>
              <li><Link href="/about/history">History</Link></li>
              <li><Link href="/about/why-choose-cij">Why Choose CIJ</Link></li>
            </ul>
          </div>
          <div>
            <h4>Programs</h4>
            <ul className="footer-links">
              <li><Link href="/programs/esl">ESL Program</Link></li>
              <li><Link href="/programs/ielts">IELTS Program</Link></li>
              <li><Link href="/programs/toeic">TOEIC Program</Link></li>
              <li><Link href="/programs/business">Business English</Link></li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/levels">Levels</Link></li>
              <li><Link href="/registration/how-to-register">Registration</Link></li>
              <li><Link href="/registration/school-rules">School Rules</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CIJ Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
