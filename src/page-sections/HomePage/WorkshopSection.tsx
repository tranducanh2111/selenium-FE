import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Workshop = () => {
	// Array of image URLs
	const imageURLs = [
		'/workshop1.jpg',
		'/workshop2.jpg',
        '/workshop3.jpg',
        '/avatar2.jpg',
        '/avatar1.jpg',
        '/avatar3.jpg',
	];

	// State to store the selected image index
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	// State to store whether the main image should transition
	const [shouldTransition, setShouldTransition] = useState(false);

    // Create a ref for the selected photo's DOM element
    const selectedPhotoRef = useRef<HTMLDivElement | null>(null);

	// Function to handle image change
	const changeImage = () => {
		// Trigger transition
		setShouldTransition(true);

		// After a brief delay, change the image and reset transition
		setTimeout(() => {
            setShouldTransition(false);
            setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageURLs.length);
		}, 1000);
	};

    // Scroll to the selected photo when it changes
    useEffect(() => {
        if (selectedPhotoRef.current) {
        selectedPhotoRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center', // Scroll to the center of the container
            inline: 'start', // Scroll horizontally to the start of the container
        });
        }
    }, [selectedImageIndex]);

    useEffect(() => {
		// Set up an interval to change the image every  seconds
		const intervalId = setInterval(changeImage, 6000);
        return () => {
			clearInterval(intervalId); // Clear the interval when the component unmounts
		};
	}, []);

	return (
		<main className="h-[390px] sm:h-[594px] max-w-[1160px] w-full flex flex-col items-center justify-center mx-auto px-[20px] sm:px-0 sm:py-[32px] space-y-5">
            {/* Heading */}
            <section className='space-y-[4px] w-full max-w-[518px]'>
                <h2 className="text-h3 sm:text-h2 text-center">Be a part of Selenium!</h2>
                <p className="text-grey text-center text-sm leading-6">
                    "Join us in shaping the future of innovation! Be a vital part of Selenium and revolutionize the consumer experience. Join Selenium today!"
                </p>
            </section>
           
           {/* Workshop Banner */}
            <section className="h-[390px] sm:h-[430px] w-full sm:grid sm:grid-cols-7 sm:gap-3 space-y-3 sm:space-y-0 sm:px-[40px]">
                {/* Main photo on the left on desktop view, on the top on the mobile view */}
                <div
                    className="h-[210px] sm:h-full relative sm:col-span-5"
                    id="main-photo-container"
                    style={{
                        opacity: shouldTransition ? 0 : 1, // Start with opacity 0, then change to 1 when loaded
                        transition: 'opacity 1s ease-in-out', // Transition effect for opacity
                    }}
                >
                    <Image src={imageURLs[selectedImageIndex]} alt="" loading='lazy' fill className="w-full h-full rounded-lg object-cover custom"/>
                </div>
                {/* Sub-photo container on the right, on the bottom on the mobile view */}
                <div className={`h-[65px] sm:h-full sm:max-h-content flex sm:flex-col overflow-x-auto relative rounded-[8px] sm:col-span-2 hide-scrollbar gap-3`} id="sub-photo-container">
                    {imageURLs.map((imageUrl, index) => (
                        <figure
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`flex-grow-0 flex-shrink-0 sm:flex-grow sm:flex-shrink rounded-[8px] object-cover ${selectedImageIndex === index ? 'relative border-4 sm:border-8 border-orange bg-orange' : ''}`}
                        >
                            <div className="flex items-stretch h-full">
                                <Image
                                    src={imageUrl}
                                    alt=""
                                    layout="responsive"
                                    loading='lazy'
                                    width={400}
                                    height={300}
                                    className={`h-full w-full rounded-[4px] object-cover`}
                                    style={{
                                        opacity: selectedImageIndex === index ? 1 : 0.8, // Adjust opacity for non-selected images
                                        transition: 'opacity 1s ease-in-out', // Transition effect
                                    }}
                                />
                            </div>
                            {selectedImageIndex === index && (
                                <div className="absolute inset-0 bg-[#E76F51] opacity-40"></div>
                            )}
                        </figure>
                    ))}
                </div>
            </section>
		</main>
	);
};

export default Workshop;