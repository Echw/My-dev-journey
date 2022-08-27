import { Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';
import ClickCounter from './pages/ClickCounter';
import PhotoSearch from './pages/PhotoSearch';
import HarryPotterAPI from './pages/HarryPotterAPI';
import Calculator from './pages/Calculator';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/counter" element={<ClickCounter />} />
        <Route path="/photos" element={<PhotoSearch />} />
        <Route path="/hp" element={<HarryPotterAPI />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
