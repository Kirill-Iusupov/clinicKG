import { MailFilled } from '@ant-design/icons';
import React from 'react';

const Mails = () => {
    return (
        <div className="flex items-center">
            <MailFilled  className='mr-[10px]' />
            <div>
                <p>healthcare@medical.com</p>
                <p>info@medical.com</p>
            </div>
        </div>
    );
}

export default Mails;
