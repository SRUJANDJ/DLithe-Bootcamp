
import './App.css';
import Navbar from './Components/Navbar';
import GreetWithClass from './Components/GreetWithClass';
import Counting from './Components/Counting';
import Count from './Components/Increment'
import Greet from './Components/Greet'
import Message from './Message';
import CountWithFunction from './Components/CountWithFunction';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Task from './Components/Task';
import Conditional from './Components/Conditional';
import TaskTwo from './Components/TaskTwo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <GreetWithClass age="30" />
      <Counting/>
      <Count/>
      <Greet name="team_one" marks="99" />
      <Greet name="team_two" marks="98" />
      <Message/>
      <CountWithFunction/>
      <Task/>
      <Conditional user="user" number="9" />
      <TaskTwo/>
      <Footer/>
    </div>
  );
}

export default App;
