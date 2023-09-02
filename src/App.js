import "bulma/css/bulma.css"
import "./css/app.css"
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemPage from "./pages/ItemPage/ItemPage"
import { CardContextProvider } from "./context/cardContext"
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage"

function App() {
    return (
		<CardContextProvider>
			<div className="App">
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route exact path='/' element={<HomePage />} />
						<Route exact path='/category/:categoria' element={<CategoriesPage />} />
						<Route exact path='/item/:id' element={<ItemPage />}/>
						<Route exact path='/checkout' element={<CheckOutPage />}/>
					</Routes>
				</BrowserRouter>
			</div>
		</CardContextProvider>
    );
}

export default App;
