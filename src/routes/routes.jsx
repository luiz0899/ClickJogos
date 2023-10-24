import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}