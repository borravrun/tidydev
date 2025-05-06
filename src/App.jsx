import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import QuickLinks from "./pages/QuickLinks.jsx";
import Settings from "./pages/Settings.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/quick-link" element={<QuickLinks />}/>
                </Route>
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;