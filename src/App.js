import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/products';
import Login from './components/Login';
import { useState } from 'react';
import "./App.css";


function App(){
const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
 
return (
    <div className="App">
      <Navbar setToken={setToken}/>
      {token ? <Products />:<Login token={token} setToken={setToken} />}
      <Footer/>
    </div>
  );
}

export default App;
