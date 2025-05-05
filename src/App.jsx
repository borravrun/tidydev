import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import AppLayout from "./pages/AppLayout.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<Home />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;