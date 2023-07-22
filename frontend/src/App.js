import './App.css';
// import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <AllRoutes/>
     {/* <ToastContainer/> */}
    </div>
  );
}

export default App;
