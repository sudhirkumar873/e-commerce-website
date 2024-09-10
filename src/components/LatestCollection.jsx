import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    // Carousel settings
    const carouselResponsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <div className='my-10'>
            <div className='text-center py-10 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
                    Lorem Ipsum is simply dummy text of the printing and the typesetting property.Lorem Ipsum is simply dummy text.
                </p>
            </div>
            {/* Rendering Products */}
            <br/>
            <Carousel
                responsive={carouselResponsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}  // Changing images every 3 seconds
                keyBoardControl={true}
                showDots={true}
                arrows={false}  // Optionally remove arrows
            >
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </Carousel>
        </div>
    );
};

export default LatestCollection;
