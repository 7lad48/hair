import './ImagesCarousel.scss'
import React from "react";
import Image from "next/image";

interface BannerProps {
    numOfImg: number
    speed: number;
}

export function ImageSection({ speed, numOfImg }: BannerProps) {
    const images = new Array(numOfImg).fill('')
    const imagesStyle = {
        animation: `swipe ${speed}s linear infinite`,
    };
    return (
        <div className={'images'} style={imagesStyle}>
            {images.map((image, index) => (
                <div className={'image'} key={index}>
                    <Image width={230} height={230} alt="photo" src={`/ImagesCarousel/${index}.jpg`}/>
                </div>
            ))}
        </div>
    );
}

export const ImagesCarousel = ({numOfImg, speed}: BannerProps) => {
    return (
        <div className={'bannerWrapper'}>
            <div className={'wrapper'}>
                <ImageSection speed={speed} numOfImg={numOfImg}/>
                <ImageSection speed={speed} numOfImg={numOfImg}/>
                {/*<ImageSection speed={speed} numOfImg={numOfImg}/>*/}
            </div>
        </div>
    );
}