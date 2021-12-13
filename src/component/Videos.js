import React, {useEffect, useState} from "react";
import blogPic from "../images/logo.png";
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

export const Videos = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = "https://blog.paymeindia.in/?json=get_recent_posts&count=3";
        fetch(url)
            .then((res) => res.json())
            .then((res) => setPosts(res.posts));
    }, []);

    return (
        <div className="container-fluid px-3 px-sm-5 blog p-t-40">
            <div className="col-sm-12 col-md-12 reg-second-heading text-center">
                <h4>Our Videos to watch</h4>
            </div>
            <div className="container p-t-40">
                <Carousel>
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <object data='https://www.youtube.com/embed/ODylYT3vvQE?autoplay=1' width='100%'
                                    height='230px'/>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <object data='https://www.youtube.com/embed/nH4yxYZpfeY?autoplay=1' width='100%'
                                    height='230px'/>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <object data='https://www.youtube.com/embed/M9uYTo_-_ow?autoplay=1' width='100%'
                                    height='230px'/>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};
