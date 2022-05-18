import './App.css';
import Button from './components/Button.js'; 
import PreferenceList from './components/PreferenceList.js';

function App() {

  return (
    <div className="App">
      <PreferenceList />

      <Button onClick = {() => {console.log("You Clicked On Me!")}}
      type = "button" 
      buttonStyle = "btn--primary--outline"
      buttonSize = "btn--large"
      > Click Me! </Button>

      <Button onClick = {() => {console.log("You Clicked On Me!")}}
      type = "button" 
      buttonStyle = "btn--main-solid"
      buttonSize = "btn--medium"
      > Click Me! </Button>


    </div>
  );
}

export default App;
