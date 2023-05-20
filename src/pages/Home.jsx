import { Helmet } from "react-helmet";
import Category from "../sections/HomeSections/Category";
import Gallery from "../sections/HomeSections/Gallery";
import HeroBanner from "../sections/HomeSections/HeroBanner";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>ElectroKidz - Electronic Toys React Template</title>
            </Helmet>
            <HeroBanner />
            <Gallery />
            <Category />
        </>
    );
};

export default Home;