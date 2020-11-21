import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello1 from './components/Hello1'
import Message from './components/Message'
import Counter from './components/Counter'
function App()
{
  return ( 
  <div className="App">
    <Counter />
{/*<Message />
   <Greet name="Bruce" heroName="Batman" ><p>This is child props</p></Greet>
    <Greet name="Clark" heroName="Superman" ><button>Action</button></Greet>
    <Greet name="Diana" heroName="Wonderwomen" />
    <Welcome name="Bruce" heroName="Batman" />
    <Welcome name="Clark" heroName="Superman" />
    <Welcome name="Diana" heroName="Wonderwomen" />
   */}
    <Greet name="Diana" heroName="Wonderwomen" />
    <Welcome name="Bruce" heroName="Batman" />
  </div>
  )
}

export default App;
