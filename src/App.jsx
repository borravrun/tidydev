import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import QuickLinks from "./pages/QuickLinks.jsx";
import Settings from "./pages/Settings.jsx";
import Projects from "./pages/Projects.jsx";
import Prompts from "./pages/Prompts.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/quick-link" element={<QuickLinks />}/>
                    <Route path="/clipboard" element={<Clipboard />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/prompts" element={<Prompts/>}/>
                </Route>
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;