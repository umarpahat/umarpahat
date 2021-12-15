import React, {Component} from "react";
import goldStarIcon from "../images/svg/star.svg";
import halfStarIcon from "../images/svg/star-half.svg";
import google from "../images/svg/google.svg";
import userIcon from "../images/svg/user-icon.svg";

export const Users = (props) => {
    return (
        <div className="container-fluid px-3 px-sm-5 testimonial p-t-20 p-b-30">
            <div className="col-sm-12 col-md-12 reg-second-heading text-center">
                <h4>Listen Our Users</h4>
            </div>
            <div className="container p-t-20">
                <div className="row ">
                    <div className="col col-md-7 ">
                        <h4 className="our_rating">Our ratings on  <img
                            src={google}
                            alt="G"
                            className="img-fluid"
                        />oogle store</h4>
                        <div className='star-align'><strong style={{fontSize:30, fontWeight:600}}>4.3 </strong>
                            <img
                                src={halfStarIcon}
                                alt="Star"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className="container p-t-50">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-4">
                        <div className="card">
                            <div className="user-head">
                                <h6>Aghilesh Nair</h6>
                                <span>Bengaluru</span>
                                <div>
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <p className="content p-b-30 pt-3 px-4 ">
                                Now That's what I call a Service... Ignoring the fact that
                                there were couple of days delay in disbursal, what I love is
                                the way they personalized my concern. A gentleman named
                                Mahesh called me up and made sure the disbursal happened. He
                                was very professional and sounded very eager to help. I
                                recommend this to everyone.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="card">
                            <div className="user-head">

                                <h6>Sakar Verma</h6>
                                <span>New Delhi</span>
                                <div>
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <p className="content p-b-30 pt-3 px-4 ">
                                Excellent service Best service ever. I needed some money for
                                medical purpose and they made it quick and easy for me. I
                                was in touch with Mr Vishal who is very professional and got
                                the job done quickly. The support staff is very courteous
                                and the transfer of money is lightening fast and easy
                                documentation as well. Looking forward for continued
                                business. Thank you team PayMe India.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="card">
                            <div className="user-head">

                                <h6>Nasrin Jahan</h6>
                                <span>New Delhi</span>
                                <div>
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                    <img
                                        src={goldStarIcon}
                                        alt="Star"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <p className="content p-b-30 pt-3 px-4 ">
                                Needed moneyy It was a miracle for me that PayMe India
                                approved my loan and disbursed the amount. I was not aware
                                of it they took the cheque from my doorstep. I wasn't sure
                                about the loan. However my loan was approved and I was
                                intimated via mail. It was a great help. I would recommend
                                them to others as well.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
