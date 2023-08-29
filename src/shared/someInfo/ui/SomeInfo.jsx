import React from 'react';
import { PhoneFilled } from '@ant-design/icons';

const SomeInfo = () => {
    return (
        <div className={` flex items-center`} >
            <PhoneFilled rotate={90} className={` mr-[10px] font-normal	`}/>
            <div className="phones">
                <p>+(123) 555-0178-890</p>
                <p>+(123) 555-0104-891</p>
            </div>
        </div>
    );
}

export default SomeInfo;
