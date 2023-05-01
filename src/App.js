import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Header } from "./header/header";
import { Home } from "./pages/home";
import Education from './pages/edu.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <main className="w-75 mx-auto p-5">
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/edu" element={<Education />}/>
            </Routes>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
