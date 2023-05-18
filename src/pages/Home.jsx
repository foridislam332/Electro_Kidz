import Gallery from "../sections/HomeSections/Gallery";
import HeroBanner from "../sections/HomeSections/HeroBanner";

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Gallery />
            <h1 className="text-3xl font-bold underline font-body">
                Hello world!
            </h1>
        </>
    );
};

export default Home;