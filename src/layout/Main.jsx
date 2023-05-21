import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header/Header";

// react toast
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/Loader";
import ScrollToTop from "../components/ScrollToTop";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Main = () => {
    const navigation = useNavigation();

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Only animate once
        });
    }, []);

    let content;

    if (navigation.state === "loading") {
        content = <Loader />
    } else {
        content = <Outlet />
    }

    return (
        <>
            <ScrollToTop />
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