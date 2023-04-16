import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import LoginForm from './pages/login';
import Users from './pages/Users';

function App() {
  return (
      <div className="App">
        <Provider store={store}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/user' element={<Users />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/login' element={<LoginForm />}></Route>
              </Routes>
            </BrowserRouter>
        </Provider>
        
      </div>
  );
    
}

export default App;
