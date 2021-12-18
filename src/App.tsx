
import './App.css';
import Landing from "./pages/Landing"
import {BrowserRouter, Route, Routes} from "react-router-dom"
const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Landing/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
