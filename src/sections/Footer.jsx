import { profile, socials, navLinks, productionApps } from '../data'

const Footer = () => (
  <footer className="footer">
    <div className="container footer__grid">
      <div className="footer__brand">
        <a href="#top" className="nav__logo">
          <span className="nav__mark">P</span>
          {profile.name}
        </a>
        <p>{profile.role}. Building mobile apps people love to use.</p>
        <div className="footer__social">
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4>Navigate</h4>
        <ul>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <h4>Live apps</h4>
        <ul>
          {productionApps.map((a) => (
            <li key={a.name}>
              <a href={a.platforms[0].url} target="_blank" rel="noopener noreferrer">
                {a.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Contact</h4>
        <ul>
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <a href={profile.whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
          <li>
            <a href={profile.resume} download>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container footer__bottom">
      <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
      <a href="#top">
        Back to top <i className="bx bx-up-arrow-alt" />
      </a>
    </div>
  </footer>
)

export default Footer
