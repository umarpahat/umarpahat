import React, {useEffect, useState} from "react";
import blogPic from "../images/logo.png";
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

export const Blogs = (props) => {
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
                <h4>Our Blogs</h4>
            </div>
            <div className="container p-t-40">
                <Carousel>
                    <div className="row">

                    {posts.map((post, index) => (


                            <div className="col-sm-12 col-md-4">
                                <div className="blogPic">
                                    <img src={blogPic} alt="blog" className="img-fluid"/>
                                </div>
                                <h5>{post.title} {index}</h5>
                                <div
                                    className="line-clamp"
                                    style={{fontWeight: 330, fontSize: "18px"}}
                                    dangerouslySetInnerHTML={{__html: post.content}}
                                />
                                <Link to={{pathname: post.url}} target={"_blank"} className="green-link">
                                    Read More
                                </Link>
                            </div>



                            ))}
                    </div>
                </Carousel>
            </div>
        </div>
    );
};
