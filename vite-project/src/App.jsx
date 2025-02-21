{/*Descrizione:
Create un nuovo progetto React e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Per oggi diamo priorità alla struttura: quando è tutto bello solido, passiamo al CSS!
Note:
- Il font utilizzato è Open Sans
Bonus:
- Creare un componente aggiuntivo per gestire la fascia azzurra con le icone. 
creando un array di link nell’header e sfruttandolo in maniera dinamica. Una volta fatto, provate a centralizzare i dati in App.jsx e a passarli come prop.

 create un nuovo componente riutilizzabile per visualizzare le card dei fumetti, sfruttando l’array di oggetti in allegato.
Una volta inseriti tutti i contenuti dinamicamente, completate il vostro layout e rifinite i dettagli col CSS.
*/}

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

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

function App() {

  return (
    <>
    <Header labelsList = { labels }/>
    <Main />
    <Footer />
    </>
  )
}

export default App
