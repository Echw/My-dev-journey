import { Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/todo" element={<ToDoList />} />
      </Routes>
    </div>
  );
}

export default App;
