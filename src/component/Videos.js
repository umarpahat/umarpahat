import React, {useEffect, useState} from "react";
import Slider from "react-slick";


export const Videos = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = "https://blog.paymeindia.in/?json=get_recent_posts&count=3";
        fetch(url)
            .then((res) => res.json())
            .then((res) => setPosts(res.posts));
    }, []);
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
                            <div className="blog-div">
                            <object data='https://www.youtube.com/embed/ODylYT3vvQE?autoplay=1' width='100%'
                                    height='230px'/>
                        </div>
                        <div className="blog-div">
                            <object data='https://www.youtube.com/embed/nH4yxYZpfeY?autoplay=1' width='100%'
                                    height='230px'/>
                        </div>
                        <div className="blog-div">
                            <object data='https://www.youtube.com/embed/M9uYTo_-_ow?autoplay=1' width='100%'
                                    height='230px'/>
                        </div>
                        </Slider>
            </div>
        </div>
    );
};
