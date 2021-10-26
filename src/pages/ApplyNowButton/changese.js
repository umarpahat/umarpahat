import {useState} from "react";
import {Link} from "react-router-dom";
import DragbleImg from "../../component/DragbleImg";
import backicon from "../../component/img/backicon.png";
import Select from "react-select";
import Progressbar from "../../component/ProgressBar";
import Header from "../Header";
import tip from "../../images/svg/tip.png";
import {Container} from "react-bootstrap";


const Kycdetailsformpayme = (props) => {
    const [show, setShow] = useState(false);

    const options = [
        {value: "male", label: "Male"},
        {value: "femal", label: "Female"},
        {value: "other", label: "Other"},
    ];
    return (
        <>
            <Header {...props}/>
            <div className='content darkBg'>
                <div className="form-container pb-5">
                    <div className="pb-4">
                        <Progressbar/>
                    </div>
                    <div
                        className="d-flex"
                        onClick={() => {
                            props.history.goBack();
                        }}
                        to="#"
                        style={{cursor: "pointer"}}
                    >
                        <div className="m-1">
                            <img src={backicon} alt="back Icon" className="img-fluid"/>
                        </div>
                        <div>
                            <h6 className="backbtnsty">Back</h6>
                        </div>
                    </div>
                    <Container>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                <br/>
                                <a className='back-arrow' href=''>Back</a>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                                <form>
                                    <div className="home-contact-form">
                                        <h4 className="form-heading text-center">Tell Us about Yourself</h4>
                                        <div className="form-block">
                                            <div class="form-group ms-input-group">
                                                <label className="form-label">Your Name</label>
                                                <input
                                                    type="text"
                                                    class="form-control ms-form-input"
                                                    placeholder="Enter Your Name"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">DOB(DD/MM/YY)</label>
                                                <div>
                                                </div>
                                            </div>
                                            <div class="form-group ms-input-group">
                                                <label className="form-label">Gender</label>
                                                <div>
                                                    <Select isSearchable={false} options={options}/>
                                                </div>
                                            </div>

                                            <div class="form-group ms-input-group">
                                                <label className="form-label">Pan Number</label>
                                                <input
                                                    type="text"
                                                    class="form-control ms-form-input"
                                                    placeholder="AJTPN9876M"
                                                />
                                            </div>
                                            <label className="form-label">
                                                Upload a pictue of your PAN card
                                            </label>
                                            <div className="file-uploading-block">
                                                <DragbleImg/>
                                                <span className="">or </span>

                                                <a
                                                    className="upload-btn-text"
                                                    href="javascript:document.querySelector('input#PAN').click()"
                                                >
                                                    Upload
                                                </a>
                                                <input type="file" class="custom-file-input" id="PAN" hidden/>
                                            </div>
                                            <div class="form-group ms-input-group">
                                                <div className="pb-1">
                                                    <label className="form-label ">Adhaar Card</label>
                                                </div>

                                                <label className="form-label">
                                                    Upload a pictue of your Aadhar card
                                                </label>
                                                <div style={{display: "flex"}}>
                                                    <div className="twoboxdregdrop file-uploading-block  mr-2">
                                                        <p className="small-text-ms mb-4">Front</p>

                                                        <DragbleImg/>
                                                        <span className="">or </span>

                                                        <a
                                                            className="upload-btn-text"
                                                            href="javascript:document.querySelector('input#Frontofadhaar').click()"
                                                        >
                                                            Browse File
                                                        </a>
                                                        <input
                                                            type="file"
                                                            class="custom-file-input"
                                                            id="Frontofadhaar"
                                                            hidden
                                                        />
                                                    </div>

                                                    <div
                                                        for="Backofadhaar"
                                                        className="file-uploading-block twoboxdregdrop ml-3"
                                                    >
                                                        <p className="small-text-ms mb-4">Back</p>

                                                        <DragbleImg/>
                                                        <span className="">or </span>
                                                        <a
                                                            href="javascript:document.querySelector('input#Backofadhaar').click()"
                                                            className="upload-btn-text"
                                                        >
                                                            Browse File
                                                        </a>
                                                        <input
                                                            type="file"
                                                            class="custom-file-input"
                                                            id="Backofadhaar"
                                                            hidden
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <ul>
                                                <li> All documents should be clear in quality</li>
                                                <li> We accept documents in pdf/jpg/png format.</li>
                                                <li>Max file size 32MB</li>
                                            </ul>
                                        </div>

                                        <Link
                                            to="/bank-details-PayMe India"
                                            className="submit-btn text-center"
                                        >
                                            <a style={{color: "#fff"}}>Proceed</a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                                <div className='height100'>
                                    <div>
                                        <div className='circle-half'>
                                            <div className='full-circle'>
                                                <img src={tip} alt='Icon'/>
                                            </div>
                                            <div className='full-text text-left'>
                                                <h5>Tips</h5>
                                                <p>In expedita et occaecati ullam a cumque maiores perspiciatis. Non
                                                    labore exercitationem
                                                    rerum nulla ea veniam facilis et. </p>
                                            </div>
                                        </div>
                                        <div className='circle-half'>
                                            <p className='p-a-10'>In expedita et occaecati ullam a cumque maiores
                                                perspiciatis. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Kycdetailsformpayme;
