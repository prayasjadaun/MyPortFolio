import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile, projects } from '../data'

const marquee = ['App shipped', 'API deployed', 'Bug squashed', 'Build passed', ...projects.map((p) => p.title)]

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')
    emailjs
      .sendForm('service_ca55fvs', 'template_fvzzx0e', form.current, { publicKey: '02B5ZnMFcesoGrAph' })
      .then(() => {
        setStatus('sent')
        form.current.reset()
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section className="cta" id="contact">
      <div className="cta__bg" />
      <div className="container cta__inner">
        <div className="cta__copy reveal">
          <span className="eyebrow eyebrow--light">Get in touch</span>
          <h2 className="cta__title">Let&apos;s build your next app together.</h2>
          <p className="cta__text">Tell me about your project — I usually reply within a day.</p>
          <div className="cta__cards">
            <a className="contact-card" href={`mailto:${profile.email}`}>
              <i className="bx bx-envelope" />
              <span>
                <small>Email</small>
                <strong>{profile.email}</strong>
              </span>
            </a>
            <a className="contact-card" href={profile.whatsappLink} target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-whatsapp" />
              <span>
                <small>WhatsApp</small>
                <strong>{profile.whatsapp}</strong>
              </span>
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="form reveal">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Project
            <textarea name="project" rows="5" placeholder="What are you building?" required />
          </label>
          <button className="btn btn--primary btn--lg btn--block" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'} <i className="bx bx-send" />
          </button>
          {status === 'sent' && <p className="form__note form__note--ok">Thanks! Your message is on its way.</p>}
          {status === 'error' && (
            <p className="form__note form__note--err">Something went wrong — please email me directly.</p>
          )}
        </form>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((m, i) => (
            <span className="marquee__item" key={i}>
              <i className="bx bxs-check-circle" /> {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
