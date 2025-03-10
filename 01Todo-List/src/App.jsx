import Todos from './components/Todos';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
function App() {
  return (
   <>
      <Header searchBar={true}/>
      <Todos/>
      <Footer/>
   </>
  )
}

export default App
