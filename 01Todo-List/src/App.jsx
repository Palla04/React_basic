import Todos from './components/Todos';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
function App() {

  const onDelete =(todo)=>{
    console.log("I am on Delete",todo);
    
  }
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done0",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done1",
    },
    {
      sno: 3,
      title: "Go to the college",
      desc: "You need to go to the market to get this job done2",
    },
    {
      sno: 4,
      title: "Go to the school",
      desc: "You need to go to the market to get this job done3",
    }
  ]
  return (
   <>
      <Header title="My TodoList" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
   </>
  )
}

export default App
