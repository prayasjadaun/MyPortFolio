import { profile, highlights } from '../data'

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero__inner container">
        <div className="hero__copy reveal">
          <span className="eyebrow">{profile.role}</span>
          <h1 className="hero__title">{profile.headline}</h1>
          <p className="hero__text">{profile.intro}</p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary btn--lg">
              Say hello <i className="bx bx-right-arrow-alt" />
            </a>
            <a href="#work" className="btn btn--outline btn--lg">
              View my work
            </a>
          </div>
          <p className="hero__note">
            Flutter · Django · Node · AWS <span>•</span> Android &amp; iOS
          </p>
        </div>

        <div className="hero__visual reveal">
          <div className="blob blob--a" />
          <div className="blob blob--b" />
          <div className="blob blob--c" />
          <div className="hero__card">
            <img src={profile.photo} alt={profile.name} className="hero__photo" />
            <div className="hero__card-body">
              <strong>{profile.name}</strong>
              <span>{profile.role}</span>
            </div>
          </div>
          <div className="chip chip--1">
            <i className="bx bxs-check-circle" /> Housypoint live on both stores
          </div>
          <div className="chip chip--2">
            <i className="bx bx-calendar-check" /> Available for projects
          </div>
        </div>
      </div>

      <div className="stats container reveal">
        {highlights.map((h) => (
          <div className="stats__item" key={h.label}>
            <span className="stats__value">{h.value}</span>
            <span className="stats__label">{h.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
