import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import {S3_IMAGES_URL} from "../constant";
// import playBtn from "../images/svg/youtube-icon.svg";
// import YoutubeVideos from "../pages/YoutubeVideos";

let json = [{'videoId': 'ODylYT3vvQE', 'title': ''},
    {'videoId': 'nH4yxYZpfeY', 'title': ''},
    {'videoId': 'M9uYTo_-_ow', 'title': ''}
]
export const Videos = (props) => {
    const [videoId, setVideoId] = useState()
    const [videoTitle, setVideoTitle] = useState()
    const [showDialog, setShowDialog] = useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container-fluid px-sm-5 blog p-t-40">
            <div className="col-sm-12 col-md-12 reg-second-heading text-center">
                <h4>Our Videos to watch</h4>
            </div>
            <div className="container p-t-40">
                <Slider {...settings}>
                    {json.map((item, index) => {
                        console.log(item)
                        //
                        let imgUrl = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`
                        return (
                    <div className="blog-div relative" key={item.videoId} >
                        <img className='img-fluid' src={imgUrl} alt={item.title}/>
                        <img className='play-btn' onClick={()=>{
                            setVideoId(item.videoId)
                            open()
                        }}  src={S3_IMAGES_URL+'/svg/youtube-icon.svg'} alt='Play'/>
                        <p>{item.title}</p>
                    </div>)}
                    )}
                </Slider>
                {showDialog ?
                    fff: null}
            </div>
        </div>
    );
};
