import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
    return (
        <>
            <Header />
            <div className="min-h-[calc(100vh-137px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default App;
