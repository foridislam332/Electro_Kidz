import Category from "../sections/HomeSections/Category";
import Gallery from "../sections/HomeSections/Gallery";
import HeroBanner from "../sections/HomeSections/HeroBanner";

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Gallery />
            <Category />
        </>
    );
};

export default Home;