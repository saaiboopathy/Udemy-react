import Navbar from './components/navbar'
import Categories from './components/categories'
import Coversection from './components/coversection'
import Recommendation from './components/recommendation'
import Popular from './components/popularsection'
import Topicsection from './components/topicsection'
import Footer from './components/footer'

function App() {
    return (<>
        <Navbar></Navbar>
        <Categories></Categories>
        <Coversection></Coversection>
        <Recommendation></Recommendation>
        <Topicsection></Topicsection>
        <Popular></Popular>
        <Footer></Footer>
    </>)
}

export default App;