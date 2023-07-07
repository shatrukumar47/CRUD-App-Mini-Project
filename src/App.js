
import './App.css';
import MainRoutes from './AllRoutes/MainRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
     <div className='Container'>
      <MainRoutes />
     </div>
     <Footer />
    </div>
  );
}

export default App;
