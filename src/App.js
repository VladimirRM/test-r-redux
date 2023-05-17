import {useSelector} from 'react-redux'
import './App.css';
import { LoginPage } from './components/LoginPage/LoginPage';

function App() {

  const state = useSelector(state => state.auth)
     console.log(state)
  return (
    <div className="App">
   <h1>Вход</h1>
   <LoginPage/>
    </div>
  );
}

export default App;
