export const Work = () => {
  return (
    <div className="work">
        <h3>REPOSITORIOS</h3>
        <div className="container">
        <div className="column react">
          <img className="eLogo" src="/src/reactlogoq.png"/>
          <p>
            <a className="links" href="https://github.com/eliangerard/chat-react">React Chat / Firebase</a><br/>
            <a className="links" href="https://github.com/eliangerard/react-gif-expert">GIF App / GIPHY API</a><br/><br/>
          </p>
        </div>
        <div className="column js">
          <img className="eLogo" src="/src/JavaScript-logo.png"/>
          <p>
            <a className="links" href="https://github.com/eliangerard/memer-discord-bot">Multipurpose Discord Bot</a><br/>
            <a className="links" href="https://github.com/eliangerard/Discord-Assistant">Google Assistant in a Discord Bot</a><br/>
            <a className="links" href="https://github.com/eliangerard/discord-tts-bot">Discord Bot with TTS</a><br/>
          </p>
        </div>
        </div>
    </div>
  )
}
