import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Imgdesc from "./pages/Imgdesc";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/imgdesc/:id" element={<Imgdesc />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
