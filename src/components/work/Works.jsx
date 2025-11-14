import React, { useEffect, useState } from 'react'
import WorksItems from './WorksItems'
import { projectsData, projectsNav } from './Data'
const Works = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'All') {
      const sortedData = [...projectsData].sort((a, b) => {
        if (a.type === 'industry' && b.type === 'project') return -1;
        if (a.type === 'project' && b.type === 'industry') return 1;
        return 0;
      });
      setProjects(sortedData);
    } else if (item.name === 'Industry') {
      const industryApps = projectsData.filter(project => project.type === 'industry');
      setProjects(industryApps);
    } else {
      const newProjects = projectsData.filter(project => {
        return project.category === item.name && project.type === 'project';
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <>
      <div className='work__filters'>
        {projectsNav.map((item, index) => {
          return <span onClick={(e) => {
            handleClick(e, index);
          }} className={`${active === index ? 'active-work' : ""}
        work__item`} key={index}>{item.name}</span>
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorksItems items={item} key={item.id} />
        })}
      </div>
    </>
  )
}

export default Works
