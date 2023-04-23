
import './App.css';
import { Outlet } from "react-router-dom"
import Footer from './components/footer';


const App = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;