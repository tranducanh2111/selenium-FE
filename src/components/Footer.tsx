import React from 'react';
import Image from 'next/image';
import FacebookLogo from './Icons/facebook';
import TwitterLogo from './Icons/twitter';
import InstagramLogo from './Icons/instagram';
import GitHubLogo from './Icons/github';

const Footer = () => {
    return (
        <main className='bg-white'>
            <section className='footer flex justify-between px-12 py-16'>
                <section className='w-80 space-y-4'>
                    <figure className='h-16 w-20 relative'>
                        <Image
                            src="/logo.png"
                            alt="logo"
                            layout="fill"
                            loading='lazy'
                            objectFit='contain'
                            sizes='(max-width: 992px) 80vw, 150px'
                            className='float-left'
                        />
                    </figure>
                    <p>Our mission is to fuel your athletic journey. Our commitment to excellence, outstanding customer service, and competitive pricing make us your one-stop destination for all things sports. Let&apos;s gear up for success together!</p>
                    <span className='icon-container  flex space-x-4'>
                        <button className='hover:scale-[1.1] transition duration-200 ease-in-out'><a href=""><FacebookLogo /></a></button>
                        <button className='hover:scale-[1.1] transition duration-200 ease-in-out'><a href=""><TwitterLogo /></a></button>
                        <button className='hover:scale-[1.1] transition duration-200 ease-in-out'><a href=""><InstagramLogo /></a></button>
                        <button className='hover:scale-[1.1] transition duration-200 ease-in-out'><a href=""><GitHubLogo /></a></button>
                    </span>
                </section>

                <section className='space-y-3'>
                    <h6 className='font-bold text-orange text-sm leading-5'>Company</h6>
                    <ul className='text-sm leading-5 space-y-2.5'>
                        <li className='hover:text-[#FF5A1A]'><a href="">About</a></li>
                        <li className='hover:text-[#FF5A1A]'><a href="">Careers</a></li>
                        <li className='hover:text-[#FF5A1A]'><a href="">Support</a></li>
                        <li className='hover:text-[#FF5A1A]'><a href="">Testimonials</a></li>
                        <li className='hover:text-[#FF5A1A]'><a href="">Terms of service</a></li>
                        <li className='hover:text-[#FF5A1A]'><a href="">Privacy policy</a></li>
                        <li className='hover:text-[#FF5A1A]'><a href="">Cookie policy</a></li>
                    </ul>
                </section>
            </section>
            <div className="bg-secondary px-[30px] sm:px-[70px] py-[8px]">
                <div className="text-center sm:flex justify-between w-[100%] m-auto py-2 text-gray-600">
                    <p className="text-footnote">
                        &copy; {new Date().getFullYear()} Selenium. All rights reserved.
                    </p>
                    <p className="text-footnote">
                        Contact us:{' '}
                        <a href="mailto:contact@selunium.com.au">contact@selunium.com.au</a>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Footer;