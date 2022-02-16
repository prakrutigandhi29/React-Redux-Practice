import {useSelector,useDispatch } from 'react-redux';
import './App.css';
import {incNumber,decNumber} from './Action';
function App() {
  const mystate= useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React Redux</h4>
  
      <div className="quantity">
        <button className="quantity__minus" title="Decrement"  onClick={()=>dispatch(decNumber())}><span>-</span></button>
        <input  name="quantity" type="text" className="quantity__input" value={mystate} />
        <button className="quantity__plus" title="Increment" onClick={()=>dispatch(incNumber())}><span>+</span></button>
      </div>
     </div>
    </div>
  );
}

export default App;
