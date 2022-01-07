import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import {S3_IMAGES_URL} from '../constant'
import {SocialLink} from "./SocialLink";

let image = [
    {
        'className': 'get-instant-loan',
        'urlImg': '/svg/instant-banner.svg',
        'btnTxt': 'Apply now',
        'btnLink': 'apply-loan',
        'desc': 'No more financial crunches with PayMe India. Avail instant loans upto Rs. 2 lakhs anytime-anywhere with no hassle.',
        'title': 'Get Instant personal loan'
    },
    {
        'className': 'gold-banner',
        'urlImg': '/svg/gold-banner.svg',
        'btnTxt': 'Start Investing',
        'btnLink': 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia',
        'desc': 'Accumulate Gold digitally to build your savings over time and save for future life events',
        'title': 'Invest in Digital Gold as low as Rs. 500'
    },
    {
        'className': 'pay-rent-banner',
        'urlImg': '/svg/pay-rent-banner.svg',
        'btnTxt': 'Pay your rent now',
        'btnLink': 'pay-rent-details',
        'desc': 'Get exciting rewards and cashback by paying your rent online with your credit card',
        'title': 'Pay Rent Using Credit Card'
    },
    {
        'className': 'cibil-banner-banner',
        'urlImg': '/svg/check-cibil-score.svg',
        'btnTxt': 'Check your CIBIL',
        'btnLink': 'get-cibil-report',
        'desc': 'Check your personalized credit report worth Rs.1500 in simple steps here!!',
        'title': 'Check your CIBIL score for free'
    },

]
export const CarouselPic = (props) => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={true} showThumbs={true}>
            {
                image.map((item, index) => (
                    <div className={item.className + ' banner'} key={item.title}>
                        <div className="container">
                            <div className="row align-items-center ">
                                <div className="col-sm-6 col-md-6 bannerAlign">
                                    <h1 className="heading2"> {item.title}</h1>
                                    <p className="heading6"> {item.desc}</p>
                                    <a className="btnLarge" href={item.btnLink}>
                                        {item.btnTxt}
                                    </a>

                                    <div className="home_social_link">
                                     <SocialLink/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div className='p-b-20'>
                                        <img className="img-fluid"
                                             alt="Instant Loan"
                                             src={S3_IMAGES_URL + item.urlImg}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Carousel>
    );
};
