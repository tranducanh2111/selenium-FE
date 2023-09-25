import React from 'react';
import Image from 'next/image';
import FacebookLogo from './Icons/facebook';
import TwitterLogo from './Icons/twitter';
import InstagramLogo from './Icons/instagram';
import GitHubLogo from './Icons/github';
import CopyrightLogo from './Icons/copyright';

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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem, debitis excepturi fugiat labore vitae eum, voluptas illo laboriosam laborum eos nulla hic aliquid! Cumque labore rerum atque. Sit, quod.</p>
                    <span className='icon-container  flex space-x-4'>
                        <button><a href=""><FacebookLogo /></a></button>
                        <button><a href=""><TwitterLogo /></a></button>
                        <button><a href=""><InstagramLogo /></a></button>
                        <button><a href=""><GitHubLogo /></a></button>
                    </span>
                </section>

                <section className='space-y-3'>
                    <h6 className='font-bold text-orange text-sm leading-5'>Company</h6>
                    <ul className='text-sm leading-5 space-y-2.5'>
                        <li><a href="">About</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">Terms of service</a></li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Cookie policy</a></li>
                    </ul>
                </section>
            </section>
            <section className='copyright bg-[#E6E6E6] text-[#818181] flex justify-between px-12 py-5'>
                <div className="flex items-center">
                    <CopyrightLogo />
                    <p className="ml-2">2022 Selenium. All rights reserved.</p>
                </div>
                <p>Contact us: contact@selenium.com.au</p>
            </section>
        </main>
    );
};

export default Footer;