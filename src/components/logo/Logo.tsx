import React from 'react';
import {Icon} from "../icon/Icon";

type LogoPropsType = {

}


export function Logo(props: LogoPropsType) {
    return (
        <a href="#">
        <Icon width={'50'} height={'50'} viewBox={'0 0 50 50'} urlIcon={'logo'}/>
        </a>
    );
}

