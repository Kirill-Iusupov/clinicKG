import React from 'react';
import styles from "../styles/footer.module.scss"
import Logo from '../../../shared/logo/ui/Logo'


import {Links, SomeInfo, Days, Mails} from "../../../shared"
import FooterCard from '../../../entities/footerCard/ui/footerCard';
import Wrapper from '../../../shared/wrapper/ui/Wrapper';





const cards = [
    {img:'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/pediatrician-baby-doctor-1296x728-header.jpg?w=1155&h=1528',
    body:'High Quality Treatment and Extra Care for Kids',
    date:'July 05, 2019'
    },
    {img:'https://previews.123rf.com/images/deagreez/deagreez1807/deagreez180700498/104187885-portrait-of-busy-concentrated-scientist-with-stubble-in-white-lab-coat-gloves-analysing-looking-at.jpg',
    body:'Diagonosis of illness after taking Vaccine',
    date:'October 18, 2020'
    },
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvd0xlzJsafv84pSFnWghWyyLx5dBQa_GWzmM2d18R4wQ5-9axVjVzh_mjVbgIsNH_e-U&usqp=CAU',
    body:'Is COVID-19 Vaccine safe for all?',
    date:'January 25, 2021'
    }
]


const Footer = () => {


    return (
        <div className={`${styles.footer} `}>
            <Wrapper>
                <div className='flex text-white justify-between'> 
                    <div className='flex-col w-[350px] items-start'>
                        <Logo className={''} />
                        <p>One of the world’s leading hospitals providing safe and compasionate care as its best for everyone</p>
                        <button className='my-[20px] border border-solid border-white rounded-[5px] p-[5px] hover:bg-[white] hover:text-[black] transition duration-300'>Read More</button>
                        <Links />
                    </div>
                    <div className='news'>
                        <p>Latest News</p>
                        {!cards ? <h1>No news</h1> :
                        cards.map((card, index)=>(
                            <FooterCard key={index} info={card}/>
                        )) }
                    </div>
                    <div className='contact'>Quick Contact</div>
                </div>
                <div className={'w-[100%] border border-solid border-[grey] mt-[20px]'}></div>
                <div className='flex justify-around items-center py-[100px] text-[white]'>
                    <SomeInfo />
                    <Days />
                    <Mails />
                </div>
                <p className='text-center text-[white]'>Copyright@2022 Healthcare Hospital</p>
            </Wrapper>
        </div>
    );
}

export default Footer;

  
