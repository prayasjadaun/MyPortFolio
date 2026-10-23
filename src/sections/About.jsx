import { useState } from 'react'
import { profile, testimonials } from '../data'

const About = () => {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about reveal">
          <div className="about__media">
            <div className="blob blob--f" />
            <img src={profile.aboutPhoto} alt={profile.name} />
          </div>
          <div className="about__copy">
            <span className="eyebrow">About me</span>
            <h2 className="section__title">Hi, I&apos;m {profile.name.split(' ')[0]}.</h2>
            <p className="section__text">{profile.about}</p>
            <a href={profile.resume} download="Prayas_Jadaun_Resume.pdf" className="btn btn--primary">
              Download resume <i className="bx bx-download" />
            </a>
          </div>
        </div>

        <div className="section__head section__head--spaced reveal">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section__title">What my colleagues say.</h2>
        </div>

        <div className="quotes reveal">
          <div className="quotes__people" role="tablist">
            {testimonials.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={active === i}
                className={`person ${active === i ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <img src={p.image} alt="" />
                <span>
                  <strong>{p.name}</strong>
                  <small>{p.role}</small>
                </span>
              </button>
            ))}
          </div>
          <figure className="quote" key={t.id}>
            <i className="bx bxs-quote-alt-left quote__mark" />
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <img src={t.image} alt="" />
              <span>
                <strong>{t.name}</strong>
                <small>{t.role}</small>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default About
