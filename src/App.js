import './App.css';
//import LearningComponent from './components/learning-examples/LearningComponent';

import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    <div className="App">
    {/*<PlayingWithProps property1="value1" property2="value2"></PlayingWithProps> */}
     
     {/* <Counter></Counter> */}
     <TodoApp/>
     
    </div>
  )
}

// function PlayingWithProps(properties){
//   console.log(properties)
//   console.log(properties.property1)
//   console.log(properties.property2)
  
//   return (
    
//     <div>props</div>
//   )

// }
//Modrn approach to deconstruct
function PlayingWithProps({property1,property2}){
  console.log(property1)
  console.log(property2)
  
  return (
    
    <div>props</div>
  )

}




export default App;
