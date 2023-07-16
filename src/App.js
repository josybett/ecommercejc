import "bulma/css/bulma.css"
import "./css/app.css"
import NavBar from './components/NavBar/NavBar';
import ItemListConatainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConatainer greeting={'Bienvenido, soluciones naturales'} />
    </div>
  );
}

export default App;
