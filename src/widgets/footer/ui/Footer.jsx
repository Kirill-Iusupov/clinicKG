import React from 'react';
import styles from "../styles/footer.module.scss"
import Logo from '../../../shared/logo/ui/Logo'


import {Links, SomeInfo, Days, Mails} from "../../../shared"


const Footer = () => {
    return (
        <div className={`${styles.footer} `}>
            <div className="container">
                <div className='text-white justify-around'> 
                    <div className='flex-col w-[350px] items-start'>
                        <Logo className={''} />
                        <p>One of the world’s leading hospitals providing safe and compasionate care as its best for everyone</p>
                        <button className='my-[20px] border border-solid border-white rounded-[5px] p-[5px] hover:bg-[white] hover:text-[black] transition duration-300'>Read More</button>
                        <Links />
                    </div>
                    <div className='news'>
                        <p>Latest News</p>
                        <div>
                            <img src="" alt="" />
                            <p>High Quality Treatment and Extra Care for Kids
July 05, 2019</p>
                        </div>
                    </div>
                    <div className='contact'>Quick Contact</div>
                </div>
                <div className={'w-[100%] border border-solid border-[grey] mt-[20px]'}></div>
                <div className='justify-around items-center py-[100px] text-[white]'>
                    <SomeInfo />
                    <Days />
                    <Mails />
                </div>
                <p className='text-center text-[white]'>Copyright@2022 Healthcare Hospital</p>
            </div>
        </div>
    );
}

export default Footer;

  
