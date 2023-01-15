import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MyWorks from "./pages/MyWorks/MyWorks";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="myworks" element={<MyWorks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
