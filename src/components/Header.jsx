export const Header = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <button className="header-button">
          <img className="logo" src="/src/logo.png"/>
        </button>
        <button className="header-button sections">SOBRE MI</button>
        <button className="header-button sections">EXPERIENCIA</button>
        <button className="header-button sections">REPOSITORIOS</button>
      </div>
    </div>
  )
}
