import "bulma/css/bulma.css"
import "./css/app.css"
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemPage from "./pages/ItemPage/ItemPage"

function App() {
    return (
		<div className="App">
			<BrowserRouter>
			<NavBar />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route exact path='/category/:categoria' element={<CategoriesPage />} />
				<Route exact path='/item/:id' element={<ItemPage />}/>
			</Routes>
			</BrowserRouter>
		</div>
    );
}

export default App;
