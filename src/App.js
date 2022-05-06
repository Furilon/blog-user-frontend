import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "./Footer"
import Header from './Header'
import Homepage from './Homepage'
import BlogPage from "./BlogPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/posts/:postId" element={<BlogPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
