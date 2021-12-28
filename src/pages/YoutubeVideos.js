import React, { useState, useEffect } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { Link } from "react-router-dom";
import cuate from "../images/svg/cuate.svg";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";
import cibilScoreIcon from "../images/svg/cibil-score-icon.svg";
import OtpDialog from "./OtpDialog";
import { GoogleLogin } from "react-google-login";
import { API_ENDPOINT_STAGING } from "../constant";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
toast.configure();
const options = {
  position: "top-center",
  autoClose: 2000,
  limit: 1,
  closeButton: false,
};

const YoutubeVideos = (props) => {
  const [videoId, setVideoId] = useState(`https://www.youtube.com/embed/${props.videoId}?autoplay=1`)
  const close = () => {
    props.close();
  };

  console.log(videoId)
  return (
    <>
      <Dialog isOpen={true} onDismiss={close} style={{paddingBottom:'0 !important'}}>
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <div style={{padding:20}}>
          <iframe id="iframe" src={videoId} frameBorder='0' width='100%' height='500px' allow='autoplay' style={{display:'block'}}/>
        </div>
      </Dialog>
    </>
  );
};

export default YoutubeVideos;
