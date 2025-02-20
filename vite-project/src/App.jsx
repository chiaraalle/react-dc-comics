{/*Descrizione:
Create un nuovo progetto React e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Per oggi diamo priorità alla struttura: quando è tutto bello solido, passiamo al CSS!
Note:
- Il font utilizzato è Open Sans
Bonus:
- Creare un componente aggiuntivo per gestire la fascia azzurra con le icone. 

creando un array di link nell’header e sfruttandolo in maniera dinamica. Una volta fatto, provate a centralizzare i dati in App.jsx e a passarli come prop.
*/}

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {

  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export default App
