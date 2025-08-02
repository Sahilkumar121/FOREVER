import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/layouts/Navigation/navigation.component.jsx";
import Home from "./features/Pages/HomePage/homePage.jsx";
import Collection from "./features/Pages/collectionPage.jsx";
import Login from "./features/auth/login/login.jsx";
import SignUp from "./features/auth/signup/Signup.jsx";
import Footer from "./Components/layouts/Footer/Footer.jsx";
import AboutPage from "./features/Pages/AboutPage/AboutPage.jsx";

function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/collection' element={<Collection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
