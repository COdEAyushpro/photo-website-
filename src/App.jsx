import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Photography from "./pages/Photography";
import Films from "./pages/Films";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Editorial from "./pages/Editorial";
import ReadMore from "./pages/ReadMore";
import ReadMore1 from "./pages/ReadMore1";
import ReadMore2 from "./pages/ReadMore2";
import ReadMore3 from "./pages/ReadMore3";
import ReadMore4 from "./pages/ReadMore4";
import ReadMore5 from "./pages/ReadMore5";
import ReadMore6 from "./pages/ReadMore6";
function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Photography />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/films" element={<Films />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/readmore" element={<ReadMore />} />
        <Route path="/readmore1" element={<ReadMore1 />} />
        <Route path="/readmore2" element={<ReadMore2 />} />
        <Route path="/readmore3" element={<ReadMore3 />} />
        <Route path="/readmore4" element={<ReadMore4 />} />
        <Route path="/readmore5" element={<ReadMore5 />} />
        <Route path="/readmore6" element={<ReadMore6 />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
