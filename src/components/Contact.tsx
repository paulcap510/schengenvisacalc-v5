import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-heading">Contact</div>
      <p>
        Feel free to get in touch at{' '}
        <a href="mailto:paulcapob@gmail.com" className="contact-email">
          paulcapob@gmail.com
        </a>
      </p>
      <div className="connect-div-icons">
        <a
          href="https://twitter.com/yourTwitterHandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yourLinkedInProfile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
