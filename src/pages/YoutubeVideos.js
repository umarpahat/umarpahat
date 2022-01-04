import React, { useState } from "react";
import { Dialog} from "@reach/dialog";
import "@reach/dialog/styles.css";
import { toast } from "react-toastify";
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
