//i componenti sono delle funzioni che possiamo scrivere nel metodo classico o in arrow function
//ci deve essere sempre il return e dentro le parentesi andremo a scrivere la logica
function Header() {

    return (
      <header>
        <div className="container">
          <figure>
            <img src="./src/assets/img/dc-logo.png" alt="" />
          </figure>

          <ul>
            <li><a href="">CHARACTERS</a></li>
            <li><a href="">COMICS</a></li>
            <li><a href="">MOVIES</a></li>
            <li><a href="">TV</a></li>
            <li><a href="">GAMES</a></li>
            <li><a href="">COLLECTIBLES</a></li>
            <li><a href="">VIDEOS</a></li>
            <li><a href="">FANS</a></li>
            <li><a href="">NEWS</a></li>
            <li><a href="">SHOP</a></li>
          </ul>
        </div>
      </header>  
    )
  }

  export default Header