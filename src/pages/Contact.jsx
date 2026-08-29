import { useState } from 'react';
import PageDivider from '../components/PageDivider.jsx';
import Footer from '../components/Footer.jsx';
import GlassCard from '../components/GlassCard.jsx';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // Placeholder only — wire this up to a real form endpoint / mailto later.
    setSubmitted(true);
  }

  return (
    <PageDivider id="page-contact" title="LET'S TALK">
      <div className="contact-grid">
        <GlassCard title="GET IN TOUCH" className="contact-info">
          <p className="contact-blurb">
            Have a brand, campaign, or video project in mind? Reach out — details below are
            placeholders until you drop in the real ones.
          </p>
          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href="mailto:hello@example.com">hello@example.com</a>
            </li>
            <li>
              <span>Instagram</span>
              <a href="#">@jerryawaghor</a>
            </li>
            <li>
              <span>Location</span>
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </GlassCard>

        <GlassCard title="SEND A MESSAGE" className="contact-form-card">
          {submitted ? (
            <p className="contact-success">Thanks — this is a placeholder form, so nothing was actually sent yet.</p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Message
                <textarea name="message" rows={4} required />
              </label>
              <button type="submit">Send message</button>
            </form>
          )}
        </GlassCard>
      </div>

      <Footer />
    </PageDivider>
  );
}
