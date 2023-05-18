import TopBar from './TopBar';
import Navbar from './Navbar';
import HiddenNav from './HiddenNav';

const Header = () => {
    return (
        <header>
            <TopBar />
            <Navbar />
            <HiddenNav />
        </header>
    );
};

export default Header;