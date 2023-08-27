//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import Navbar from "./Components/Navbar";

//PAGES
import Home from './Pages/Home.js';
import Index from './Pages/Index.js';
import New from './Pages/New.js';
import Show from './Pages/Show.js';
import Edit from './Pages/Edit.js';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/transactions' element={<Index />} />
            <Route path='/transactions/new' element={<New />} />
            <Route path='/transactions/:index' element={<Show />} />
            <Route path='/transactions/:index/edit' element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
