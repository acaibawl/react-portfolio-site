import { FaTwitter } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contact-contents">
          <h2>Contact to Me!</h2>
          <p className="description">お仕事のご相談・ご依頼など下記よりご連絡ください。</p>
          {/* TODO: URL修正 */}
          <a href="https://twitter.com/" className="btn">Contact Us <FaTwitter/></a>
        </div>
      </div>
    </div>
  );
};
