import React, { useEffect, useState } from "react";
import blogPic from "../images/logo.png";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Blogs = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://blog.paymeindia.in/?json=get_recent_posts&count=12";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setPosts(res.posts));
  }, []);

  return (
    <div className="container-fluid px-3 px-sm-5 blog p-t-40">
      <div className="row">
      <div className="col-sm-12 col-md-12 reg-second-heading text-center">
        <h4>Our Blogs</h4>
      </div>
      </div>
      <div className="container p-t-40">
        <Carousel
          centerMode={true}
          autoPlay={true}
          stopOnHover={true}
          centerSlidePercentage={33}
         
          useKeyboardArrows={true}
          interval={2000}
          transitionTime={1000}
          infiniteLoop={true}
          showStatus={false}
          
        >
          {posts.map((post, index) => (
            <div className="col-sm-12 col-md-12">
              <div className="blogPic">
                <img src={blogPic} alt="blog" className="img-fluid" />
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
        </Carousel>
      </div>
    </div>
  );
};
