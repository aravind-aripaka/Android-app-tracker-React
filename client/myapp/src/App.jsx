import { Coordinates,Header,Map,Time} from './Components';
import './App.css';

const App = () => {
  return (
  <div className="App">
    <div className="min-h-screen">
      <div className='hello'>
        <Header/>
      <div className="m-20 rounded-lg box-content h-100 w-300 p-4 border-4">
        <div className="text-black font-bold ">
        <Time/>
        </div>
        <Map/>
      </div>
        <Coordinates/>    
      </div>
    </div>
  </div>
  );
}
export default App;

// radial-gradient(circle, rgba(195,11,194,0) 4%, rgba(198,198,198,0) 35%, rgba(31,19,235,0) 68%, rgba(0,212,255,1) 100%);
//<Router to="/" component={Map}/>