import React, { useState } from 'react';
import "./EnterPage.css";
import LinkGroup from '../Link/LinkGroup';
import { Link } from 'react-router-dom';

function EnterPage() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);

        // 延迟一段时间后跳转到新页面
        setTimeout(() => {
            // 可以根据需要修改路径或添加其他逻辑
            window.location.href = "/home";
        }, 1000); // 设置延迟时间，单位为毫秒
    };

    return (
        <>
            <div className="enterPage">
                <button className={`enterButton ${clicked ? 'clicked' : ''}`} onClick={handleClick}>1F CONBOM</button>
            </div>
            <LinkGroup />
        </>
    );
}

export default EnterPage;
