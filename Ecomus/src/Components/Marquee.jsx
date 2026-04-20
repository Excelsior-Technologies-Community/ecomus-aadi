import React from 'react';

const Marquee = () => {
    const marqueeItems = new Array(10).fill({
        text: "Spring Clearance Event: Save Up to 70%",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="" width="15" height="20" viewBox="0 0 15 20">
                <path d="M14.5833 8H8.61742L9.94318 0L0 12H5.96591L4.64015 20L14.5833 8"></path>
            </svg>
        )
    });

    return (
        <div className="tf-marquee bg_yellow-2 overflow-hidden flex items-center h-[100px] border-y border-black/5">
            <div className="wrap-marquee flex whitespace-nowrap">
                <div className="marquee-content flex items-center animate-marquee">
                    {marqueeItems.map((item, index) => (
                        <div key={index} className="marquee-item flex items-center gap-12 px-14">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 15 20">
                                    <path d="M14.5833 8H8.61742L9.94318 0L0 12H5.96591L4.64015 20L14.5833 8" fill="currentColor"></path>
                                </svg>
                            </div>
                            <p className="text font-medium text-[32px] tracking-tight text-black">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Duplicated for seamless loop */}
                <div className="marquee-content flex items-center animate-marquee">
                    {marqueeItems.map((item, index) => (
                        <div key={`dup-${index}`} className="marquee-item flex items-center gap-12 px-14">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 15 20">
                                    <path d="M14.5833 8H8.61742L9.94318 0L0 12H5.96591L4.64015 20L14.5833 8" fill="currentColor"></path>
                                </svg>
                            </div>
                            <p className="text font-medium text-[32px] tracking-tight text-black">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
