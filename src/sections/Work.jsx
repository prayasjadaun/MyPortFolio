import { useMemo, useState } from 'react'
import { projects, projectFilters } from '../data'

const Work = () => {
  const [filter, setFilter] = useState('All')
  const featured = projects.find((p) => p.featured)

  const list = useMemo(
    () => projects.filter((p) => !p.featured && (filter === 'All' || p.category === filter)),
    [filter]
  )

  return (
    <section className="section section--tint" id="work">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Selected work</span>
          <h2 className="section__title">Apps I&apos;ve designed, built and shipped.</h2>
        </div>

        {featured && (filter === 'All' || filter === 'Industry') && (
          <article className="feature reveal">
            <div className="feature__copy">
              <span className="pill pill--blue">Industry · Live</span>
              <h3 className="feature__title">{featured.title}</h3>
              <p className="feature__sub">{featured.subtitle}</p>
              <p className="feature__text">{featured.description}</p>
              <div className="feature__buttons">
                {featured.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    <i className={l.label === 'App Store' ? 'bx bxl-apple' : 'bx bxl-play-store'} />
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="feature__media">
              <div className="blob blob--d" />
              <img src={featured.image} alt={featured.title} />
            </div>
          </article>
        )}

        <div className="filters reveal" role="tablist">
          {projectFilters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`filters__btn ${filter === f ? 'is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects">
          {list.map((p) => (
            <article className="project" key={p.id}>
              <div className="project__media">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="project__body">
                <div className="project__meta">
                  <span>{p.subtitle}</span>
                  <span className="pill">{p.category}</span>
                </div>
                <h3 className="project__title">{p.title}</h3>
                <p className="project__text">{p.description}</p>
                <div className="project__links">
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="link-arrow">
                      {l.label} <i className="bx bx-right-arrow-alt" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
          {list.length === 0 && filter !== 'Industry' && (
            <p className="empty">No projects in this category yet.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Work
