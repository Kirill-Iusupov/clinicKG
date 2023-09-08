import React from 'react';

const FooterCard = ( { info } ) => {


    return (
        <button className='flex items-center w-[400px] my-[20px] text-start'>
            <img src={info.img} alt="img" className='w-[150px] h-[80px] rounded-[5px]'/>
            <div className='ml-[15px]'>
                <p>{info.body}</p>
                <p>{info.date}</p>
            </div>
        </button>
    );
}

export default FooterCard;
