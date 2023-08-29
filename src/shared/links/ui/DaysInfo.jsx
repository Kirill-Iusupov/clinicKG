import React from 'react';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined} from "@ant-design/icons"


const Links = () => {
    return (
        <div>
            <a href={'https://www.facebook.com'} target='_blank'>
                <FacebookOutlined className={``} />
            </a>
            <a href="https://twitter.com" target='_blank'>
                <TwitterOutlined className={``}/>
            </a>
            <a href="https://instagram.com" target="_blank">
                <InstagramOutlined className={``}/>
            </a>
            <a href="https://linkedin.com" target="_blank">
                <LinkedinOutlined className={``}/>
            </a>
        </div>
    );
}

export default Links;
