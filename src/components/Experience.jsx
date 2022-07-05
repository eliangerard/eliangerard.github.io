export const Experience = () => {
  return (
    <>
    <h2 className="experience">EXPERIENCIA</h2>
    <div className="container">
        <div className="column react">
          <img className="eLogo" src="/src/reactlogoq.png"/>
          <p><a href="https://www.udemy.com/share/103dsU3@e0xsOig0V9CTZndVR99FtUnGV1clVvDvN6Z-aY1t7iL7kcjtwtjWxnzqprzFWEnafA==/">React: De cero a experto ( Hooks y MERN )</a>
          <br/><br/>Testing con Jest y React Testing Library</p>
        </div>
        <div className="column js">
          <img className="eLogo" src="/src/JavaScript-logo.png"/>
          <p>Desarrollo de bots con Discord.js a través de node.js, implementando varios paquetes a través de npm</p>
        </div>
        <div className="column tec">
          <img className="eLogo" src="/src/tecnmlogo.png"/>
          <p>
            Instituto Tecnológico de Chihuahua II <br/>
            - Ingeniería en Sistemas Computacionales<br/>
              + Java, HTML, CSS, MySQL

          </p>
        </div>
    </div>
    </>
  )
}
