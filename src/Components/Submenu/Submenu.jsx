import React from 'react';
 

const Submenu = () => {
    return (
        <div >
            <ul
                className="flex z-1 mt-3 w-full p-2 gap-6 text-md md:2xl ">
                <li><a className='cursor-pointer'>Home</a></li>
                <li><a className='cursor-pointer'>Auctions</a></li>
                <li><a className='cursor-pointer'>Categories</a></li>
                <li><a className='cursor-pointer'>How to works</a></li>
            </ul>
        </div>
    );
};

export default Submenu;