import logo from './logo.svg';
import './App.css';
import ImageStatus from './components/Developer';

function App() {
  return (
    <div className="App">
      <ImageStatus 
        name= "Akshay Sonejee"
        role = "Software Engineer"
        joindate="2021-12-01"
        status={false}
      />
    </div>
  );
}

export default App;
