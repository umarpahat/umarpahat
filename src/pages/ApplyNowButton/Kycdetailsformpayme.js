import React, {useState, useEffect} from "react";
import {
    hitAllUserData,
    hitAppUseCase,
} from "../../store/modules/userDetails/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getS3SignedUrl, postS3, api} from "../../services/api";
import Loader from "../../component/Loader";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from "universal-cookie";
import {Container} from "react-bootstrap";
import aadhaarCard from "../../images/svg/aadhaar-card.svg";
import panCard from "../../images/svg/pan-card.svg";
import selfie from "../../images/svg/selfie.svg";
import tip from "../../images/animated/kyc-option.gif";

const cookies = new Cookies();

const Kycdetailsformpayme = (props) => {
    const userCase = cookies.get("userCase");
    console.log("kyc now ", props);
    const token = cookies.get("token");
    const [show, setShow] = useState(false);
    const [name, setname] = useState("");
    const [date, setdate] = useState("");
    const [gender, setgender] = useState("");
    const [panNumber, setpanNumber] = useState("");
    const [panFile, setpanFile] = useState({});
    const [aadhaarFileFront, setaadhaarFileFront] = useState({});
    const [aadhaarFileBack, setaadhaarFileBack] = useState({});
    const [errorName, seterrorName] = useState("");
    const [errorDob, seterrorDob] = useState("");
    const [errorGender, seterrorGender] = useState("");
    const [errorPan, seterrorPan] = useState("");
    const [errorPan1, seterrorPan1] = useState("");
    const [errorUploadPan, seterrorUploadPan] = useState("");
    const [errorUploadAdhaarFront, seterrorUploadAdhaarFront] = useState("");
    const [errorUploadAdhaarBack, seterrorUploadAdhaarBack] = useState("");
    const [signedUrl, setsignedUrl] = useState({});
    const [loader, setloader] = useState(false);
    const [profile, setProfile] = useState({});
    const [errorProfile, seterrorProfile] = useState("");
    const [correctPan, setcorrectPan] = useState("");
    const [refresh, setRefresh] = useState(true);

    function refreshhi() {
        props.hitAllUserData({token: token});
        props.hitAppUseCase();
    }

    if (refresh) {
        refreshhi();
        setRefresh(false);
    }

    console.log("userCase", userCase);

    const handleClose = () => setShow(!show);

    // const handleOnKeyPress =(event)=> {
    //   return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)
    // }

    async function getSignedUrl() {
        const pathArray = [
            `adhar_card/${props.user.id}/back.jpg`,
            `adhar_card/${props.user.id}/front.jpg`,
            `pan_card/${props.user.id}/front.jpg`,
            `user_image/${props.user.id}/user_profile_photo.jpg`,
        ];
        const signedUrlObj = await getS3SignedUrl({
            token: token,
            payload: {s3_path: pathArray, bucket_name: "payme-test-documents"},
        });
        setsignedUrl(signedUrlObj.data.data);
        console.log(343434, signedUrlObj.data.data);
    }

    useEffect(() => {
        if (!token) {
            props.history.push({pathname: "/"});
        }
        getSignedUrl();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

    const handlePanUpload = (event) => {
        seterrorUploadPan("");
        setpanFile(event.target.files[0]);
    };
    const handleProfileUpload = (event) => {
        seterrorProfile("");
        setProfile(event.target.files[0]);
    };

    const handleAadhaarUploadFront = (event) => {
        seterrorUploadAdhaarFront("");
        setaadhaarFileFront(event.target.files[0]);
    };

    const handleAadhaarUploadBack = (event) => {
        seterrorUploadAdhaarBack("");
        setaadhaarFileBack(event.target.files[0]);
    };

    async function updateDocStatus(data) {
        return await api.post(
            "/api/update_document_status/",
            {doc_type: data.docType, path: data.path},
            {headers: {Authorization: "Token " + token}}
        );
    }

    async function updateBasicInfo() {
        return await api.post(
            "/api/offline_manual_kyc/",
            {dob: date, gender: gender, pan_card_number: panNumber},
            {headers: {Authorization: "Token " + token}}
        );
    }

    const handleSubmit = (event) => {
        // let panNum = event.target.value;
        // let pattarn = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
        event.preventDefault();
        if (!name) {
            seterrorName("Please enter name");
            return;
        }
        if (!date) {
            seterrorDob("Please enter date");
            return;
        }
        if (!gender) {
            seterrorGender("Please enter gender");
            return;
        }
        if (!panNumber) {
            seterrorPan("Please enter pan number");
            return;
        }

        if (!panFile.name) {
            seterrorUploadPan("Please upload pan");
            return;
        }
        if (!aadhaarFileFront.name) {
            seterrorUploadAdhaarFront("Please upload adhaar front");
            return;
        }
        if (!aadhaarFileBack.name) {
            seterrorUploadAdhaarBack("Please upload adhaar Back");
            return;
        }
        if (!profile.name) {
            seterrorProfile("Please Upload Profile");
            return;
        }

        setloader(true);
        const uploadAdhaarBack = postS3({
            res: aadhaarFileBack,
            presignedPostData: signedUrl[`adhar_card/${props.user.id}/back.jpg`],
        });
        const uploadAdhaarFront = postS3({
            res: aadhaarFileFront,
            presignedPostData: signedUrl[`adhar_card/${props.user.id}/front.jpg`],
        });

        const uploadPanCard = postS3({
            res: panFile,
            presignedPostData: signedUrl[`pan_card/${props.user.id}/front.jpg`],
        });
        const uploadProfile = postS3({
            res: profile,
            presignedPostData:
                signedUrl[`user_image/${props.user.id}/user_profile_photo.jpg`],
        });
        const updateAdhaarBackStatus = updateDocStatus({
            docType: "adhar_card",
            path: `adhar_card/${props.user.id}/back.jpg`,
        });
        const updateAdhaarFrontStatus = updateDocStatus({
            docType: "adhar_card",
            path: `adhar_card/${props.user.id}/front.jpg`,
        });

        const updatePanStatus = updateDocStatus({
            docType: "pan_card",
            path: `pan_card/${props.user.id}/front.jpg`,
        });
        const updateProfile = updateDocStatus({
            docType: "profile_pic_url",
            path: `user_image/${props.user.id}/user_profile_photo.jpg`,
        });
        Promise.all([
            uploadAdhaarBack,
            uploadAdhaarFront,
            uploadPanCard,
            uploadProfile,
            updateAdhaarBackStatus,
            updateProfile,
            updateAdhaarFrontStatus,
            updatePanStatus,
            updateBasicInfo(),
        ])
            .then((response) => {
                setloader(false);

                props.hitAllUserData({token: token});

                if (userCase === "apply-loan") {
                    if (!props.user.userbankdetail) {
                        props.history.push({
                            pathname: "/bank-details-payme",
                        });
                    } else if (
                        props.user.userbankdetail.verified === "VERIFIED" ||
                        props.user.userbankdetail.verified === "PENDING_VERIFICATION"
                    ) {
                        if (
                            props.user.userdocumentsmodel &&
                            (props.user.userdocumentsmodel.salary_slip_verified ===
                                "VERIFIED" ||
                                props.user.userdocumentsmodel.salary_slip_verified ===
                                "PENDING_VERIFICATION")
                        ) {
                            props.history.push({pathname: "/pending-approval"});
                        } else {
                            props.history.push({pathname: "/professional-details-payme"});
                        }
                    } else {
                        props.history.push({pathname: "/bank-details-payme"});
                    }
                } else if (userCase === "pay-rent") {
                    props.history.push({pathname: "/payrent-other-details"});
                } else {
                    props.history.push({pathname: "/"});
                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    cookies.remove("token", {path: "/"});
                }
                setloader(false);
            });
    };

    return (
        <>
            <Header {...props} />
            <div className="content darkBg">
                {loader ? (
                    <div className="loader">
                        {" "}
                        <Loader color={"#33658a"}/>{" "}
                    </div>
                ) : (
                    <Container>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                <br/>
                                <a
                                    className="back-arrow"
                                    onClick={() => {
                                        props.history.goBack();
                                    }}
                                >
                                    Back
                                </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12 text-center">
                                <form onSubmit={handleSubmit}>
                                    <div className="home-contact-form">
                                        <h4 className="form-heading formheadding">Complete your KYC</h4>
                                        <div className="form-block">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group ms-input-group">
                                                        <label className="form-label-text">Full Name</label>
                                                        <input
                                                            className="form-input "
                                                            placeholder="Enter Full Name"
                                                            value={name}
                                                            onChange={(event) => {
                                                                seterrorName("");
                                                                if (event.target.value.match(/^[A-Za-z{" "}]+$/)) {
                                                                    setname(event.target.value);
                                                                } else if (event.target.value.length === 0) {
                                                                    setname(event.target.value);
                                                                }
                                                            }}
                                                        />
                                                        {errorName ? (
                                                            <span style={{color: "red"}}>{errorName}</span>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group ms-input-group">
                                                        <label className="form-label-text">Date of Birth</label>
                                                        <input
                                                            type="date"
                                                            className="form-input"
                                                            value={date}
                                                            onChange={(event) => {
                                                                seterrorDob("");
                                                                setdate(event.target.value);
                                                            }}
                                                        />
                                                        {errorDob ? (
                                                            <span style={{color: "red"}}>{errorDob}</span>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group ms-input-group">
                                                        <label className="form-label-text">PAN Number</label>
                                                        <input
                                                            type="text"
                                                            className="form-input "
                                                            placeholder="Enter PAN number"
                                                            maxLength="10"
                                                            value={panNumber}
                                                            onChange={(event) => {
                                                                if (event.target.value != 6) {
                                                                    seterrorPan1("Pancard Number should be  6 digit's");
                                                                    setcorrectPan("");
                                                                }

                                                                if (event.target.value.match(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/)) {
                                                                    setcorrectPan("Pan Number Entered Properly");
                                                                    seterrorPan1("");
                                                                } else {
                                                                    seterrorPan1(
                                                                        "Please Enter a valid PanCard Number"
                                                                    );
                                                                }

                                                                seterrorPan("");
                                                                setpanNumber(event.target.value);
                                                            }}
                                                        />
                                                        {correctPan ? (
                                                            <span style={{color: "green"}}>{correctPan}</span>
                                                        ) : null}

                                                        {errorPan1 ? (
                                                            <span style={{color: "red"}}>{errorPan1}</span>
                                                        ) : null}

                                                        {errorPan ? (
                                                            <span style={{color: "red"}}>{errorPan}</span>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group ms-input-group">
                                                        <label className="form-label-text">Gender</label>
                                                        <div>
                                                            <select
                                                                value={gender}
                                                                placeholder='Select your gender'
                                                                onChange={(e) => {
                                                                    console.log(e.target.value);
                                                                    seterrorGender("");
                                                                    setgender(e.target.value);
                                                                }}
                                                                className="select-item"
                                                            >
                                                                <option value="">Select your gender</option>
                                                                <option value="male">Male</option>
                                                                <option value="female">Female</option>
                                                                <option value="other">Other</option>
                                                            </select>
                                                        </div>
                                                        {errorGender ? (
                                                            <span style={{color: "red"}}>{errorGender}</span>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='step-step p-t-50 border-btm'>
                                                <div className='img-wrapper'>
                                                    <img className='img-fluid' src={aadhaarCard} alt='Upload Adhar card'/>
                                                </div>
                                                <div className='img-text'>
                                                    <h6>Upload Adhar card</h6>
                                                    <p>Aperiam cumque in eos quibusdam. 500KB limit, jpg, png, pdf</p>
                                                </div>
                                                <div className='wrapper-button'>
                                                    <a className="green-button" onClick={
                                                        props.history.push({
                                                            pathname: "/kyc-details-form",
                                                        })}>Upload</a>
                                                </div>
                                            </div>
                                            <div className='step-step p-t-30 border-btm'>
                                                <div className='img-wrapper'>
                                                    <img className='img-fluid' src={panCard} alt='Upload Adhar card'/>
                                                </div>
                                                <div className='img-text'>
                                                    <h6>Upload Pan card</h6>
                                                    <p>Aperiam cumque in eos quibusdam.  500KB limit, jpg, png, pdf</p>
                                                </div>
                                                <div className='wrapper-button'>
                                                    <a className="green-button disbaledButton" onClick={
                                                        props.history.push({
                                                            pathname: "/kyc-details-form",
                                                        })}>Upload</a>
                                                </div>
                                            </div>
                                            <div className='step-step p-t-30 border-btm'>
                                                <div className='img-wrapper'>
                                                    <img className='img-fluid' src={selfie} alt='Upload Adhar card'/>
                                                </div>
                                                <div className='img-text'>
                                                    <h6>Upload Photo</h6>
                                                    <p>Aperiam cumque in eos quibusdam ipsum est veritatis. </p>
                                                </div>
                                                <div className='wrapper-button'>
                                                    <a className="green-button disbaledButton" onClick={
                                                        props.history.push({
                                                            pathname: "/kyc-details-form",
                                                        })}>Upload</a>
                                                </div>
                                            </div>
                                            <label className="form-label-text">
                                                Upload a pictue of your PAN card
                                            </label>
                                            <div className="file-uploading-block">
                                                <a
                                                    className="upload-btn-text"
                                                    href="javascript:document.querySelector('input#upload-pan').click()"
                                                >
                                                    Upload PAN
                                                </a>
                                                <br/>
                                                {panFile.name ? (
                                                    <span style={{color: "black"}} className="">
                            {panFile.name}
                          </span>
                                                ) : null}
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="custom-file-input"
                                                    name="Upload PAN"
                                                    id="upload-pan"
                                                    onChange={handlePanUpload}
                                                />
                                                {errorUploadPan ? (
                                                    <span style={{color: "red"}}>{errorUploadPan}</span>
                                                ) : null}
                                            </div>
                                            <div className="form-group ms-input-group">
                                                <div className="pb-1">
                                                    <label className="form-label-text ">Adhaar Card</label>
                                                </div>

                                                <label className="form-label-text">
                                                    Upload a pictue of your Aadhar card
                                                </label>
                                                <div style={{display: "flex"}}>
                                                    <div className="twoboxdregdrop file-uploading-block  mr-2">
                                                        <a
                                                            className="upload-btn-text"
                                                            href="javascript:document.querySelector('input#Frontofadhaar').click()"
                                                        >
                                                            Upload Adhaar Front
                                                        </a>
                                                        <br/>
                                                        {aadhaarFileFront.name ? (
                                                            <span style={{color: "black"}} className="">
                                {aadhaarFileFront.name}
                              </span>
                                                        ) : null}
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            className="custom-file-input"
                                                            id="Frontofadhaar"
                                                            hidden
                                                            onChange={handleAadhaarUploadFront}
                                                        />
                                                        {errorUploadAdhaarFront ? (
                                                            <span style={{color: "red"}}>
                                {errorUploadAdhaarFront}
                              </span>
                                                        ) : null}
                                                    </div>

                                                    <div
                                                        htmlFor="Backofadhaar"
                                                        className="file-uploading-block twoboxdregdrop ml-3"
                                                    >
                                                        <a
                                                            href="javascript:document.querySelector('input#Backofadhaar').click()"
                                                            className="upload-btn-text"
                                                        >
                                                            Upload Adhaar Back
                                                        </a>
                                                        <br/>
                                                        {aadhaarFileBack.name ? (
                                                            <span style={{color: "black"}} className="">
                                {aadhaarFileBack.name}
                              </span>
                                                        ) : null}
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            className="custom-file-input"
                                                            id="Backofadhaar"
                                                            hidden
                                                            onChange={handleAadhaarUploadBack}
                                                        />
                                                        {errorUploadAdhaarBack ? (
                                                            <span style={{color: "red"}}>
                                {errorUploadAdhaarBack}
                              </span>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <label className="form-label-text">Upload a Profile</label>
                                                <div className="file-uploading-block">
                                                    <a
                                                        className="upload-btn-text"
                                                        href="javascript:document.querySelector('input#upload-profile').click()"
                                                    >
                                                        Upload Profile
                                                    </a>
                                                    <br/>
                                                    {profile.name ? (
                                                        <span style={{color: "black"}} className="">
                              {profile.name}
                            </span>
                                                    ) : null}

                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="custom-file-input"
                                                        name="Upload Profile"
                                                        id="upload-profile"
                                                        onChange={handleProfileUpload}
                                                    />
                                                    {errorProfile ? (
                                                        <span style={{color: "red"}}>{errorProfile}</span>
                                                    ) : null}
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

                                        <input
                                            type="submit"
                                            style={{color: "white"}}
                                            className="getstartbtn "
                                            value="Save and  Continue"
                                            onChange={handleSubmit}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                                <div className="height100" style={{height: "100vh"}}>
                                    <div>
                                        <div className="circle-half" style={{borderRadius: 20, padding: 20, position:'relative'}}>
                                            <div className="full-circle" style={{
                                                margin: 'auto',
                                                position: 'absolute',
                                                top: -76,
                                                left: 0,
                                                right: 0,
                                                height:110,
                                                width:110
                                            }}>
                                                <img src={tip} className='img-fluid' alt="Icon"/>
                                            </div>
                                            <div className="full-text text-left" style={{width:'100%'}}>
                                                <h5>Tips</h5>
                                                <p>
                                                    In expedita et occaecati ullam a cumque maiores
                                                    perspiciatis. Non labore exercitationem rerum nulla ea
                                                    veniam facilis et.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                )}
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        token: state.authDetails.token,
        phoneNumber: state.authDetails.phone_number,
        user: state.user.userData,
        useCase: state.user.useCase,
    };
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            // hitLogin,
            hitAllUserData,
            hitAppUseCase,
            // hitForgotMpin,
        },
        dispatch
    );
};

export default connect(mapStateToProps, dispatchToProps)(Kycdetailsformpayme);
