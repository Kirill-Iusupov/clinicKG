import { ClockCircleFilled } from '@ant-design/icons';
import React from 'react';

const Days = () => {
    return (
        <div className='flex items-center'>
            <ClockCircleFilled className='mr-[10px]'/>
            <div>
                <p>Mon-Fri: 9:00AM-10:00PM</p>
                <p>Sat-Sun: 9:00AM-01:00PM</p>
            </div>
        </div>
    );
}

export default Days;