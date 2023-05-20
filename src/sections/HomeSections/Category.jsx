import React, { useEffect, useState } from 'react';
import CategoryCard from '../../components/CategoryCard';

// react tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Loader from '../../components/Loader';

const Category = () => {
    const [toys, setToys] = useState([]);
    const [category, setCategory] = useState('Handheld Games');

    useEffect(() => {
        fetch('http://localhost:5000/all-toys')
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    const filter = data.filter(product => product.subCategory === category);
                    setToys(filter)
                }
            })
    }, [category])

    let content;

    if (toys.length === 0) {
        content = <Loader />
        return
    }
    if (toys.length) {
        content = toys.map(product => <CategoryCard
            key={product._id}
            product={product}
        />)
    }

    return (
        <section className='pb-16 md:pb-[120px]'>
            <div className="container">
                {/* gallery section top */}
                <div className='text-center'>
                    <p className='text-blue md:text-xl tracking-widest drop-shadow-md'>Category</p>
                    <h1 className='text-3xl md:text-4xl font-bold text-navy drop-shadow-md'>Shop By Category</h1>
                </div>

                <Tabs className="mt-12">
                    <TabList className="text-navy text-lg text-center space-x-2">
                        <Tab onClick={() => setCategory('Handheld Games')}>Handheld Games</Tab>
                        <Tab onClick={() => setCategory('Educational Computers')}>Educational Computers</Tab>
                        <Tab onClick={() => setCategory('Storytelling Toys')}>Storytelling Toys</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                            {content}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 jus'>
                            {content}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                            {content}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default Category;