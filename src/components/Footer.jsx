import React from 'react'

const redirect = (link) => {
  return window.location.href = link;
}

export const Footer = () => {
  return (
    <>
      <p className='footer text'>En mis tiempos libres también me gusta desarrollar videojuegos con Unity y C#, consulta mi página en Play Store :)</p>
      <div className='footer'>
      <button className='footer btn'>
        <img className='fLogo' src='/src/github.png'/>
      </button>
      <button className='footer btn'><img className='fLogo' src='/src/174857.png'/></button>
      <button className='footer btn'><img className='fLogo' src='/src/Google_Play.png'/></button>
    </div>
    </>
    
  )
}
