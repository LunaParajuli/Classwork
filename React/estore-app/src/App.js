import logo from './logo.svg';
import './App.css';
import First from './components/First'
import Second from './components/Second'
import { Test, Third } from './components/Third'
import Myroute from './Myroute';
import { CartReducer } from './redux/reducer/CartReducer';
import { legacy_createStore } from 'redux';  // top help the compiler to know that reducer is the contianer.
import { Provider } from 'react-redux';



function App() {
  const store = legacy_createStore(CartReducer)
  return (
    <>

      <Provider store={store}>
        <Myroute />
      </Provider>


    </>




  );
}

export default App;
