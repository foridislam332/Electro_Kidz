import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from '../../components/CategoryCard';

const Category = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Handheld Games');
    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    const filter = data.filter(product => product.subCategory == category);
                    setProducts(filter)
                }
            })
    }, [category])

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
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
                            {
                                products.map(product => <CategoryCard
                                    key={product.name}
                                    product={product}
                                />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
                            {
                                products.map(product => <CategoryCard
                                    key={product.name}
                                    product={product}
                                />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
                            {
                                products.map(product => <CategoryCard
                                    key={product.name}
                                    product={product}
                                />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default Category;