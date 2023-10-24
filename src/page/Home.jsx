import Game from "../img/game.png"


import "../Style/home.css"

const Home = () => {
  return (
    <div className="home">

        <div className="menu">
            <img className="img-game" src={Game} alt="game" />

            <a href="http://localhost:5175/">Street-Fighter</a>
            <a href="http://localhost:5175/">Packman</a>
            <a href="http://localhost:5175/">Quiz</a>
            <a href="http://localhost:5175/">tetriz</a>
            
        </div>
        
    </div>
  )
}

export default Home