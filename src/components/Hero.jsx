import React from 'react';
import { assets } from '../assets/assets';
import { Carousel } from 'react-responsive-carousel'; // Correct import
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Correct CSS import

const Hero = () => {
    const heroImages = [
        { id: 1, src: assets.hero_img, alt: 'Latest Arrivals' },
        { id: 2, src: assets.p_img50, alt: 'New Collection' },
        { id: 3, src: assets.p_img14, alt: 'Bestsellers' }
    ];

    return (
        <div className='border border-gray-400'>
            <div className='flex flex-col sm:flex-row'>
                {/* Hero Left Side */}
                <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                    <div className='text-[#414141]'>
                        <div className='flex items-center gap-2'>
                            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                        </div>

                        <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>LATEST ARRIVALS</h1>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        </div>
                    </div>
                </div>

                {/* Hero Right Side: Image Carousel */}
                <div className='w-full sm:w-1/2'>
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        stopOnHover={false}
                    >
                        {heroImages.map((image) => (
                            <div key={image.id} className="flex justify-center items-center h-80">
                                {/* Ensuring consistent height and width */}
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className='object-cover h-full w-full'
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Hero;
