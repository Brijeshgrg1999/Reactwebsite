import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Enrollment from "./pages/Enrollment";
import Index from "./pages/Index";
import Story from "./pages/Story";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Index />}/>
          <Route path="about" element={<Story />} />
          <Route path="enrollment" element={<Enrollment />} />
      </Routes>
    </>
  );
}

export default App;