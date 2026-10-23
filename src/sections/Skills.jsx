import { skills } from '../data'

const Skills = () => (
  <section className="section section--tint" id="skills">
    <div className="container">
      <div className="section__head reveal">
        <span className="eyebrow">Tech stack</span>
        <h2 className="section__title">Tools I build with every day.</h2>
      </div>
      <div className="skills reveal">
        {skills.map((s) => (
          <div className="skill" key={s.name}>
            <span className="skill__icon">
              <i className={s.icon} />
            </span>
            <span className="skill__text">
              <span className="skill__name">{s.name}</span>
              <span className={`skill__level ${s.level === 'Advanced' ? 'is-adv' : ''}`}>{s.level}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
