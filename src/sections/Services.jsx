import { services } from '../data'

const Services = () => (
  <section className="section" id="services">
    <div className="container">
      <div className="section__head reveal">
        <span className="eyebrow">What I do</span>
        <h2 className="section__title">There&apos;s more to an app than the screens.</h2>
        <p className="section__text">
          I handle the whole journey — the mobile app, the backend behind it, and getting it live.
        </p>
      </div>
      <div className="services">
        {services.map((s) => (
          <article className={`service service--${s.tone} reveal`} key={s.title}>
            <div className="service__top">
              <span className="service__tag">{s.tag}</span>
              <span className="pill">{s.badge}</span>
            </div>
            <h3 className="service__title">{s.title}</h3>
            <p className="service__text">{s.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Services
