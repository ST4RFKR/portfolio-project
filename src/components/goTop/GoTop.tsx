import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";
import {useEffect, useState} from "react";

export function GoTop() {
    const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])
    return (
        <>
            {showBtn && <StyledGoTopBtn onClick={() => {
                scroll.scrollToTop()
            }}>
                <Icon viewBox={'0 0 30 30'} width={'30'} height={'30'} urlIcon={'goTop'}></Icon>
            </StyledGoTopBtn>}
        </>

    )
}

const StyledGoTopBtn = styled.button`
    position: fixed;
    width: 30px;
    height: 30px;
    right: 30px;
    bottom: 30px;
    z-index: 1001;
    border-radius: 50%;

`
