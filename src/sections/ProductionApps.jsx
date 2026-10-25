import { productionApps } from '../data'

const storeIcon = { play: 'bx bxl-play-store', apple: 'bx bxl-apple' }

const ProductionApps = () => (
  <section className="section" id="apps">
    <div className="container">
      <div className="section__head reveal">
        <span className="eyebrow">In production</span>
        <h2 className="section__title">Apps real users download today.</h2>
        <p className="section__text">
          Built and shipped at Pro Housypoint Tech Solutions — live on Google Play and the App Store.
        </p>
      </div>

      <div className="apps">
        {productionApps.map((app) => (
          <article className={`app app--${app.tone} reveal`} key={app.name}>
            <div className="app__top">
              {app.icon ? (
                <img src={app.icon} alt={`${app.name} icon`} className="app__icon" />
              ) : (
                <span className="app__icon app__icon--text">{app.initials}</span>
              )}
              <span className="app__live">
                <span className="app__live-dot" /> Live
              </span>
            </div>

            <h3 className="app__name">{app.name}</h3>
            <span className="app__category">{app.category}</span>
            <p className="app__text">{app.description}</p>

            {app.highlights && (
              <ul className="app__highlights">
                {app.highlights.map((h) => (
                  <li key={h}>
                    <i className="bx bx-check" /> {h}
                  </li>
                ))}
              </ul>
            )}

            <ul className="app__features">
              {app.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            {app.note && (
              <a href="#contact" className="app__note">
                <i className="bx bxl-android" /> {app.note}
              </a>
            )}
            <div className="app__stores">
              {app.platforms.map((p) => (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-btn"
                >
                  <i className={storeIcon[p.store]} />
                  <span>
                    <small>{p.store === 'apple' ? 'Download on the' : 'Get it on'}</small>
                    {p.label}
                  </span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ProductionApps
