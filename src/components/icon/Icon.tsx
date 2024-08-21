import React from 'react';
import iconsSprite from '../../assets/img/svg-sprite.svg'


type IconPropsType = {
    urlIcon: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export function Icon(props: IconPropsType) {
    const {width, height, viewBox, urlIcon} = props

    return (
        <svg
            width={width || '38'}
             height={height || '38'}
             viewBox={viewBox || '0 0 38 38'}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${urlIcon}`}/>
        </svg>
    );
}


