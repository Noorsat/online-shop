import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchBrand, fetchDevices, fetchTypes } from './http/deviceAPI';
import { fetchTypesLocal } from './redux/actions/typeActions';
import { fetchBrandsLocal } from './redux/actions/brandActions';
import { fetchDevicesLocal } from './redux/actions/deviceActions';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchTypes().then(data => dispatch(fetchTypesLocal(data)))
    fetchBrand().then(data => dispatch(fetchBrandsLocal(data)))
    fetchDevices().then(data => dispatch(fetchDevicesLocal(data)))
  }, []) 

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter /> 
    </BrowserRouter>
  );
}

export default App;
