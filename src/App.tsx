import { Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';
import ClickCounter from './pages/ClickCounter';
import PhotoSearch from './pages/PhotoSearch';
import HarryPotterAPI from './pages/HarryPotterAPI';

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
      </Routes>
    </div>
  );
}

export default App;
