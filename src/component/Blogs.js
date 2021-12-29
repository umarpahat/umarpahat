import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {S3_IMAGES_URL} from "../constant";

export const Blogs = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://blog.paymeindia.in/?json=get_recent_posts&count=12";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setPosts(res.posts));
  }, []);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
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
    <div className="container-fluid px-3 px-sm-5 blog p-t-40">
      <div className="row">
      <div className="col-sm-12 col-md-12 reg-second-heading text-center">
        <h4>Our Blogs</h4>
      </div>
      </div>
      <div className="container p-t-40">
          <Slider {...settings}>
            {posts.map((post, index) => (
            <div className="blog-div" key={post.title}>
              <div className="blog-section">
              <div className="blogPic">
                <img src={S3_IMAGES_URL +'/logo.png'}  alt="blog" className="img-fluid" />
              </div>
              </div>
              <h5>
                {post.title} 
              </h5>
              <div
                className="line-clamp"
                style={{ fontWeight: 330, fontSize: "18px" }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
           
              <Link
                to={{ pathname: post.url }}
                target={"_blank"}
                className="green-link"
              >
                Read More
              </Link>
            </div>
          ))}
          </Slider>
      </div>
    </div>
  );
};
