import React from 'react'

function Footer(){
    return(
        <div className='flex flex-col justify-center items-center'>
            <div className='text-2xl flex justify-center fixed bottom-0 bg-blue-200 w-full p-1'>
                <div className='px-16 text-blue-100'>
                <span className='text-green-500'>&lt;</span>
                <span className='text-black'>Pass</span>
                <span className='text-green-500'>Manager/</span>
                <span className='text-green-500'>&gt;</span>
                </div>
                <div>Created by 22IT146 Sukhadiya Dhruv</div>
            </div>
        </div>
    );
};

export default Footer;