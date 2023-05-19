import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header/Header";

// react toast
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/Loader";

const Main = () => {
    const navigation = useNavigation();

    let content;

    if (navigation.state === "loading") {
        content = <Loader />
    }

    else if (navigation.state !== "loading") {
        content = <Outlet />
    }
    return (
        <>
            <Header />
            <main>
                {content}
            </main>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default Main;