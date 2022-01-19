import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {S3_IMAGES_URL} from '../constant'

let image = [
    {
        'socialUrlApple': '/svg/app-store.svg',
        'socialLinkApple': 'https://apps.apple.com/us/app/payme-india/id1282142711',
        'socialUrlAndroid': '/svg/google-play.svg',
        'socialLinkAndroid': 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia',

    }
]
export const SocialLink = (props) => {
    return (
        <>
            {
                image.map((item, index) => (
                    <div key={item.socialLinkApple}>
                    <div>
                        <a href={item.socialLinkAndroid}>
                            <img
                                className="img_google"
                                src={S3_IMAGES_URL + item.socialUrlAndroid}
                                alt="Pay Me India"
                            />
                        </a>
                    </div>
                <div>
                <a href={item.socialLinkApple}>
                <img
                className="img_google"
                src={S3_IMAGES_URL + item.socialUrlApple}
                alt="Social Apple"
                />
                </a>
                </div>
                </div>
                ))
            }
        </>
    );
};
