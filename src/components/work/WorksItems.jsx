import React from 'react'

function WorksItems({items}) {
  return (
    <div className='work__card' key={items.id}>
      <img src={items.image} alt="" className='work__img'/>
      <h3 className='work__title'>{items.title}</h3>
      {items.type === 'industry' && items.DemoIOS ? (
        <div className="work__links">
          <a href={items.Demo} className='work__button' target="_blank" rel="noopener noreferrer">
            Android <i className='bx bx-right-arrow-alt work__button-icon'></i>
          </a>
          <a href={items.DemoIOS} className='work__button' target="_blank" rel="noopener noreferrer">
            iOS <i className='bx bx-right-arrow-alt work__button-icon'></i>
          </a>
        </div>
      ) : (
        <a href={items.Demo} className='work__button' target="_blank" rel="noopener noreferrer">
          Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
      )}
    </div>
  )
}

export default WorksItems