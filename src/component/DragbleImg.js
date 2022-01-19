import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import ReactDropzone, { useDropzone } from "react-dropzone";
import {S3_IMAGES_URL} from "../constant";

function DragbleImg() {
  const [yourImage, setImage] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      );
    },
  });
  return (
    <Container>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the Image here...</p>
        ) : (
          <div>
            <img src={S3_IMAGES_URL+'/Camra.png'} alt='Drop the Image' style={{ padding: "10px" }} />
            <p>Drag and Drop </p>
          </div>
        )}
      </div>
      <div>
        {yourImage.map((upFile) => {
          return (
            <div>
              <img
                src={upFile.preview}
                style={{
                  width: "100px",
                  height: "100px",
                  border: "3px solid #ccc",
                }}
                alt="preview"
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default DragbleImg;
