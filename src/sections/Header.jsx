import { useEffect, useState } from 'react'
import { profile, navLinks } from '../data'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <div className="announce">
        <span className="announce__dot" />
        Open to new opportunities —{' '}
        <a href="#contact">let&apos;s talk about your app</a>
      </div>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner container">
          <a href="#top" className="nav__logo" onClick={close}>
            <span className="nav__mark">P</span>
            {profile.name}
          </a>

          <nav className={`nav__menu ${open ? 'nav__menu--open' : ''}`}>
            <ul className="nav__links">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={close}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav__actions">
              <a href={profile.resume} download="Prayas_Jadaun_Resume.pdf" className="btn btn--ghost">
                Resume
              </a>
              <a href="#contact" className="btn btn--primary" onClick={close}>
                Let&apos;s talk
              </a>
            </div>
          </nav>

          <div className="nav__end">
            <button
              className="theme-toggle"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <i className={theme === 'dark' ? 'bx bx-sun' : 'bx bx-moon'} />
            </button>
            <button
              className="nav__toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <i className={open ? 'bx bx-x' : 'bx bx-menu'} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
