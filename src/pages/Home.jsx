import { Helmet } from "react-helmet";
import Category from "../sections/HomeSections/Category";
import Gallery from "../sections/HomeSections/Gallery";
import HeroBanner from "../sections/HomeSections/HeroBanner";
import BestProducts from "../sections/HomeSections/BestProducts";
import Deal from "../sections/HomeSections/Deal";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>ElectroKidz - Electronic Toys React Template</title>
            </Helmet>
            <HeroBanner />
            <BestProducts />
            <Gallery />
            <Category />
            <Deal />
        </>
    );
};

export default Home;