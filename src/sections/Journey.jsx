import { useState } from 'react'
import { journey } from '../data'

// Months from a 'YYYY-MM' start to the current month, counting both ends.
const monthsSince = (start) => {
  const [y, m] = start.split('-').map(Number)
  const now = new Date()
  return (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m) + 1
}

const formatDuration = (months) => {
  const yrs = Math.floor(months / 12)
  const mos = months % 12
  const parts = []
  if (yrs) parts.push(`${yrs} ${yrs === 1 ? 'yr' : 'yrs'}`)
  if (mos) parts.push(`${mos} ${mos === 1 ? 'mo' : 'mos'}`)
  return parts.join(' ')
}

const totalExperience = formatDuration(
  journey
    .find((j) => j.key === 'experience')
    .items.filter((it) => it.start)
    .reduce((sum, it) => sum + monthsSince(it.start), 0)
)

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
                    {j.key === 'experience'
                      ? `${totalExperience} total`
                      : `${j.items.length} ${j.items.length === 1 ? 'entry' : 'entries'}`}
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
                      {it.start && (
                        <span className="timeline__duration">
                          · {formatDuration(monthsSince(it.start))}
                        </span>
                      )}
                    </span>
                    <h3>{it.title}</h3>
                    <p>{it.place}</p>
                    {it.points && (
                      <ul className="timeline__points">
                        {it.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    )}
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
