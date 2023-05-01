import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Home } from "./pages/home";
import Education from './pages/edu.jsx';
import Projects from './pages/projects';
import Adminstration from "./pages/adminstration";
import Internships from "./pages/intern";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <main className="w-75 mx-auto p-5">
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/edu" element={<Education />}/>
              <Route path="/project" element={<Projects />}/>
              <Route path="/admin" element={<Adminstration />} />
              <Route path="/intern" element={<Internships />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
