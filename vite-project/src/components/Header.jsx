//i componenti sono delle funzioni che possiamo scrivere nel metodo classico o in arrow function
//ci deve essere sempre il return e dentro le parentesi andremo a scrivere la logica

const labels = [
  'CHARACTERS',
  'COMICS',
  'MOVIES',
  'TV',
  'GAMES',
  'COLLECTIBLES',
  'VIDEOS',
  'FANS',
  'NEWS',
  'SHOP'
];

function Header() {

    return (
      <header>
        <div className="container">
          <figure>
            <img src="./src/assets/img/dc-logo.png" alt="" />
          </figure>

          <ul>
            (labels.map((label, index) => (
              <li key={index}><a href="">{label}</a></li>
            )  ))
          </ul>
        </div>
      </header>  
    )
  }

  export default Header
  