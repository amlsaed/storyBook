import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Counter } from './components/Counter/counter';
import Rating from './components/Rating/Rating';
import TextInput from './components/TextInput/TextInput';
function App() {
  const data=[
    {
    title:"first Accordion",
    content:"ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha"
   },
   {
    title:"first Accordion",
    content:"ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha"
   },
   {
    title:"first Accordion",
    content:"ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha"
   }
]
  return (
    <div className="App">
      <Counter/>
      <Rating/>
      <Accordion data={data}/>
      <TextInput name="name" placeholder="enter your name" label="Name " type=""text/>
    </div>
  );
}

export default App;
