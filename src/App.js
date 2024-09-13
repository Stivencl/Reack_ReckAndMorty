
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RickAndMortyList from './componentes/rickAndMortyList';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<RickAndMortyList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
