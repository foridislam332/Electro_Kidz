
const TopBar = () => {
    return (
        <div className="bg-navy text-white py-3">
            <div className="container">
                <div className="flex lg:flex-row flex-col items-center justify-between text-sm font-medium text-center space-y-2 lg:space-y-0">
                    <p>Free Shipping On Orders $50+</p>

                    <div className="md:flex items-center space-y-1 md:space-y-0">
                        <p className="md:border-r md:mr-4 md:pr-4">Call Us: +00 123 456 789</p>
                        <p>Email: electro.kidz@electro.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;