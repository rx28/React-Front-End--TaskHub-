import FirstComponent from './FirstComponent';
import { FifthComponent } from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import LearningJavaScript from './LearningJavaSript';


export default function LearningComponent() {
  return (
    <div className="App">
      <FirstComponent /> {/*Shortcut*/}
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      <FifthComponent></FifthComponent>
      <LearningJavaScript></LearningJavaScript>
    </div>
  )
}
