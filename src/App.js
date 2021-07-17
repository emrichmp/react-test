
import './App.css';
// import Interview from './interview';
import data from './data/data';
import Linegraph from './data/Linegraph'

function App() {
  return (
    <div className="App">
      {/* <Interview /> */}
      {/* {data}  */}
      <Linegraph data={data}/>
    </div>
  );
}

export default App;
