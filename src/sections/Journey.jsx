import { useState } from 'react'
import { journey } from '../data'

const Journey = () => {
  const [active, setActive] = useState(0)
  const current = journey[active]

  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">My journey</span>
          <h2 className="section__title">From classroom to production apps.</h2>
        </div>

        <div className="journey reveal">
          <div className="journey__tabs" role="tablist">
            {journey.map((j, i) => (
              <button
                key={j.key}
                role="tab"
                aria-selected={active === i}
                className={`journey__tab ${active === i ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="journey__icon">
                  <i className={j.icon} />
                </span>
                <span>
                  <strong>{j.label}</strong>
                  <small>
                    {j.items.length} {j.items.length === 1 ? 'entry' : 'entries'}
                  </small>
                </span>
              </button>
            ))}
          </div>

          <div className="journey__panel">
            <div className="blob blob--e" />
            <ol className="timeline" key={current.key}>
              {current.items.map((it) => (
                <li className="timeline__item" key={it.title}>
                  <span className="timeline__dot" />
                  <div className="timeline__card">
                    <span className="timeline__date">
                      <i className="bx bx-calendar" /> {it.date}
                    </span>
                    <h3>{it.title}</h3>
                    <p>{it.place}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
